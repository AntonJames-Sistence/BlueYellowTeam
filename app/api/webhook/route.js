// import { buffer } from 'micro';
import { NextRequest, NextResponse } from 'next/server';

// const stripe = require('stripe')('sk_test_51MnVdXIjOeJEAQC7S6qG9mjlSJvJ2j3Gsy1227hfwWzwrKniyi329U3CwnSEQCjDWEUeS0bVNpCD0aaZPUdZ7QBB00W8vNskqK');
const stripe = process.env.STRIPE_WEBHOOK_SECRET;


export async function POST(NextRequest, NextResponse) {
  if (NextRequest.method === 'POST') {
    // const buf = await buffer(req);
    // const sig = req.headers['stripe-signature'];

    // let event;

    // try {
    //   event = stripe.webhooks.constructEvent(buf.toString(), sig, 'your_webhook_secret_key');
    // } catch (err) {
    //   console.log(`Webhook Error: ${err.message}`);
    //   return res.status(400).send(`Webhook Error: ${err.message}`);
    // }

    // // Handle the event
    // switch (event.type) {
    //   case 'payment_intent.succeeded':
    //     const paymentIntent = event.data.object;
    //     // Handle successful payment intent
    //     console.log('PaymentIntent was successful');
    //     break;
    //   // Add more cases to handle other event types if needed
    //   default:
    //     console.log(`Unhandled event type: ${event.type}`);
    // }

    NextResponse.json('hi from backend');
  } else {
    // res.setHeader('Allow', 'POST');
    NextResponse.status(405).end('Method Not Allowed');
  }
};

export default webhookHandler;
