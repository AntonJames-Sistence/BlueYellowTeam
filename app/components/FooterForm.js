"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function FooterForm() {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("api/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(email),
    });

    if (res.ok) {
      toast.success("Email saved!");
      setEmail("");
    } else {
      toast.error("There was an error, we couldn't save your email");
    }
  };
  return (
    <form className="w-full h-full" onSubmit={handleSubmit}>
      <Toaster position="top-right" reverseOrder={false} />
      <h6 className="font-semibold text-2xl pb-2">Join our Newsletter</h6>
      <div className="h-full flex flex-col items-start space-y-2 ">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
