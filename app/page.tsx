'use client'
import Link from 'next/link';
import React from 'react';

const Home: React.FC = () => {

  return (
    <div className='flex'>
      <div className='w-2/4' style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/009/167/287/original/circuit-data-neural-network-ai-technology-cloud-computing-bits-internet-5g-blue-background-information-ai-talking-circuit-women-free-video.jpg")', backgroundSize: 'cover', height:"100vh"}}>
      </div>
      <div className='w-2/4'>
        <div className='p-5' style={{ marginTop: "40%" }}>
          <center>
          <Link href="/AdminLogin">
          <button style={{width: "50%"}} className='p-2 mt-1 focus:outline-none text-white bg-gray-700 hover:bg-gray-800 rounded-lg'>Admin</button>
          </Link>
          <br/>
          <Link href="/UserLogin">
          <button style={{width: "50%"}} className='p-2 mt-1 focus:outline-none text-white bg-gray-700 hover:bg-gray-800 rounded-lg'>User</button>
          </Link>
          </center>
        </div>
      </div>
    </div>
  );
};
export default Home;