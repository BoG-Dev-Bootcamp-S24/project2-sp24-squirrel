import React, { useState, useEffect } from 'react';
import { SearchBar } from '../components/SearchBar';
import { NavBar } from '../components/NavBar';
import UserCard from '../components/UserCard';
import '../styles/UsersProgressPage.css';

const UsersProgressPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Replace '/api/users' with your actual API endpoint to fetch users data
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SearchBar />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users.map((user, index) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersProgressPage;