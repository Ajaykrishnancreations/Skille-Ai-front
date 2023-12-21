'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const UserLogin: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("name", name);
    router.push('/HomePage');
  };
  return (
    <div className='flex'>
      <div className='w-2/4' style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/009/167/287/original/circuit-data-neural-network-ai-technology-cloud-computing-bits-internet-5g-blue-background-information-ai-talking-circuit-women-free-video.jpg")', backgroundSize: 'cover', height:"100vh"}}>
      </div>
      <div className='w-2/4'>
        <div className='p-5' style={{ marginTop: "40%" }}>
          <form onSubmit={handleSubmit}>
            <div className='p-2' style={{marginLeft: "20%",marginRight: "20%"}}>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <img
                    src="https://thumbs.dreamstime.com/b/email-icon-black-b…ound-flat-style-vector-illustration-168420524.jpg"
                    alt="Mail Icon"
                    style={{ height: "25px", width: "25px", borderRadius: "50%" }}
                  />
                </div>
                <input onChange={(e) => setName(e.target.value)} style={{width: "100%"}} type="text" id="default-search" className="block p-4 ps-10 text-sm text-gray-900 border border-gray-700 rounded-lg"  placeholder="Enter your Mail-Id" required />
              </div>
            </div>
            <div className='p-2' style={{marginLeft: "20%",marginRight: "20%"}}>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <div style={{    padding:2,backgroundColor:"black", borderRadius: "50%"}}>
                  <img
                    src="https://png.pngitem.com/pimgs/s/20-202249_lock-protect-safety-secure-safe-security-password-svg.png"
                    alt="Mail Icon"
                    style={{ height: "20px", width: "20px", borderRadius: "50%" }}
                  />
                  </div>
                </div>
                <input type="password" style={{width: "100%"}} id="default-search" className="block w-75 p-4 ps-10 text-sm text-gray-900 border border-gray-700 rounded-lg" placeholder="Enter your Password" required />
              </div>
            </div>
            <center>
            <input type='submit' style={{width: "40%"}} className='p-2 mt-1 focus:outline-none text-white bg-gray-700 hover:bg-gray-800 rounded-lg' value='Login' />
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UserLogin;