'use client';
import { useState } from "react";

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
              name: 'Children',
              description: 'Donate to children cause'
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
            <div className='flex flex-row justify-between'>
                {/* <div className=' flex items-center justify-center ml-2'>$</div> */}
                <input 
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                placeholder="Custom amount"
                className={`rounded-lg border m-2 text-center w-2/5
                ${errorMessage ? 'border-red-500' : 'border-black'}`}
                />
                <button onClick={handleCustomButton} 
                        className='flex h-4 p-3 
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
                            lg:h-8 lg:p-4 lg:text-xs'
                >Donate to {cause}</button>
            </div>
            {errorMessage && <p className="text-red-600 ml-2">{errorMessage}</p>}
        </div>
    )
}

export default CustomDonateField;