import React from 'react';
import axios from 'axios';
import { customFilter } from './ChildrenCauseDonate';

const MWCauseDonate = ({ prices }) => {
  // constructor for buttons
  const constructor = () => {
    let filtered = customFilter('medical', prices);
    let buttonsArray = [];

    for (let i = 0; i < filtered.length; i++) {
      let priceObject = filtered[i];
      buttonsArray.push(constructDonateButton(priceObject));
    }

    return buttonsArray.reverse();
  };

  // create button instance
  const constructDonateButton = (priceObject) => {
    // build checkout object for button
    const handleCheckout = async (e) => {
      e.preventDefault();

      const { data } = await axios.post(
        '/api/checkout',
        {
          priceId: priceObject.id,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      window.location.assign(data);
    };

    return (
      <button
      className="flex h-10 md:h-12 lg:h-14 px-6 md:px-8 lg:px-10 
      bg-blue-500 hover:bg-blue-600 text-white font-semibold 
      rounded-full shadow-md hover:shadow-lg 
      items-center justify-center 
      transition-all duration-300 
      ease-in-out transform hover:-translate-y-1
      m-2"
        key={priceObject.id}
        onClick={handleCheckout}
      >
        {(priceObject.unit_amount / 100).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </button>
    );
  };

  return (
    <div className="w-full flex justify-evenly items-center pt-10">
      {prices && constructor()}
    </div>
  );
};

export default MWCauseDonate;
