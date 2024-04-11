import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [unmatch, setUnmatch] = useState(false);
  const [admin, setAdmin] = useState(false);
  async function signup() {
    if (password !== confirmPassword) {
      setUnmatch(true);
      return;
    }
    let res = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        admin: admin,
      }),
    });
    if (res.status === 200) {
      window.location.href = "/login";
    } else {
      setError(true);
    }
  }

  return (
    <div className="flex flex-col items-center w-full text-center [font-family:'Heebo-Bold',Helvetica]">
      <div className="w-full font-bold text-black text-[50px] tracking-[0] leading-[normal] mt-20 mb-10">
        Create Account
      </div>
      <div className="flex flex-col items-start w-1/3">
        <input
          type="text"
          placeholder="Full Name"
          className="border-b-2 border-red-600 w-full mt-8 text-xl"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          className="border-b-2 border-red-600 w-full mt-10 text-xl"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border-b-2 border-red-600 w-full mt-10 text-xl"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border-b-2 border-red-600 w-full mt-10 text-xl"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {unmatch ? (
          <div className="h-1 w-full text-xs">Passwords do not match</div>
        ) : (
          <div className="h-1"></div>
        )}
        <div className="relative mt-10 flex items-center">
          <input
            id="admin"
            type="checkbox"
            className="appearance-none cursor-pointer w-5 h-5 border-2 border-red-600 checked:bg-red-600"
            onChange={(e) => {
              setAdmin(e.target.checked);
            }}
          />
          <label
            htmlFor="admin"
            className="font-normal text-black text-20px ml-2 cursor-pointer"
          >
            Admin Access
          </label>
        </div>

        <button
          className="bg-[#d21312] text-white w-full h-[70px] rounded-[20px] font-medium text-[30px] text-center tracking-[0] leading-[normal] mt-10 mb-5"
          onClick={signup}
        >
          Sign up
        </button>
      </div>
      <p className="font-normal text-black text-[25px] text-center tracking-[0] leading-[normal] mb-0">
        <span className="font-light">Already have an account? </span>
        <a href="/" className="font-bold">
          Sign in
        </a>
      </p>
      <p className="absolute bottom-0 left-0 w-full h-[58px] text-center font-normal text-[#000000b2] text-[15px] tracking-[0] leading-[normal] bg-white shadow-[0px_4px_4px_#00000040]">
        Made with ♡ by Team Squirrel
        <br />© 2024 BOG Developer Bootcamp. All rights reserved.
      </p>
    </div>
  );
}
