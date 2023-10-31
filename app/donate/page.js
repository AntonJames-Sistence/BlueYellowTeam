'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PricingCard from '../components/PricingCard';

const Donate = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data } = await axios.get('/api/getproducts');
    setPrices(data);
  };

  return (
    <section className="w-full min-h-screen">
      <div className="mx-8 grid grid-cols-4 gap-8">
        {prices &&
          prices.map((price) => <PricingCard price={price} key={price.id} />)}
      </div>
    </section>
  );
};

export default Donate;
