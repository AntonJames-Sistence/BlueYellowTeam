'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChildrenCauseDonate from './ChildrenCauseDonate';
import MWCauseDonate from './MWCauseDonate';
import DPCauseDonate from './DPCauseDonate';

const Donate = () => {
  const [prices, setPrices] = useState([]);
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data } = await axios.get('/api/products');
    setPrices(data);
  };

  const handleCustom = async (e) => {
    e.preventDefault();

    const parsedAmount = parseInt(amount, 10); // Parses the string into an integer

    if (Number.isInteger(parsedAmount)) {
      // If the parsed amount is an integer, proceed with the logic

      const { data } = await axios.post(
        '/api/checkout/custom',
        {
          amount: amount
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      window.location.assign(data);
    } else {
      // If the entered amount is not a valid integer, handle the error or notify the user
      setErrorMessage('Please enter a valid amount');
    }
    
  }

  const customDonateSection = (
    <div>
      <div className='flex flex-row justify-center'>
        <div className=' flex items-center justify-center'>$</div>
        <input 
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          placeholder="Enter custom amount"
          className='rounded-lg border border-black m-2 pl-4'
        />
        <button onClick={handleCustom} 
                className='flex h-4 p-3 
                      bg-gradient-to-b 
                      from-blue-400 to-yellow-400  
                      text-black text-l
                      hover:text-white 
                      hover:scale-125
                      font-bold
                      rounded-lg
                      items-center
                      justify-center
                      ease-in-out duration-300
                      place-self-center
                      m-2
                      md:h-4 md:p-4 md:text-lg
                      lg:h-8 lg:p-4 lg:text-lg'>Custom Amount</button>
      </div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  )
  

  return (
    <section className="h-fit mx-8 my-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="flex flex-col justify-between">
        <div>
          <h4 className="font-bold text-2xl my-2 text-center">Children</h4>
          <div
            className="flex h-72 items-center font-bold rounded-2xl bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(./causes-children.jpeg)` }}
          ></div>
          <hr className="border-t border-gray-400 my-4"></hr>
          <div className="font-bold px-4">
            We empower children in crisis by offering vital support for their
            education, well-being, and personal growth. This includes providing
            clothing, educational materials, and collaborating with families,
            refugee centers, and NGOs to ensure every child receives the care
            and resources they deserve.
          </div>
        </div>
        <div>
          <hr className="border-t border-gray-400 my-4"></hr>
          {prices && <ChildrenCauseDonate prices={prices} />}
          {customDonateSection}
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h4 className="font-bold text-2xl my-2 text-center">
            Medical Workers
          </h4>
          <div
            className="flex h-72 items-center font-bold rounded-2xl bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(./causes-medical-2.jpeg)` }}
          ></div>
          <hr className="border-t border-gray-400 my-4"></hr>
          <div className="font-bold px-4">
            We partner with hospitals and healthcare experts across the United
            States to gather and deliver vital medical supplies to the front
            lines, where these resources play a pivotal role in saving lives.
          </div>
        </div>
        <div>
          <hr className="border-t border-gray-400 my-4"></hr>
          {prices && <MWCauseDonate prices={prices} />}
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h4 className="font-bold text-2xl my-2 text-center">
            Displaced People
          </h4>
          <div
            className="flex h-72 items-center font-bold rounded-2xl bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(./causes-displaced.jpeg)` }}
          ></div>
          <hr className="border-t border-gray-400 my-4"></hr>
          <div className="font-bold px-4">
            We are committed to assisting individuals who have lost their homes
            due to conflict, supporting their journey towards recovery. Our
            services encompass offering temporary shelter, providing food, and
            covering essential medical expenses for refugees and those displaced
            by crises.
          </div>
        </div>
        <div>
          <hr className="border-t border-gray-400 my-2"></hr>
          {prices && <DPCauseDonate prices={prices} />}
        </div>
      </div>
    </section>
  );
};

export default Donate;
