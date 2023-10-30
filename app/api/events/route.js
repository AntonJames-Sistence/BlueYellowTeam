import { NextResponse } from 'next/server';

// export async function GET() {
//   const url = `https://www.eventbriteapi.com/v3/organizers/60070710973/events/`;

//   try {
//     const eventRequest = await fetch(url, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer CHI7FKU7DS3ECYBYONWX`,
//       },
//     });

//     if (!eventRequest.ok) {
//       throw new Error('Failed to fetch events from the API');
//     }

//     const eventData = await eventRequest.json();
//     return NextResponse.json(eventData);
//   } catch (error) {
//     return NextResponse.error();
//   }
// }
