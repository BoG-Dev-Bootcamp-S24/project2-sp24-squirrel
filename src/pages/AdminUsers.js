import React from "react";
import SearchBar from "../components/searchBar";
import SideBar from "../components/SideBar";
import UserCard from "../components/UserCard";

const AdminaUsers = () => {
  const dummyUserData = [
    { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
    { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
    { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
    { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
    { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
    { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
    { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
    { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
    { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
    { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
    { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
    { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
    { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
    { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
  ];

  return (
    <div className="flex min-h-screen bg-white">
      <SideBar />
      <div className="flex-grow">
        <SearchBar />
        <div className="p-4 shadow bg-white">
          <h1 className="text-xl text-gray-400">All users</h1>
        </div>
        <div className="px-8 py-8">
          <div className="grid grid-cols-3 gap-4">
            {dummyUserData.map((user, index) => (
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
    </div>
  );
};

export default AdminaUsers;

// import React from "react";
// import SearchBar from "../components/searchBar";
// import SideBar from "../components/SideBar";
// import UserCard from "../components/UserCard";

// const AdminaUsers = () => {
//   const dummyUserData = [
//     { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
//     { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
//     { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
//     { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
//     { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
//     { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
//     { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
//     { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
//     { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
//     { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
//     { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
//     { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
//     { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
//     { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
//     { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
//     { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
//     { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
//     { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
//     { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
//     { name: "Long Lam", identity: "Admin", location: "Atlanta, Georgia", initial: "L" },
//   ];

//   return (
//     <div className="flex min-h-screen bg-white">
//       <SideBar />
//       <div className="flex-grow">
//         <SearchBar />
//         <div className="px-8 py-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {dummyUserData.map((user, index) => (
//               <UserCard
//                 key={index}
//                 name={user.name}
//                 identity={user.identity}
//                 location={user.location}
//                 initial={user.initial}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminaUsers;

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
//         <SearchBar />
//         <SideBar />
//         <div className="grid grid-cols-3 gap-8 px-8 py-8">
//           {userData.map((user, index) => (
//             <UserCard
//               key={index}
//               name={user.name}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminaUsers;