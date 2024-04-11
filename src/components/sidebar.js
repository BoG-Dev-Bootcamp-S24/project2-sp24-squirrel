// src/components/Sidebar.js

import React, { useState } from 'react';
import { useRouter } from 'next/router';

function Sidebar() {


    const router = useRouter();
    const [isHoveringTrainingLogs, setIsHoveringTrainingLogs] = useState(false);
    const [isHoveringAnimals, setIsHoveringAnimals] = useState(false);
    const [isHoveringAllTraining, setIsHoveringAllTraining] = useState(false);
    const [isHoveringAllAnimals, setIsHoveringAllAnimals] = useState(false);
    const [isHoveringAllUsers, setIsHoveringAllUsers] = useState(false);

    const handleNavigation = (path) => {
        router.push(path);
    };
    return (
        <div className="w-64 h-screen bg-white shadow-md flex flex-col">
            {/* Top Section with Links */}
            <div>
                <a
                    onClick={() => handleNavigation('/TrainingLogDisplay')}
                    className={`flex items-center justify-start p-3 hover:bg-red-600 text-gray-700 hover:text-white rounded-md ml-2`}
                    onMouseEnter={() => setIsHoveringTrainingLogs(true)}
                    onMouseLeave={() => setIsHoveringTrainingLogs(false)}
                >
                    <img
                        src={isHoveringTrainingLogs ? "/images/activeTrainingLogo.png" : "/images/inactiveTrainingLogs.png"}
                        alt="Training Logs Icon"
                        className="mr-2"
                        width="24"
                        height="24"
                    />
                    Training logs
                </a>

                <a 
                    onClick={() => handleNavigation('/AnimalsDisplay')}
                    onMouseEnter={() => setIsHoveringAnimals(true)}
                    onMouseLeave={() => setIsHoveringAnimals(false)}
                    className={`flex items-center justify-start p-3 ${isHoveringAnimals ? 'bg-red-600 text-white' : 'text-gray-700 hover:text-white'} rounded-md ml-2`}
                >
                    <img 
                        src={isHoveringAnimals ? "/images/activeAnimalsLogo.png" : "/images/inactiveAnimalLogo.png"} 
                        alt="Animals Icon" 
                        className="mr-2" 
                        width="24" 
                        height="24" 
                    />
                    Animals
                </a>


    


      
            <hr className="border-t mx-3 border-gray-300" />
      
            <div className="px-3 mt-3">
                <div className="text-lg font-semibold mb-2 text-gray-600">Admin access</div>
                <div className="space-y-1">
                    {/* All Training Link */}
                    <a 
                        onClick={() => handleNavigation('TrainingLogDisplay')} 
                        onMouseEnter={() => setIsHoveringAllTraining(true)}
                        onMouseLeave={() => setIsHoveringAllTraining(false)}
                        className={`flex items-center p-2 ${isHoveringAllTraining ? 'bg-red-600 text-white' : 'text-gray-600 hover:text-white'} rounded-md`}
                    >
                        <img 
                            src={isHoveringAllTraining ? "/images/activeAllTrainingLogo.png" : "/images/inactiveAllTrainingLogo.png"} 
                            alt="All Training Icon" 
                            className="mr-2" 
                            width="24" 
                            height="24" 
                        />
                            All training
                        </a>
    
                    <a 
                        onClick={() => handleNavigation('/AnimalsDisplay')} 
                        onMouseEnter={() => setIsHoveringAllAnimals(true)}
                        onMouseLeave={() => setIsHoveringAllAnimals(false)}
                        className={`flex items-center p-2 ${isHoveringAllAnimals ? 'bg-red-600 text-white' : 'text-gray-600 hover:text-white'} rounded-md`}
                    >
                        <img 
                            src={isHoveringAllAnimals ? "/images/activeAllAnimalsLogo.png" : "/images/inactiveAllAnimalsLogo.png"} 
                            alt="All Animals Icon" 
                            className="mr-2" 
                            width="24" 
                            height="24" 
                        />
                            All animals
                    </a>

                    <a 
                        onClick={() => handleNavigation('AllUsers')} 
                        onMouseEnter={() => setIsHoveringAllUsers(true)}
                        onMouseLeave={() => setIsHoveringAllUsers(false)}
                        className={`flex items-center p-2 ${isHoveringAllUsers ? 'bg-red-600 text-white' : 'text-gray-600 hover:text-white'} rounded-md`}
                    >
                        <img 
                            src={isHoveringAllUsers ? "/images/activeAllUsersLogo.png" : "/images/inactiveAllUsersLogo.png"} 
                            alt="All Users Icon" 
                            className="mr-2" 
                            width="24" 
                            height="24" 
                        />
                            All users
                    </a>
              </div>
            </div>
          </div>
          

          <div className="px-3 pt-2 mt-[230%]">
            <hr className="border-t mx-3 my-2 border-gray-300" />
            <div className="flex justify-between items-center pb-2">
                <div className="flex items-center">
                <div className="bg-red-600 rounded-full h-10 w-10 flex items-center justify-center text-white mr-3">
                    <span className="font-bold">L</span>
                </div>
                <div className="ml-3">
                    <p className="text-lg font-semibold text-gray-600">Long Lam</p>
                    <p className="text-sm text-gray-600">Admin</p>
                </div>
                </div>
                <button
                onClick={() => handleNavigation('/Login')}
                className="flex items-center"
                style={{ cursor: 'pointer' }}
                >
                <img src="/images/logoutLogo.png" alt="Logout" width="24" height="24" />
                </button>
            </div>
            </div>

        </div>
      );
    }
    
    export default Sidebar;
    

  