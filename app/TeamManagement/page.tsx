"use client"
import React, { useEffect, useState } from 'react';

const TeamManagement = () => {

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
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <p className="">Team Management</p>
          <div className="relative">
            <button
              className="text-black bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              + Create team
            </button>
          </div>
        </div>
      </div>
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
            By Members
          </button>
        </div>
      </div>
      <div className="p-4">
        {value === '1' &&
          <div>
          {selectedTeam === true? (
            <div>
              <button onClick={handleTeamClickCloseTeam}>back</button>
            <p>You have selected</p>
            </div>
          ) : (
            <>
              <p>Select a Team</p>
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div>
                  <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100">
                    <a href="#">
                      <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">Team 1</h6>
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
                      <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">Team 2</h6>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Buliding an Analytics Dashboard FIrebase</p>
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
          {selectedCoures === true? (
            <div>
              <button onClick={handleTeamClickCloseCoures}>back</button>
            <p>You have selected</p>
            </div>
          ) : (
            <>
              <p>Select a Coures</p>
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div>
                  <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100">
                    <a href="#">
                      <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">Analytics Dashboard</h6>
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
                      <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">Analytics Dashboard</h6>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Buliding an Analytics Dashboard using Next-JS</p>
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

export default TeamManagement;
