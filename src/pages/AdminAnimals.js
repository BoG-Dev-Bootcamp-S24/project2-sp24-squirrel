import React, { useState, useEffect } from "react";
import Sidebar from "@/components/sidebar";
import SearchBar from "@/components/searchbar";

export const AdminaAnimals = () => {
  const [animalData, setAnimalData] = useState([]);
  async function getAnimals() {
    try {
      let res = await fetch("/api/admin/animals", {
        method: "GET",
      });
      animals = await res.json();
    } catch (e) {
      console.error(e.message);
      animals = [];
    }
  }
  return (
    <div className="flex flex-col w-full">
      <SearchBar />
      <div className="bg-white flex flex-row justify-between w-full">
        <Sidebar />
        <div className="mx-20 mt-10 w-full">
          <div className="flex justify-between items-center w-full border-b border-gray-300 pb-3">
            <p className="text-gray-500 font-30px">Animals</p>
            <button className="bg-white text-gray-500 border-2 border-solid border-gray px-4 py-2 hover:bg-gray-200">
              Create new
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 px-8 py-8">
          {animalData.map((animal) => (
            <div className="flex flex-col items-center" key={animal.name}>
              <img
                src={animal.image}
                alt={animal.name}
                className="w-full mb-2"
              />
              <h3 className="text-xl font-bold">{animal.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
