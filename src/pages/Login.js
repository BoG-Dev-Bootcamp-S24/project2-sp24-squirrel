import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function login() {
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
    <div className="flex flex-col items-center w-full text-center [font-family:'Heebo-Bold',Helvetica]">
      <div className="w-full font-bold text-black text-[50px] tracking-[0] leading-[normal] mt-20 mb-10">
        Login
      </div>
      <div className="flex flex-col items-start w-1/3">
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

        <button
          className="bg-[#d21312] text-white w-full h-[70px] rounded-[20px] font-medium text-[30px] text-center tracking-[0] leading-[normal] mt-10 mb-5"
          onClick={login}
        >
          Log in
        </button>
      </div>
      <p className="text-black text-[25px] text-center tracking-[0] leading-[normal] mb-0">
        <span className="font-light">Don't have an account? </span>
        <a href="/" className="font-bold">
          Sign up
        </a>
      </p>
      <p className="absolute bottom-0 left-0 w-full h-[58px] text-center font-normal text-[#000000b2] text-[15px] tracking-[0] leading-[normal] bg-white shadow-[0px_4px_4px_#00000040]">
        Made with ♡ by Team Squirrel
        <br />© 2024 BOG Developer Bootcamp. All rights reserved.
      </p>
    </div>
  );
}
