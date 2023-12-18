import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
}

export async function POST(request) {
  // super important, need to get raw body.stripe
  const sig = request.headers.get('stripe-signature') 
  console.log(sig)
  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    // Sending a response back to the frontend
    // return NextResponse.json({ message: 'hi from backend' });
  } catch (error) {
    return NextResponse.json({
      message: `Stripe error: ${error.message}`
    }, {
      status: 400,
    });
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      // let customerEmail = paymentIntentSucceeded.receipt_email;
      
      break;

    case 'checkout.session.completed':
      const checkoutSessionCompleted = event.data.object;
      let customerEmail = checkoutSessionCompleted.receipt_email;

      return NextResponse.json({ message: customerEmail });
      // sendThankYouEmail(customerEmail);

      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({
    status: 200,
  });
};