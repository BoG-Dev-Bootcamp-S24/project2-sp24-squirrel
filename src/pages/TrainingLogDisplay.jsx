import React from "react";
import TrainingLogs from "../components/TrainingLogs";
import addIcon from  "/public/images/createNewLogo.png";
import { Inter } from "next/font/google";
import Searchbar from "../components/searchbar";
import Sidebar from "../components/sidebar";

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
      <div className="relative w-full h-full mt-0 p-0" style={{ backgroundColor: 'white' }}>
        <div className="fixed top-0 left-0 right-0">
          <Searchbar />
        </div>
  
        <div className="flex w-full h-full pt-16 m-0">
          <div className="z-10">
            <Sidebar />
          </div>
  
          <div className="flex-grow">
            <div className="space-y-4">

              <div className="m-2 ml-5 mr-5 flex justify-between items-center border-b border-gray-400 py-2 px-1 bg-white" style={{ height: '7.5vh' }}>
                <p className="text-xl text-black">Training logs</p>
              </div>
  
              {mockData.map((log, index) => (
                <div className="m-2 ml-5 mr-5"> 
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }