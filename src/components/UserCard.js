import React from 'react';

const UserCard = ({ name, identity, location, initial }) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden shadow-lg max-w-md mx-auto bg-white">
      <div className="p-4 pr-16 bg-white border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-full text-white text-2xl font-bold">
            {initial}
          </div>
          <div className="ml-4">
            <p className="text-lg font-bold text-gray-600">{name}</p>
            <p className="text-sm text-gray-600">{identity} • {location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;


// import React from 'react';

// export default function UserCard() {
//   const dummyData = {
//     name: "Long Lam",
//     identity: "Admin",
//     location: "Atlanta, Georgia",
//     initial: "L",
//   };
  
//   return (
//     <div className="flex flex-col rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto bg-white">
//         <div className="relative p-4">
//             <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-full text-white text-2xl font-bold -mt-6 ml-4">
//                 {dummyData.initial}
//             </div>
//             <div className="mt-8">
//                 <p className="text-lg font-bold text-gray-800">{dummyData.name}</p>
//                 <p className="text-gray-600"> {dummyData.identity} • {dummyData.location}</p>
//             </div>
//         </div>
//     </div>
//   );
// }