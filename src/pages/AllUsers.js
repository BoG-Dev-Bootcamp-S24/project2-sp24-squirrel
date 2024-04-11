import React from 'react';
import User from '../components/User.js'; // Ensure this path is correct
import Sidebar from '../components/sidebar'; // Ensure this path is correct
import SearchBar from '../components/searchbar'; // Ensure this path is correct

const mockUsers = [
  { name: 'Long Lam', role: 'Admin', location: 'Atlanta, Georgia' },
  { name: 'Long Lam', role: 'Admin', location: 'Atlanta, Georgia' },
  { name: 'Long Lam', role: 'Admin', location: 'Atlanta, Georgia' },
  { name: 'Long Lam', role: 'Admin', location: 'Atlanta, Georgia' },
  { name: 'Long Lam', role: 'Admin', location: 'Atlanta, Georgia' },
  { name: 'Long Lam', role: 'Admin', location: 'Atlanta, Georgia' },
  { name: 'Long Lam', role: 'Admin', location: 'Atlanta, Georgia' },
  { name: 'Long Lam', role: 'Admin', location: 'Atlanta, Georgia' }

];

const AllUsers = () => {
    return (
      <div className="flex flex-col h-screen"> 
        <SearchBar />
        <div className="flex flex-grow overflow-hidden">
          <Sidebar />
          <div className="flex-grow p-6 overflow-auto"> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockUsers.map((user, index) => (
                <User key={index} name={user.name} role={user.role} location={user.location} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AllUsers;