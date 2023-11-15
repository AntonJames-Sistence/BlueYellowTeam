import Stripe from 'stripe';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const product = await stripe.products.create({
        name: 'T-shirt',
        description: 'Comfortable cotton t-shirt',
        images: ['https://example.com/t-shirt.png'],
    });

    const price = await stripe.prices.create({
        product: product.id,
        unit_amount: 2000,
        currency: 'usd',
    });
  
    // let data = await request.json(); // change for amount fetch
    // let amount = data.priceId;
    const session = await stripe.checkout.sessions.create({
        line_items: [{
            price: price.id,
            quantity: 1,
        }],
        mode: 'payment',
        success_url: 'http://localhost:3000', // change for thanks message
        cancel_url: 'http://localhost:3000/donate', // return to donate page
    });
  
    return NextResponse.json(session.url);
  }
  