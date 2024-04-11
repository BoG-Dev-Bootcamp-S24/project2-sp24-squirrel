import React, { useState } from 'react';
import SearchBar from '../components/searchbar';
import Image from 'next/image';
import quarterCircle from '../../public/images/quarterCircle.png';

export default function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

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
          <h1 className="mb-8 text-4xl text-center text-black font-bold">Create Account</h1>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full px-3 py-2 border-b-2 border-red-600 mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border-b-2 border-red-600 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border-b-2 border-red-600 mb-4"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-3 py-2 border-b-2 border-red-600 mb-4"
        />
        <div className="flex items-center mb-6 text-black">
          <input
            type="checkbox"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
            className="w-4 h-4 mr-2"
          />
          <span>Admin access</span>
        </div>
        <button
          onClick={handleSignup}
          className="w-full py-3 bg-red-600 text-white font-bold rounded mb-4"
        >
          Sign up
        </button>
        <div className="text-center">
          <span className="text-sm text-black">Already have an account? </span>
          <a href="/login" className="text-sm font-bold text-black">
            Sign in
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
