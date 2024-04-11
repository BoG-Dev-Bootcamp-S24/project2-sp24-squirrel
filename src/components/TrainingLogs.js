import React from "react";
import Image from "next/image";
import penIcon from '../assets/solar_pen-bold.png';

export default function TrainingLogs(props) {
  // Using default props for demonstration purposes
  const {
    title = "Complete sit lessons",
    date = "2023-10-20T14:48:00.000Z",
    description = "Lucy finishes the sit lessons very well today. Should give her a treat",
    hours = 20,
    user = "Long Lam",
    animal = "Golden Retriever",
    name = "Lucy",
    click = () => console.log('Edit button clicked'),
  } = props;

  const formattedDate = new Date(date);
  const day = String(formattedDate.getDate()).padStart(2, '0');
  const month = formattedDate.toLocaleString('default', { month: 'short' });
  const year = formattedDate.getFullYear();

  return (
    <div className="flex items-start bg-white p-4 rounded-lg shadow-md space-x-4">
      <div 
        className="flex-shrink-0 text-white rounded-lg p-4 text-center"
        style={{ backgroundColor: '#2c2f6c' }}
      >
        <div className="text-2xl font-bold">{day}</div>
        <div>{month} - {year}</div>
      </div>
      <div className="flex-grow">
        <div className="flex items-baseline space-x-2">
          <h3 className="text-lg font-semibold text-black">{title}</h3>
          <span className="text-base text-gray-500">•</span>
          <span className="text-base text-gray-500">{hours} hours</span>
        </div>
        <p className="text-sm text-gray-500">{user} - {animal} - {name}</p>
        <p className="text-sm text-black">{description}</p>
      </div>
      <button onClick={click} className="flex items-center justify-center w-14 h-14 rounded-full bg-red-600">
                    <Image src={penIcon} alt="Pen" width={25} height={25} />
        </button>
    </div>
  );
}
