import Stripe from 'stripe';
import { buffer } from "node:stream/consumers";
import { NextResponse } from 'next/server';

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
}

export async function POST(request) {
  const rawBody = await buffer(request.body);
  // super important, need to get raw body.stripe
  const sig = request.headers.get('stripe-signature');
  let event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
    // Sending a response back to the frontend
    // return NextResponse.json({ message: 'hi from backend' });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Webhook signature verification failed",
      },
      {
        status: 400,
      }
    );
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      const customerEmail = paymentIntentSucceeded.receipt_email;
      if (customerEmail){
        // sendThankYouEmail(customerEmail); change this to fetch api/email
      }

      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({
    status: 200,
  });
};

