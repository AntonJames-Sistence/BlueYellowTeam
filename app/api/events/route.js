import { NextResponse } from "next/server";
import {
  Database,
  push,
  set,
  ref,
  get,
  remove,
  update,
} from "firebase/database";
import { DB } from "../../../data/firebase";

export async function GET() {
  const url = `https://www.eventbriteapi.com/v3/organizers/60070710973/events/`;
  console.log("hello");

  try {
    const eventsRef = ref(DB, "events");
    const snapshot = await get(eventsRef);
    const privateToken = process.env.VITE_PRIVATE_TOKEN;

    if (snapshot.exists()) {
      const events = snapshot.val();
      // console.log(events);
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
      const url = `https://www.eventbriteapi.com/v3/events/${eventData[i].id}/?expand=venue`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${privateToken}`,
        },
      });

      const data = await response.json();

      // console.log(data);

      eventData[i].venue = data.venue.name;
      eventData[i].address = data.venue.address.localized_area_display;
    }

    await set(eventsRef, Object.values(eventData));
    return NextResponse.json(eventData);
  } catch (error) {
    return NextResponse.error(error);
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
      const url = `https://www.eventbriteapi.com/v3/events/${eventData[i].id}/?expand=venue`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${privateToken}`,
        },
      });

      const data = await response.json();

      eventData[i].venue = data.venue.name;
      eventData[i].address = data.venue.address.localized_area_display;
    }

    const updates = {};
    updates["/events"] = eventData;
    update(ref(DB), updates);
    return NextResponse.json(eventData);
  } catch (error) {
    return NextResponse.error(error);
  }
}
