import React from "react";
import TrainingLogs from "./TrainingLogs";
import addIcon from '../assets/icon-add.png';

const mockData = [
    {
        title: "Complete sit lessons",
        date: "2023-10-20T14:48:00.000Z",
        description: "Lucy finishes the sit lessons very well today. Should give her a treat",
        hours: 20,
        user: "Long Lam",
        animal: "Golden Retriever",
        name: "Lucy",
      },
      {
        title: "Complete sit lessons",
        date: "2023-10-20T14:48:00.000Z",
        description: "Lucy finishes the sit lessons very well today. Should give her a treat",
        hours: 20,
        user: "Long Lam",
        animal: "Golden Retriever",
        name: "Lucy",
      },
      {
        title: "Complete sit lessons",
        date: "2023-10-20T14:48:00.000Z",
        description: "Lucy finishes the sit lessons very well today. Should give her a treat",
        hours: 20,
        user: "Long Lam",
        animal: "Golden Retriever",
        name: "Lucy",
      },
      {
        title: "Complete sit lessons",
        date: "2023-10-20T14:48:00.000Z",
        description: "Lucy finishes the sit lessons very well today. Should give her a treat",
        hours: 20,
        user: "Long Lam",
        animal: "Golden Retriever",
        name: "Lucy",
      },
];

export default function TrainingLogDisplay() {
    const handleEditClick = (logId) => {
      console.log('Edit button clicked for log:', logId);
    };
  
    const handleCreateNewClick = () => {
      console.log('Create new button clicked');
    };
  
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b border-gray-400 py-2 px-2 bg-white" style={{ height: '7.5vh' }}>
            <p className="text-xl">Training logs</p>
            <div className="flex items-center pr-8 cursor-pointer" style={{ width: '7vw', height: '7.5vh' }} onClick={handleCreateNewClick}>
                <img src={addIcon} className="mr-2 w-6 h-6 hover:opacity-85" alt="Create new"/>
                <p className="text-base">Create new</p>
            </div>
        </div>
  
        {/* Logs */}
        {mockData.map((log, index) => (
          <TrainingLogs
            key={index}
            title={log.title}
            date={log.date}
            description={log.description}
            hours={log.hours}
            user={log.user}
            animal={log.animal}
            name={log.name}
            click={() => handleEditClick(index)}
          />
        ))}
      </div>
    );
}