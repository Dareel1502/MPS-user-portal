import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div className="pb-16"></div>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
        <div className="mx-auto md:w-2/3 lg:w-1/2 xl:w-1/3">
          <div className="flex justify-around items-center p-2 bg-white">
            <NavLink 
              to="/home" 
              className={({ isActive }) => 
                `flex flex-col items-center p-2 rounded-lg ${isActive ? 'text-blue-600' : 'text-gray-500 hover:text-blue-500'}`
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xs mt-1">Home</span>
            </NavLink>

            <NavLink 
              to="/report" 
              className={({ isActive }) => 
                `flex flex-col items-center p-2 rounded-lg ${isActive ? 'text-blue-600' : 'text-gray-500 hover:text-blue-500'}`
              }
            >
              <div className="p-3 rounded-full bg-blue-500 text-white shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xs mt-1">Report</span>
            </NavLink>

            <NavLink 
              to="/profile" 
              className={({ isActive }) => 
                `flex flex-col items-center p-2 rounded-lg ${isActive ? 'text-blue-600' : 'text-gray-500 hover:text-blue-500'}`
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-xs mt-1">Profile</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;