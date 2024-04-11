import React from 'react';

const User = ({ name, role, location }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 flex items-center space-x-4">
      <div className="bg-red-500 rounded-full h-12 w-12 flex justify-center items-center text-white text-xl uppercase">
        <span>{name.charAt(0)}</span>
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-black">{name}</h3> {/* Make name text black */}
        <p className="text-gray-600">{role} • {location}</p>
      </div>
    </div>
  );
};

export default User;
