import React, { useState } from 'react';
import SearchBar from '../components/searchbar';
import Image from 'next/image';
import quarterCircle from '../../public/images/quarterCircle.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignup() {
    const res = await fetch("api/user/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    let verify = await res.json();
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0">
                <SearchBar />
        </div>
        <div className="fixed bottom-0 left-0">
        <Image src={quarterCircle} alt="Quarter Circle" />
      </div>
      <div className="flex flex-col justify-center min-h-screen pt-20 p-6 bg-white">
        <div className="w-full max-w-md mx-auto">
          <h1 className="mb-8 text-4xl text-center text-black font-bold">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border-b-2 border-red-600 mb-4 text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border-b-2 border-red-600 mb-4 text-black"
        />

        <button
          onClick={handleSignup}
          className="w-full py-3 bg-red-600 text-white font-bold rounded mb-4"
        >
          Log in
        </button>
        <div className="text-center">
          <span className="text-sm text-black">Don't have an account? </span>
          <a href="/login" className="text-sm font-bold text-black">
            Log in
          </a>
        </div>
      </div>
        <p className="mt-10 text-center text-sm text-gray-700">
          Made with ♥ by Long Lam
          <br />
          © 2023 BOG Developer Bootcamp. All rights reserved.
        </p>
      </div>
    </>
  );
}
