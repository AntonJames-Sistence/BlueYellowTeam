import Stripe from 'stripe';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    let data = await request.json(); // change for amount fetch
    let amount = data.amount;

    const product = await stripe.products.create({
        name: 'T-shirt', // change to section cause name
        description: 'Comfortable cotton t-shirt', // change to section cause
        images: ['https://example.com/t-shirt.png'], // change image ./causes-children.jpeg
    });

    const price = await stripe.prices.create({
        product: product.id,
        unit_amount: amount * 100, // change to amount got from data
        currency: 'usd',
    });
  
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
  