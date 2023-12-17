import { buffer } from 'micro';
import Stripe from 'stripe';
import { NextResponse, NextRequest } from 'next/server';

// Initialize the Stripe instance with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27', // Specify the Stripe API version you're using
  // Add other configurations if needed
});

// Your Stripe webhook secret for verifying webhook events
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (NextRequest, NextResponse) => {
  if (NextRequest.method === 'POST') {
    const buf = await buffer(NextRequest);
    const sig = NextRequest.headers['stripe-signature'];

    let event;

    try {
      event = stripe.webhooks.constructEvent(buf.toString(), sig, endpointSecret);
    } catch (err) {
      NextResponse.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const checkoutSessionCompleted = event.data.object;
        // Then define and call a function to handle the event checkout.session.completed
        // For example: handleCheckoutCompleted(checkoutSessionCompleted);
        break;
      // Handle other event types as needed
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    NextResponse.send('Received');
  } else {
    NextResponse.setHeader('Allow', 'POST');
    NextResponse.status(405).end('Method Not Allowed');
  }
};
