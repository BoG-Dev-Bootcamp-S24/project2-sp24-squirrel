import React from 'react';
import Animals from "./Animals";
import Searchbar from "./searchbar.js";
import Sidebar from "./sidebar.js";

export default function AnimalsDisplay({ user, allAnimals }) {
    const animal = {
        imageLocation: "/images/dog1.png",
        name: "Lucy",
        breed: "Golden Retriever",
        owner: "Long Lam",
        hours: "100"
    };

    const animalDisplay = new Array(6).fill(animal);

    return (
        <div className="relative w-full h-full mt-0 p-0">
            <div className="fixed top-0 left-0 right-0">
                <Searchbar />
            </div>

            <div className="flex w-full h-full pt-16 m-0"> {}
                <div className="z-10">
                    <Sidebar />
                </div>

                <div className="flex-grow overflow-hidden py-10">
                <>
                    <div className="flex flex-row justify-start items-start flex-wrap text-black">
                    {animalDisplay.length === 0 ? (
                        <div>Loading...</div>
                    ) : (
                        animalDisplay.map((animal, index) => (
                        <Animals key={index} animal={animal} />
                        ))
                    )}
                    </div>
                </>
                </div>
            </div>
        </div>
    );
}
