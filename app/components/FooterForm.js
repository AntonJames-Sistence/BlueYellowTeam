'use client';
import { useRef } from 'react';

export default function FooterForm() {
  const emailRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="w-full h-full" onSubmit={handleSubmit}>
      <h6 className="font-semibold text-2xl pb-2">Join our Newsletter</h6>
      <div className="h-full flex flex-col items-start space-y-2 ">
        <input
          type="email"
          ref={emailRef}
          placeholder="Email Address"
          className="w-full sm:w-[75%] text-black rounded-full min-h-[40px] pl-3 bg-white shadow-md border-2 border-gray-200 focus:border-blue-500 outline-none"
          required
        />
        <button
          className="w-full sm:w-1/5 flex items-center min-h-[40px] justify-center text-white text-xl rounded-full font-bold bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 shadow-lg transform transition duration-150 ease-in-out"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
}
