import Stripe from 'stripe';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const prices = await stripe.prices.list({
      limit: 20,
    });

    return NextResponse.json(prices.data);
  } catch (error) {
    return NextResponse.error('strip failed');
  }
}
