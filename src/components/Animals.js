import React from 'react'
import Image from 'next/image';
import dogImage from '../assets/dog1.png';

export default function AnimalCard() {

    const dummyData = {
        name: "Lucy",
        breed: "Golden Retriever",
        owner: "Long Lam",
        hoursTrained: 100,
        profilePicture: dogImage, 
        initial: "L", 
    };

    return (
        <div className="flex flex-col rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto bg-white">
            <div className="relative w-full h-56">
                <img src={dummyData.profilePicture} alt={dummyData.name} className="object-contain h-full w-full" />
            </div>
            <div className="relative p-4">
                <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-full text-white text-2xl font-bold -mt-6 ml-4">
                    {dummyData.initial}
                </div>
                <div className="mt-8">
                    <p className="text-lg font-bold text-gray-800">{dummyData.name} - {dummyData.breed}</p>
                    <p className="text-gray-600"> {dummyData.owner} • Trained {dummyData.hoursTrained} hours</p>
                </div>
            </div>
        </div>
    );
}
