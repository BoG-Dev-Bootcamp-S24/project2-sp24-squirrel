import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { AdminaAnimals } from "./AdminAnimals";
import { CreateAnimal } from "./CreateAnimal";
import { CreateTrainingLog } from "./CreateTrainingLog";

export default function Home() {
  return (
    <div className="bg-white w-screen h-screen flex flex-col justify-between items-center">
      <CreateTrainingLog />
    </div>
  );
}
