'use client';
import { useState } from "react";
import axios from 'axios';

const CustomDonateField = ({ cause }) => {
    const [amount, setAmount] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleCustomButton = async (e) => {
        e.preventDefault();
    
        // improve: add logic for cents
        const parsedAmount = parseInt(amount, 10); // Parses the string into an integer
    
        if (Number.isInteger(parsedAmount)) {
          // If the parsed amount is an integer, proceed with the logic
    
          const { data } = await axios.post(
            '/api/checkout/custom',
            {
              amount: amount,
              name: cause,
              description: `Donate to ${cause} cause`
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

    return (
        <div>
            <div className='flex flex-row justify-between lg:justify-between md:justify-center lg:-my-2'>
                <div className="flex flex-row">
                    <div className='flex items-center justify-center text-lg mr-1 ml-2 font-medium'>$</div>
                    <input 
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                        placeholder="Custom"
                        className={`rounded-lg h-8 border w-28 text-center my-2
                        ${errorMessage ? 'border-red-500' : 'border-black'}`}
                    />
                </div>
                <button onClick={handleCustomButton} 
                        className='flex 
                            h-8 
                            p-1.5 
                            bg-yellow-400
                            hover:bg-blue-400
                            text-black
                            hover:text-white 
                            hover:scale-110
                            font-bold
                            rounded-lg
                            items-center
                            justify-center
                            ease-in-out duration-300
                            place-self-center
                            mx-2
                            text-xs
                            md:text-lg md:mx-4 md:px-6
                            lg:text-xs lg:mx-2 lg:px-4
                            lg:hover:scale-125'
                >Donate to {cause}</button>
            </div>
            {errorMessage ? (
                <p className="text-red-600 ml-2 font-medium md:text-center lg:text-left">{errorMessage}</p>
            ) : (
                <p className="ml-2 invisible">Placeholder text</p>
            )}
        </div>
    )
}

export default CustomDonateField;