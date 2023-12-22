"use client"
import React, { useEffect, useState } from 'react';

const TeamManagement = () => {

  const [value, setValue] = useState('1');

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
        <div>
          <div className="flex">
            <button
              onClick={() => handleChange('1')}
              className={`p-1 ${value === '1' ? 'border-b-4 border-indigo-500' : ''
                }`}
            >
              By Team
            </button>
            <button
              onClick={() => handleChange('2')}
              className={`p-1 ${value === '2' ? 'border-b-4 border-indigo-500' : ''
                }`}
            >
              By Course
            </button>
          </div>
        </div>
        <div className="p-4">
          {value === '1' &&
            <div>
              <p>Select a Team</p>
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div>
                  <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Team 1</h6>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Building an authentication module using FIrebase</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      view
                    </a>
                  </div>
                </div>
                <div>
                  <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Team 2</h6>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Building an authentication module using FIrebase</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      view
                    </a>
                  </div>
                </div>
              </div>
            </div>
          }
          {value === '2' &&
            <div>
              <p>Select a Course</p>
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div>
                  <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Analytics Dashboard</h6>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Buliding an Analytics Dashboard using Next-JS</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      view
                    </a>
                  </div>
                </div>
                <div>
                  <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Authentication module</h6>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Buliding an Authentication module using Firebase</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      view
                    </a>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
    </div>
  );
};

export default TeamManagement;
