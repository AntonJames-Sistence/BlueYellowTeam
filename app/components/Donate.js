'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChildrenCauseDonate from './ChildrenCauseDonate';
import MWCauseDonate from './MWCauseDonate';
import DPCauseDonate from './DPCauseDonate';

const Donate = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data } = await axios.get('/api/products');
    setPrices(data);
  };

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
