// import { buffer } from 'micro';
import { NextResponse } from 'next/server';

const stripe = process.env.STRIPE_WEBHOOK_SECRET;


export async function POST(request) {
  if (request.method === 'POST') {
    try {
      // Perform any necessary processing here if needed

      // Sending a response back to the frontend
      return NextResponse.json({ message: 'hi from backend' });
    } catch (error) {
      console.error('Error processing the request:', error);
      return NextResponse.status(500).end('Internal Server Error');
    }
  } else {
    return NextResponse.status(405).end('Method Not Allowed');
  }
};