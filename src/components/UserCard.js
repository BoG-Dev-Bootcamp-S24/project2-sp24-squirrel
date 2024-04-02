import React from 'react';

//replace user.initials/name/role/location with the actual data later
const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
      <div className="flex-shrink-0">
        <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
          <span className="text-lg font-medium leading-none text-gray-700">{user.initials}</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
        <p className="text-gray-600">{user.role} · {user.location}</p>
      </div>
    </div>
  );
};

export default UserCard;