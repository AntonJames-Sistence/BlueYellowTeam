import Stripe from 'stripe';
import { buffer } from "node:stream/consumers";
import { NextResponse } from 'next/server';

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET_LIVE;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_LIVE);

export async function POST(request) {
  const rawBody = await buffer(request.body);
  // super important, need to get raw body.stripe
  const sig = request.headers.get('stripe-signature');
  let event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
    
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
          try {
              const response = await fetch('https://blue-yellow-foundation.vercel.app/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({ email: customerEmail }),
              });
  
              if (response.ok) {
              // Handle success, if needed
              } else {
              // Handle error
              }
          } catch (error) {
              // Handle error
          }
      
      }

      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({
    status: 200,
  });
};