import React from 'react';
import axios from 'axios';

export default function SimpleDonate() {
  // Preset donation amounts
  const donationAmounts = [5, 10, 25, 50, 100];

  // Handle checkout process
  const handleCheckout = async (amount) => {
    try {
      const { data } = await axios.post(
        '/api/checkout',
        { amount: amount * 100 }, // Amount in cents
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      window.location.assign(data.url); // Assuming 'data' has a 'url' field for redirection
    } catch (error) {
      console.error('Checkout error:', error);
      // Handle errors, possibly show a message to the user
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {donationAmounts.map((amount) => (
        <button
          key={amount}
          className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:scale-110"
          onClick={() => handleCheckout(amount)}
        >
          Donate ${amount}
        </button>
      ))}
    </div>
  );
}
