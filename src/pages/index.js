import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { AdminaAnimals } from "./AdminAnimals";
import { CreateAnimal } from "./CreateAnimal";
import { CreateTrainingLog } from "./CreateTrainingLog";
import TrainingLogDisplay from "./TrainingLogDisplay";
import Animals from "../components/Animals";
import AnimalsDisplay from "./AnimalsDisplay";
import AllUsers from "../pages/AllUsers";
import { BrowserRouter as Router } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white w-screen h-screen flex flex-col justify-between items-center">
    <div>
      <Login />
    </div>

    </div>
  );
}
