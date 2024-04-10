import React, { useState, useEffect } from "react";
import Sidebar from "@/components/sidebar";

export const AdminaAnimals = () => {
  const [animalData, setAnimalData] = useState([]);

  // Fetch data from API
  useEffect(() => {
    fetchData()
      .then((data) => setAnimalData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full relative">
        <Sidebar />
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
