'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

  const generateLink = async () => {
    // e.preventDefault()
    const { data } = await axios.post(
      '/api/checkout',
      {
        priceId: data[0].id,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(data, 'data');
    window.location.assign(data);
    return;
  };

  return (
    <div className="w-full flex flex-col items-center">
      <section className="flex flex-wrap gap-5 md:flex-row flex-col max-w-7xl pt-10">
        {causeData.map((cause, index) => (
          <ImageTextContainer
            key={index}
            img={cause.image}
            link={''}
            title={cause.title}
            para={cause.para}
            onClick={generateLink}
          />
        ))}
      </section>
    </div>
  );
}
