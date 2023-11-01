import React from "react";
import axios from "axios";

// custom filter for cause prices
export const customFilter = (keyword, array) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let ele = array[i];

    if (ele.nickname.toLowerCase().includes(keyword.toLowerCase())) {
      result.push(ele);
    }
  }

  return result;
};

const ChildrenCauseDonate = ({ prices }) => {
  // constructor for buttons
  const constructor = () => {
    let filtered = customFilter("children", prices);
    let buttonsArray = [];

    for (let i = 0; i < filtered.length; i++) {
      let priceObject = filtered[i];
      buttonsArray.push(constructDonateButton(priceObject));
    }

    return buttonsArray;
  };

  // create button instance
  const constructDonateButton = (priceObject) => {
    // build checkout object for button
    const handleCheckout = async (e) => {
      e.preventDefault();

      const { data } = await axios.post(
        "/api/checkout",
        {
          priceId: priceObject.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      window.location.assign(data);
    };

    return (
      <button
        className="flex h-8 p-4 
                        bg-gradient-to-b 
                        from-blue-400 to-yellow-400  
                        text-black text-l
                        hover:text-white 
                        font-bold
                        rounded-lg
                        items-center
                        justify-center
                        ease-in-out duration-300
                        place-self-center
                        m-2"
        key={priceObject.id}
        onClick={handleCheckout}
      >
        {(priceObject.unit_amount / 100).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </button>
    );
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-4">
      {prices && constructor()}
    </div>
  );
};

export default ChildrenCauseDonate;
