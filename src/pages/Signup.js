import React from "react";

export default function Home() {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full h-[1117px] relative">
        <div className="absolute w-full h-[102px] top-0 left-0">
          <div className="h-[102px] bg-white shadow-[0px_4px_4px_#00000040]">
            <div className="relative w-[253px] h-[50px] top-[26px] left-[49px]">
              <div className="absolute w-[83px] h-[50px] top-0 left-0 bg-[#f8190b] rounded-[15px]">
                <img
                  className="absolute w-[32px] h-[28px] top-[11px] left-[26px]"
                  alt="Vector"
                  src="vector.svg"
                />
              </div>
              <div className="absolute h-[41px] top-[5px] left-[89px] [font-family:'Oswald-Medium',Helvetica] font-medium text-black text-[50px] tracking-[-1.25px] leading-[normal] whitespace-nowrap">
                Progress
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[400px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[700px]">
            <div className="w-full justify-center [font-family:'Heebo-Bold',Helvetica] font-bold text-black text-[64px] tracking-[0] leading-[normal] text-center mb-20">
              Create Account
            </div>
            <div className="relative mb-10">
              <input
                type="text"
                placeholder="Full Name"
                className="h-[37px] w-full font-light text-black text-[25px] tracking-[0] leading-[normal] border-none outline-none"
              />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></div>
            </div>
            <div className="relative mb-10">
              <input
                type="text"
                placeholder="Email"
                className="h-[37px] w-full font-light text-black text-[25px] tracking-[0] leading-[normal] border-none outline-none"
              />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></div>
            </div>
            <div className="relative mb-20">
              <input
                type="password"
                placeholder="Password"
                className="h-[37px] w-full font-light text-black text-[25px] tracking-[0] leading-[normal] border-none outline-none"
              />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></div>
            </div>
            <div className="relative mb-20">
              <input
                type="password"
                placeholder="Confirm Password"
                className="h-[37px] w-full font-light text-black text-[25px] tracking-[0] leading-[normal] border-none outline-none"
              />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></div>
            </div>
            <button className="bg-[#d21312] text-white w-full h-[70px] rounded-[20px] font-medium text-[40px] text-center tracking-[0] leading-[normal] mb-4">
              Sign up
            </button>
            <p className="font-normal text-black text-[25px] text-center tracking-[0] leading-[normal] mb-0">
              <span className="font-light">Already have an account? </span>
              <span className="font-medium">Sign in</span>
            </p>
          </div>
        </div>
        <img
          className="absolute w-[229px] h-[250px] top-[867px] left-0"
          alt="Ellipse"
          src="ellipse-2.svg"
        />
        <p className="absolute h-[58px] top-[1032px] left-[625px] [font-family:'Heebo-Regular',Helvetica] font-normal text-[#000000b2] text-[20px] text-center tracking-[0] leading-[normal]">
          Made with ♡ by Long Lam
          <br />© 2023 BOG Developer Bootcamp. All rights reserved.
        </p>
      </div>
    </div>
  );
}
