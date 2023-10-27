"use client"

import React, { useState } from 'react';

const stripe = require('stripe')(process.env.STRIPE_TEST);


export default function Donation() {
  const [donationAmount, setDonationAmount] = useState(100.00);
  const [anonymousDonation, setAnonymousDonation] = useState(false);

  const handleDonationChange = (amount) => {
    setDonationAmount(amount);
  };

  const handleAnonymousChange = () => {
    setAnonymousDonation(!anonymousDonation);
  };

  async function handlePayment() {
    try {
      const response = await fetch('/api/stripe', {
        method: 'POST',
      });
      
      if (response.ok) {
        const data = await response.json();
        // Now you have the payment intent's client secret in data.client_secret
        // You can use this client secret to confirm the payment on the client side.
      } else {
        // Handle the error
        console.error('Failed to create payment intent:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='flex flex-col place-items-center p-3'>
      <h1>Donations</h1>

      <h2>Donation Amount</h2>
      <div>
        {[10, 25, 50, 100, 250].map((amount) => (
          <button key={amount} onClick={() => handleDonationChange(amount)}>
            ${amount.toFixed(2)}
          </button>
        ))}
      </div>
      <div>
        <label>Custom Amount</label>
        <input
            className='ml-2 border border-black'
            type="number"
            step="01.00"
            value={donationAmount.toFixed(2)}
            onChange={(e) => handleDonationChange(parseFloat(e.target.value))}
        />
      </div>

      <h2>Select Payment Method</h2>
      <div>
        <label>
          <input type="radio" name="paymentMethod" value="stripe" defaultChecked />
          Stripe - Credit Card
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="paymentMethod" value="paypal" />
          PayPal
        </label>
      </div>

      <h2>Personal Info</h2>
      <div className='mb-2'>
        <label>
          First Name
          <input className='ml-2 border border-black' type="text" />
        </label>
      </div>
      <div className='mb-2'>
        <label>
          Last Name
          <input className='ml-2 border border-black' type="text" />
        </label>
      </div>
      <div className='mb-2'>
        <label>
          Email Address
          <input className='ml-2 border border-black' type="email" />
        </label>
      </div>
      <div>
        <label>
          Make this an anonymous donation
          <input
            className='ml-2'
            type="checkbox"
            onChange={handleAnonymousChange}
            checked={anonymousDonation}
          />
        </label>
      </div>

      <h2>Credit Card Info</h2>
      <p>This is a secure SSL encrypted payment.</p>
      <div className='mb-2'>
        <label>
          Card Number *
          <input className='ml-2 border border-black' type="text" />
        </label>
      </div>
      <div className='mb-2'>
        <label>
          CVC *
          <input className='ml-2 border border-black' type="text" />
        </label>
      </div>
      <div className='mb-2'>
        <label>
          Cardholder Name *
          <input className='ml-2 border border-black' type="text" />
        </label>
      </div>
      <div className='mb-2'>
        <label>
          Expiration *
          <input className='ml-2 border border-black' type="text" placeholder="MM/YY" />
        </label>
      </div>

      <p>Donation Total: ${donationAmount.toFixed(2)}</p>

      <button className='flex h-8 w-32 
                        bg-gradient-to-b 
                        from-blue-500 to-yellow-500 
                        hover:from-indigo-600 
                        hover:to-orange-600  
                        text-black text-l
                        hover:text-white 
                        font-bold 
                        shadow-md 
                        rounded-2xl
                        items-center
                        justify-center
                        hover-animation
                        self-center'
              onClick={handlePayment}>
        Donate</button>
    </div>
  );
}