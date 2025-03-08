"user client";
import React from 'react';

const Menu = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Your Company</div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-gray-300 hover:text-white">About</a>
          <a href="#" className="text-gray-300 hover:text-white">Products</a>
          <a href="#" className="text-gray-300 hover:text-white">Contact</a>
        </div>
        <div className="text-white">
          <button className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18l-1 14H4L3 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 17a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-8 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
            <span className="absolute -top-1 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
