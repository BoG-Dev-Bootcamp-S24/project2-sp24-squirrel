import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { AdminaAnimals } from "./AdminAnimals";
import { CreateAnimal } from "./CreateAnimal";
import { CreateTrainingLog } from "./CreateTrainingLog";
import TrainingLogDisplay from "../components/TrainingLogDisplay";
import Animals from "../components/Animals";
import AnimalsDisplay from "../components/AnimalsDisplay";
import AllUsers from "../pages/AllUsers";

export default function Home() {
  return (
    <div className="bg-white w-screen h-screen flex flex-col justify-between items-center">
    <div>
      <AllUsers />
    </div>

    </div>
  );
}
