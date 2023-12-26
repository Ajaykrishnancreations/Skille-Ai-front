"use client"
import React, { useState } from 'react';

const HomePage = () => {

  const [value, setValue] = useState('1');

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const [selectedCoures, setSelectedCoures] = useState(false);
  const handleTeamClickOpenCoures = () => {
    setSelectedCoures(true);
  };
  const handleTeamClickCloseCoures = () => {
    setSelectedCoures(false);
  };

  const [selectedTeam, setSelectedTeam] = useState(false);
  const handleTeamClickOpenTeam = () => {
    setSelectedTeam(true);
  };
  const handleTeamClickCloseTeam = () => {
    setSelectedTeam(false);
  };

  return (
    <div>
      <div>
        <div className="flex">
          <button
            onClick={() => handleChange('1')}
            className={`p-2 ${value === '1' ? 'border-b-4 border-gray-600' : ''
              }`}
          >
            By Team
          </button>
          <button
            onClick={() => handleChange('2')}
            className={`p-2 ${value === '2' ? 'border-b-4 border-gray-600' : ''
              }`}
          >
            By Course
          </button>
        </div>
      </div>
      <div className="p-4">
        {value === '1' &&
          <div>
            {selectedTeam === true ? (
              <div>
                <button onClick={handleTeamClickCloseTeam}>Back</button>
                <div className="p-2 mt-2 bg-white border border-gray-300 rounded-lg shadow ">
                  <div className="flex">
                    <div className="w-2/6">
                      <div className="flex">
                        <div className="w-1/5">
                          <div className="relative m-2 w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg className="absolute w-14 h-14 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="w-4/5">
                          <div>
                            Ajay
                          </div>
                          <div>
                            Front End Developer
                          </div>
                          <div>
                            <div className="flex items-center">
                              <svg className="w-4 h-4 text-gray-700 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                              <svg className="w-4 h-4 text-gray-700 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                              <svg className="w-4 h-4 text-gray-700 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                              <svg className="w-4 h-4 text-gray-700 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                              <svg className="w-4 h-4 ms-1 text-gray-100 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-4/6">
                      <div className="p-2 bg-white rounded-lg shadow dark:bg-gray-100">
                        <p className='text-gray-600'>
                          Active Course
                        </p>
                        <p className='mt-2'>
                          Buliding an Analytics Dashboard using Next-JS
                        </p>
                        <div>
                          <div className="flex mt-4 items-start max-w-screen-lg mx-auto">
                            <div className=" mt-6 flex items-center w-full">
                              <div className="mt-10 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 border-dashed border border-gray-400 group-last:hidden dark:border-gray-700"></div>
                            </div>
                            <div className="w-full mt-2">
                              <div className="flex items-center w-full">
                                <div className="w-10 h-10 shrink-0 mx-[-1px] bg-gray-600 p-1.5 flex items-center justify-center rounded-full">
                                </div>
                                <div className="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 border-dashed border border-gray-400 group-last:hidden dark:border-gray-700"></div>
                              </div>
                              <div className="mt-2">
                                <h6 className="text-base font-bold text-gray-500">Module</h6>
                              </div>
                            </div>
                            <div className="w-full">
                              <div className="flex items-center w-full">
                                <div className="w-14 h-14 shrink-0 mx-[-1px] bg-gray-200 p-1.5 flex items-center justify-center rounded-full">
                                  <div className="w-8 h-8 shrink-0 mx-[-1px] bg-gray-400 p-1.5 flex items-center justify-center rounded-full">
                                  </div>
                                </div>
                                <div className="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 border-dashed border border-gray-400 group-last:hidden dark:border-gray-700"></div>
                              </div>
                              <div className="mt-2 mr-4">
                                <h6 className="text-base font-bold text-gray-500">Module</h6>
                              </div>
                            </div>
                            <div className="w-full mt-2">
                              <div className="flex items-center w-full">
                                <div className="w-10 h-10 shrink-0 mx-[-1px] bg-gray-600 p-1.5 flex items-center justify-center rounded-full">
                                </div>
                                <div className="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 border-dashed border border-gray-400 group-last:hidden dark:border-gray-700"></div>
                              </div>
                              <div className="mt-2 mr-4">
                                <h6 className="text-base font-bold text-gray-500">Module</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <p>Select a Team</p>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div>
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100">
                      <a href="#">
                        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">Team-1</h6>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Buliding an Analytics Dashboard using Next-JS</p>
                      <a onClick={handleTeamClickOpenTeam} href="#" className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-600 dark:bg-gray-500 dark:hover:bg-gray-600">
                        view
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100">
                      <a href="#">
                        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">Team-2</h6>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Buliding an Analytics Dashboard using Firebase</p>
                      <a onClick={handleTeamClickOpenTeam} href="#" className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-600 dark:bg-gray-500 dark:hover:bg-gray-600">
                        view
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        }
        {value === '2' &&
          <div>
            {selectedCoures === true ? (
              <div>
                <button onClick={handleTeamClickCloseCoures}>back</button>
                <div className="p-2 mt-2 bg-white border border-gray-300 rounded-lg shadow ">
                  <div className="flex">
                    <div className="w-2/6">
                      <div className="flex">
                        <div className="w-1/5">
                          <div className="relative m-2 w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg className="absolute w-14 h-14 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="w-4/5">
                          <div>
                            Ajay
                          </div>
                          <div>
                            Front End Developer
                          </div>
                          <div>
                            <div className="flex items-center">
                              <svg className="w-4 h-4 text-gray-700 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                              <svg className="w-4 h-4 text-gray-700 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                              <svg className="w-4 h-4 text-gray-700 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                              <svg className="w-4 h-4 text-gray-700 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                              <svg className="w-4 h-4 ms-1 text-gray-100 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-4/6">
                      <div className="p-2 bg-white rounded-lg shadow dark:bg-gray-100">
                        <p className='text-gray-600'>
                          Active Course
                        </p>
                        <p className='mt-2'>
                          Buliding an Analytics Dashboard using Next-JS
                        </p>
                        <div>
                          <div className="flex mt-4 items-start max-w-screen-lg mx-auto">
                            <div className=" mt-6 flex items-center w-full">
                              <div className="mt-10 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 border-dashed border border-gray-400 group-last:hidden dark:border-gray-700"></div>
                            </div>
                            <div className="w-full mt-2">
                              <div className="flex items-center w-full">
                                <div className="w-10 h-10 shrink-0 mx-[-1px] bg-gray-600 p-1.5 flex items-center justify-center rounded-full">
                                </div>
                                <div className="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 border-dashed border border-gray-400 group-last:hidden dark:border-gray-700"></div>
                              </div>
                              <div className="mt-2">
                                <h6 className="text-base font-bold text-gray-500">Module</h6>
                              </div>
                            </div>
                            <div className="w-full">
                              <div className="flex items-center w-full">
                                <div className="w-14 h-14 shrink-0 mx-[-1px] bg-gray-200 p-1.5 flex items-center justify-center rounded-full">
                                  <div className="w-8 h-8 shrink-0 mx-[-1px] bg-gray-400 p-1.5 flex items-center justify-center rounded-full">
                                  </div>
                                </div>
                                <div className="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 border-dashed border border-gray-400 group-last:hidden dark:border-gray-700"></div>
                              </div>
                              <div className="mt-2 mr-4">
                                <h6 className="text-base font-bold text-gray-500">Module</h6>
                              </div>
                            </div>
                            <div className="w-full mt-2">
                              <div className="flex items-center w-full">
                                <div className="w-10 h-10 shrink-0 mx-[-1px] bg-gray-600 p-1.5 flex items-center justify-center rounded-full">
                                </div>
                                <div className="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 border-dashed border border-gray-400 group-last:hidden dark:border-gray-700"></div>
                              </div>
                              <div className="mt-2 mr-4">
                                <h6 className="text-base font-bold text-gray-500">Module</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <p>Select a Coures</p>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div>
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100">
                      <a href="#">
                        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">Next-JS</h6>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Buliding an Analytics Dashboard using Next-JS</p>
                      <a onClick={handleTeamClickOpenCoures} href="#" className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-600 dark:bg-gray-500 dark:hover:bg-gray-600">
                        view
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100">
                      <a href="#">
                        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">Firebase</h6>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Buliding an Analytics Dashboard using Firebase</p>
                      <a onClick={handleTeamClickOpenCoures} href="#" className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-600 dark:bg-gray-500 dark:hover:bg-gray-600">
                        view
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default HomePage;
