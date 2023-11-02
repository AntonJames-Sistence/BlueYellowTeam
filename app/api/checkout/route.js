import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  let data = await request.json();
  let priceId = data.priceId;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    // custom_fields: [
    //     {

    //     }
    // ]
    mode: 'payment',
    success_url: 'https://blue-yellow-foundation.vercel.app', // change for thanks message
    cancel_url: 'https://blue-yellow-foundation.vercel.app/donate', // return to donate page
  });

  return NextResponse.json(session.url);
}
