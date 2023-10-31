import React from 'react';
import axios from 'axios';
import Link from 'next/link';

const PricingCard = ({ price }) => {
  const handleCheckout = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(
      '/api/checkout',
      {
        priceId: price.id,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    window.location.assign(data);
  };

  const dynamicImageUrl = (nickname) => {
    if (nickname.toLowerCase().includes('children')) {
      return `url(./causes-children.jpeg)`;
    } else if (nickname.toLowerCase().includes('medical')) {
      return `url(./causes-medical-2.jpeg)`;
    } else if (nickname.toLowerCase().includes('displaced')) {
      return `url(./causes-displaced.jpeg)`;
    }
  };

  const dynamicName = (nickname) => {
    if (nickname.toLowerCase().includes('children')) {
      return `children's`;
    } else if (nickname.toLowerCase().includes('medical')) {
      return `medical worker's`;
    } else if (nickname.toLowerCase().includes('displaced')) {
      return `displaced people`;
    }
  };

  return (
    <div
      className="border-black-100 
                        shadow-2xl
                        text-center 
                        mt-10 
                        max-w-[1040px] 
                        rounded-2xl"
    >
      <div>
        <div
          className="flex h-48 items-center font-bold rounded-t-2xl bg-cover bg-no-repeat"
          style={{ backgroundImage: dynamicImageUrl(price.nickname) }}
        ></div>
      </div>
      <div className="flex flex-col bg-gray-300 rounded-b-2xl">
        <div className="flex flex-col items-center justify-center pt-4">
          <h4 className="text-xl text-sky-700 drop-shadow-xl ">
            {`Contribute to the ${dynamicName(price.nickname)} cause`}
          </h4>
        </div>
        <button
          className="flex h-8 w-32 
                        bg-gradient-to-b 
                        from-sky-400 to-yellow-400  
                        text-black text-l
                        hover:text-white 
                        font-bold
                        rounded-lg
                        items-center
                        justify-center
                        ease-in-out duration-300
                        place-self-center
                        m-2"
          onClick={handleCheckout}
        >
          {`Donate ${(price.unit_amount / 100).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}`}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
