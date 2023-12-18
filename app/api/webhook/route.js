// import { buffer } from 'micro';
import { NextResponse } from 'next/server';
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request) {
  if (request.method === 'POST') {
    const sig = request.headers['stripe-signature'];
    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
      // Sending a response back to the frontend
      // return NextResponse.json({ message: 'hi from backend' });
    } catch (error) {
      return NextResponse.status(400).end(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const paymentIntentSucceeded = event.data.object;
        // Define and call a function to handle the event payment_intent.succeeded
        // Perform necessary operations with paymentIntentSucceeded
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.status(200).end();
  } else {
    return NextResponse.status(405).end('Method Not Allowed');
  }
};