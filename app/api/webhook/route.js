import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  // super important, need to get raw body for stripe
  
  let event
  const text = await req.text();
  const stripeSignature = req.headers.get("Stripe-Signature");
  
  try {
    event = stripe.webhooks.constructEvent(
        text,
        stripeSignature,
        endpointSecret
      );
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
              const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({ email: customerEmail }),
              });
              return NextResponse.json(
                {
                  message: response,
                },
                {
                  status: 200,
                }
              );
          } catch (error) {
            return NextResponse.json(
              {
                message: error,
              },
              {
                status: 400,
              }
            );
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

