import React from 'react';
import axios from 'axios';

// custom filter for cause prices
export const customFilter = (keyword, array) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let ele = array[i];

    if ( ele.nickname && ele.nickname.toLowerCase().includes(keyword.toLowerCase())) {
      result.push(ele);
    }
  }

  return result;
};

const ChildrenCauseDonate = ({ prices }) => {
  // constructor for buttons
  const constructor = () => {
    let filtered = customFilter('children', prices);
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
      className="flex h-4 w-5/6 p-3 
                  bg-gradient-to-b 
                  from-blue-400 to-yellow-400  
                  text-black text-sm
                  hover:text-white 
                  hover:scale-125
                  font-bold
                  rounded-lg
                  items-center
                  justify-center
                  ease-in-out duration-300
                  place-self-center
                  m-2
                  md:h-4 md:p-4 md:text-sm
                  lg:h-8 lg:p-4 lg:text-sm"
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
    <>
      <hr className="border-t border-gray-400 my-2"></hr>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-1">
        {prices && constructor()}
      </div>
      <hr className="border-t border-gray-400 my-2"></hr>
    </>
  );
};

export default ChildrenCauseDonate;
