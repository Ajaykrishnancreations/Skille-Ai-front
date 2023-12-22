'use client'
import React, { useState } from 'react';

function MyCourse() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <p className="">My Course</p>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-black bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Dropdown button{' '}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="mt-6">
        <div className="p-6 mt-2 rounded-lg shadow dark:bg-gray-100">
          <p className="mb-3 font-normal dark:text-gray-800">Buliding an Analytics Dashboard using Next-JS</p>
          <div className="flex flex-row">
            <div className="basis-2/12">Modules: 5</div>
            <div className="basis-8/12">Generated at 11:23:41 Pm, Oct 5th, 2023</div>
            <div className="basis-2/12">view</div>
          </div>
        </div>
        <div className="p-6 mt-2 rounded-lg shadow dark:bg-gray-100">
          <p className="mb-3 font-normal dark:text-gray-800">Buliding an Analytics Dashboard using Next-JS</p>
          <div className="flex flex-row">
            <div className="basis-2/12">Modules: 5</div>
            <div className="basis-8/12">Generated at 11:23:41 Pm, Oct 5th, 2023</div>
            <div className="basis-2/12">view</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCourse;