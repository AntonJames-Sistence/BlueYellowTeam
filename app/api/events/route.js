import { NextResponse } from "next/server";
import {
  Database,
  push,
  set,
  ref,
  get,
  remove,
  update,
  off,
} from "firebase/database";
import { DB } from "../../../data/firebase";

export async function GET() {
  const url = `https://www.eventbriteapi.com/v3/organizers/60070710973/events/`;
  const eventsRef = ref(DB, "events");

  try {
    const snapshot = await get(eventsRef);
    const privateToken = process.env.VITE_PRIVATE_TOKEN;

    if (snapshot.exists()) {
      const events = snapshot.val();
      return NextResponse.json(events);
    }

    const eventRequest = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${privateToken}`,
      },
    });

    if (!eventRequest.ok) {
      throw new Error("Failed to fetch events from the API");
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
      const venueResponse = await fetch(venueUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${privateToken}`,
        },
      });

      const venueData = await venueResponse.json();

      eventData[i].venue = venueData.venue.name;
      eventData[i].address = venueData.venue.address.localized_area_display;
    }

    await set(eventsRef, Object.values(eventData));
    return NextResponse.json(eventData);
  } catch (error) {
    return NextResponse.error(error);
  } finally {
    off(eventsRef);
  }
}

export async function PUT() {
  const url = `https://www.eventbriteapi.com/v3/organizers/60070710973/events/`;

  try {
    const eventsRef = ref(DB, "events");

    const privateToken = process.env.VITE_PRIVATE_TOKEN;

    const eventRequest = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${privateToken}`,
      },
    });
    
    if (!eventRequest.ok) {
      throw new Error("Failed to fetch events from the API");
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

    const updates = {};
    updates["/events"] = eventData;
    update(ref(DB), updates);
    return NextResponse.json("Successfully updated Events");
  } catch (error) {
    return NextResponse.error(error);
  }
}
