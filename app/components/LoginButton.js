'use client';
import React from 'react';
import { signIn } from 'next-auth/react';

export default function LoginButton() {
  const handleSignInUser = async (e) => {
    e.preventDefault();
    await signIn('google');
  };

  return <button onClick={handleSignInUser}>Login</button>;
}
