'use client'
import React, { useState } from 'react';
import Logo from '../../Assets/Logo.png';
import Image from 'next/image';
const SideNav: any = ({ children }: any) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [isPopOpen, setisPopOpen] = useState(false);
  const handlePopToggle = () => {
    setisPopOpen(!isPopOpen);
    setStep(1);
  };
  const [step, setStep] = useState(1);
  const handleNextStep = () => {
    setStep(step + 1);
  };
  const renderModalContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h5>How would you like to create your course?</h5>
            <div className='p-2 mt-5'>
              <button
                className="text-black bg-gray-100 hover:bg-gray-200 rounded-lg px-5 py-2.5"
                type="button"
                style={{ width: "60%" }}
                onClick={handleNextStep}
              >
                input project brief manually
              </button>
            </div>
            <div className='p-2 mb-5'>
              <button
                className="text-black bg-gray-100 hover:bg-gray-200 rounded-lg px-5 py-2.5"
                type="button"
                style={{ width: "60%" }}
                onClick={handleNextStep}
              >
                upload project document
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <p>Enter your project brief here:</p>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea id="message" rows={6} className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-200 dark:border-gray-200" placeholder="Write your thoughts here..."></textarea>
            <button
              className="text-black bg-gray-100 hover:bg-gray-200 rounded-lg px-5 py-2.5 mt-5"
              type="button"
              style={{ width: "40%" }}
              onClick={handleNextStep}
            >
              Next
            </button>
          </div>
        );
      case 3:
        return (
          <div>
            <p>1/2 Fellow up Questions?</p>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea id="message" rows={6} className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-200 dark:border-gray-200" placeholder="Write your thoughts here..."></textarea>
            <button
              className="text-black bg-gray-100 hover:bg-gray-200 rounded-lg px-5 py-2.5 mt-5"
              type="button"
              style={{ width: "40%" }}
              onClick={handleNextStep}
            >
              Next
            </button>
          </div>
        );
      default:
        return (
          <div>
            <p>2/2 Fellow up Questions?</p>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea id="message" rows={6} className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-200 dark:border-gray-200" placeholder="Write your thoughts here..."></textarea>
            <button
              className="text-black bg-gray-100 hover:bg-gray-200 rounded-lg px-5 py-2.5 mt-5"
              type="button"
              style={{ width: "40%" }}
              onClick={handlePopToggle}
            >
              Submit
            </button>
          </div>
        );
    }
  };
  return (
    <div>
      <button
        onClick={handleSidebarToggle}
        aria-expanded={isSidebarOpen}
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Toggle sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? '' : '-translate-x-full'
          } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="flex flex-row">
            <div className="basis-1/4">
              <Image src={Logo} style={{ width: "55px", height: "35px" }} alt="GFG logo imported from public directory" />
            </div>
            <div className="basis-1/2 mt-1">
              <b className='text-gray-500'>Skille</b>
            </div>
            <div className="basis-1/4">
              <button
                onClick={handleSidebarToggle}
                data-drawer-target="sidebar-multi-level-sidebar"
                data-drawer-toggle="sidebar-multi-level-sidebar"
                aria-controls="sidebar-multi-level-sidebar"
                type="button"
                className="inline-flex items-center p-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
              >
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                <span className="sr-only">Close menu</span>
              </button>
            </div>
          </div>
          <div className='mt-5 p-2'>
            <button
              className="text-black bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              style={{ width: "80%" }}
              onClick={handlePopToggle}
              type="button"
            >
              + Create New Team
            </button>
          </div>
          <ul className="space-y-2 font-medium mt-5">
            <li>
              <a
                href="/HomePage"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Progress Tracking</span>
              </a>
            </li>
            <li>
              <a
                href="/MyCourse"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">My Course</span>
              </a>
            </li>
            <li>
              <a
                href="TeamManagement"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Team Management</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        <div className="p-4">{children}
          {isPopOpen && (
            <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white w-full max-w-xl p-4 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                  </h3>
                  <button
                    onClick={handlePopToggle}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
                <center>
                  {renderModalContent()}
                </center>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default SideNav;