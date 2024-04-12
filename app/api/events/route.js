import { NextResponse } from "next/server";
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRESQL_DB, { ssl: 'require' });

export const GET = async () => {
  try {
    const events = await sql`SELECT * FROM events;`;

    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.error(error);
  }
}

export const PUT = async () => {
  const url = `https://www.eventbriteapi.com/v3/organizers/60070710973/events/`;

  try {
    const privateToken = process.env.EVENTBRITE_TOKEN;

    const eventRequest = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${privateToken}`,
      },
    });

    if (!eventRequest.ok) {
      return NextResponse.error("Failed to fetch data from eventbrite");
    }

    let eventData = await eventRequest.json();

    eventData = eventData.events.map((event) => ({
      name: event.name.text,
      date: event.start.local,
      image: event.logo.url,
      url: event.url,
      id: event.id,
    }));

    for (let i = 0; i < eventData.length; i++) {
      // Ticket fetch
      const ticketUrl = `https://www.eventbriteapi.com/v3/events/${eventData[i].id}/ticket_classes`;

      const ticketRes = await fetch(ticketUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${privateToken}`,
        },
      });

      const ticketData = await ticketRes.json();

      let min = Infinity;
      ticketData.ticket_classes.forEach((ticket) => {
        if (ticket.cost?.value) {
          min = Math.min(min, ticket.cost.value);
        }
      });
      eventData[i].cost = Number((min / 100).toFixed(2));

      // Venue fetch
      const venueUrl = `https://www.eventbriteapi.com/v3/events/${eventData[i].id}/?expand=venue`;
      const response = await fetch(venueUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${privateToken}`,
        },
      });

      const venueData = await response.json();

      eventData[i].venue = venueData.venue.name;
      eventData[i].address = venueData.venue.address.localized_area_display;
    }

    await sql`DROP TABLE IF EXISTS events;`;

    await sql`CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      name TEXT,
      event_id TEXT,
      date TIMESTAMP,
      image TEXT,
      url TEXT,
      cost NUMERIC,
      venue TEXT,
      address TEXT
    );`;

    for (const event of eventData) {
      // Insert events
      await sql`
        INSERT INTO events (name, event_id, date, image, url, cost, venue, address)
        VALUES (${event.name}, ${event.id}, ${event.date}, ${event.image}, ${event.url}, ${event.cost}, ${event.venue}, ${event.address});
      `;
    }   

    return NextResponse.json("Successfully updated Events");
  } catch (error) {
    return NextResponse.error("Couldn't retrieve Events");
  }
}