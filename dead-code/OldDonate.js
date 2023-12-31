'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChildrenCauseDonate from './ChildrenCauseDonate';
import MWCauseDonate from './MWCauseDonate';
import DPCauseDonate from './DPCauseDonate';
import CustomDonateField from './CustomDonateField';

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
    <section className="h-fit mx-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="flex flex-col justify-between">
        <div>
          <h4 className="font-bold text-2xl my-2 md:text-3xl text-center">Children</h4>
          <div
            className="flex h-48 lg:h-64 md:h-72 items-center rounded-2xl bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(./causes-children.jpeg)` }}
          ></div>
          <hr className="border-t border-gray-400 my-2"></hr>
          <div className="font-medium px-2 text-sm md:text-base lg:text-base">
            We empower children in crisis by offering vital support for their education and well-being. This includes providing clothing, educational materials, and collaborating with families, refugee centers, and NGOs to ensure every child receives the care and resources they need.
          </div>
        </div>
        <div>
          {prices && <ChildrenCauseDonate prices={prices} />}
          <CustomDonateField cause={'Children'} />
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h4 className="font-bold text-2xl my-2 md:text-3xl text-center">
            Medical Workers
          </h4>
          <div
            className="flex h-48 lg:h-64 md:h-72 items-center rounded-2xl bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(./causes-medical-2.jpeg)` }}
          ></div>
          <hr className="border-t border-gray-400 my-2"></hr>
          <div className="font-medium px-2 text-sm md:text-base lg:text-base">
            We partner with hospitals and healthcare experts across the United States to gather and deliver vital medical supplies to the front lines, where these resources play a pivotal role in saving lives.
          </div>
        </div>
        <div>
          {prices && <MWCauseDonate prices={prices} />}
          <CustomDonateField cause={'Medical workers'} />
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h4 className="font-bold text-2xl my-2 md:text-3xl text-center">
            Displaced People
          </h4>
          <div
            className="flex h-48 lg:h-64 md:h-72 items-center rounded-2xl bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(./causes-displaced.jpeg)` }}
          ></div>
          <hr className="border-t border-gray-400 my-2"></hr>
          <div className="font-medium px-2 text-sm md:text-base lg:text-base">
            We are committed to assisting individuals who have lost their homes due to conflict, supporting their journey towards recovery. Our services encompass offering temporary shelter, providing food, and covering essential medical expenses for refugees and those displaced by crises.
          </div>
        </div>
        <div>
          {prices && <DPCauseDonate prices={prices} />}
          <CustomDonateField cause={'Displaced people'} />
        </div>
      </div>
    </section>
  );
};

export default Donate;
