import React from "react";
import Login from "./Login";
import Signup from "./Signup";

export default function Home() {
  return (
    <div className="bg-white w-screen h-screen flex flex-col justify-between items-center">
      <Login />
    </div>
  );
}
