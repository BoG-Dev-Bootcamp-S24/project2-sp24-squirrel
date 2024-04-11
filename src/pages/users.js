import React from 'react';
import TitleBar from "../components/searchbar"; // Make sure the path is correct
import SideBar from "../components/sidebar"; // Make sure the path is correct
import UserCard from "../components/UserCard";

const AdminaUsers = () => {
  // Static dummy data for user placeholders
  const dummyUserData = [
    { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
    // Add more user objects with the same structure as needed
  ];

  // Instead of useState and useEffect, we use the dummy data directly for now
  const userData = dummyUserData;

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full relative">
        <TitleBar />
        <SideBar />
        <div className="grid grid-cols-3 gap-8 px-8 py-8">
          {userData.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              identity={user.identity}
              location={user.location}
              initial={user.initial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminaUsers;

// import React, { useState, useEffect } from "react";
// import TitleBar from "../components/searchbar";
// import SideBar from "../components/sidebar";
// import UserCard from "../components/UserCard";

// const fetchData = async () => {
//   // replace with your actual API endpoint
//   const response = await fetch('/api/users');
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };

// const AdminaUsers = () => {
//   const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     fetchData()
//       .then((data) => setUserData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div className="bg-white flex flex-row justify-center w-full">
//       <div className="bg-white w-full relative">
//         <TitleBar />
//         <SideBar />
//         <div className="grid grid-cols-3 gap-8 px-8 py-8">
//             {userData.map((user, index) => (
//             <UserCard
//                 key={index}
//                 name={user.name}
//                 identity={user.identity}
//                 location={user.location}
//                 initial={user.initial}
//             />
//             ))}
//         </div>
//         {/* <div className="grid grid-cols-3 gap-8 px-8 py-8">
//           {userData.map((user, index) => (
//             <UserCard
//               key={index}
//               name={user.name}
//               // Add other props that UserCard expects
//             />
//           ))}
//           </div> */}
//       </div>
//     </div>
//   );
// };

// export default AdminaUsers; // Change to default export
