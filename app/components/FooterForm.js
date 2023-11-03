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
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <input
          type="email"
          ref={emailRef}
          placeholder="Email Address"
          className="w-full rounded-full pl-3 py-3 bg-slate-200 dark:bg-[#3B4758]"
          required
        />
      </div>
    </form>
  );
}
