"use client"
import React, { useEffect, useState } from 'react';
import { UserData } from '@/ApiService/Apiservice';

interface User {
  id: number;
  name: string;
}

const HomePage = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await UserData();
        setData(userData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <div>
            <h2>User List</h2>
            {data.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
