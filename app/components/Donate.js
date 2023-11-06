'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MWCauseDonate from './MWCauseDonate';
import { causeData } from '../../data/donate';
import ImageTextContainer from '../../components/ui/ImageTextContainer';

export default function Donate() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data } = await axios.get('/api/products');
    setPrices(data);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <MWCauseDonate prices={prices} />
      <section className="flex flex-wrap gap-5 md:flex-row flex-col max-w-7xl pt-10">
        {causeData.map((cause, index) => (
          <ImageTextContainer
            key={index}
            img={cause.image}
            link={''}
            title={cause.title}
            para={cause.para}
          />
        ))}
      </section>
    </div>
  );
}
