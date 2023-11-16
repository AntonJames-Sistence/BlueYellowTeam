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
            <div className='flex flex-row lg:justify-between md:justify-center lg:-my-2'>
                <div className="flex flex-row">
                    <div className='flex items-center justify-center ml-2 font-medium'>$</div>
                    <input 
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                        placeholder="Custom"
                        className={`rounded-lg h-8 border m-2 w-28 text-center md:m-4
                        ${errorMessage ? 'border-red-500' : 'border-black'}`}
                    />
                </div>
                <button onClick={handleCustomButton} 
                        className='flex 
                            h-10 
                            p-1.5 
                            bg-gradient-to-b 
                            from-blue-400 to-yellow-400  
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
                            md:text-lg md:mx-4
                            lg:text-xs lg:mx-2
                            lg:hover:scale-125'
                >Donate to {cause}</button>
            </div>
            {errorMessage ? (
                <p className="text-red-600 ml-2 font-medium">{errorMessage}</p>
            ) : (
                <p className="text-red-600 ml-2 invisible">Placeholder text</p>
            )}
        </div>
    )
}

export default CustomDonateField;