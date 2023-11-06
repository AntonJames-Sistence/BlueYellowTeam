'use client';

import { useRef } from 'react';

export default function FooterForm() {
  const emailRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <h6 className="font-semibold text-2xl pb-2">Join our Newsletter</h6>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2">
        <input
          type="email"
          ref={emailRef}
          placeholder="Email Address"
          className="w-[85%] md:w-[80%] text-black rounded-full h-full  pl-3 py-3 bg-white"
          required
        />
        <button
          className="w-[30%] md:w-[15%] p-3 bg-white text-black h-full rounded-full"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
}
