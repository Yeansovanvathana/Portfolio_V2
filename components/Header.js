import React from "react";

export const Header = () => {
  return (
    <header className="top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl-items-center">
      <p className="uppercase text-xl text-gray-600">Vathana</p>
      <div className="hidden uppercase md:inline-flex space-x-16 md:space-x-10 p-1">
        <a href="">Home</a>
        <a href="">Home</a>
        <a href="">Home</a>
        <a href="">Home</a>
      </div>
      <button className="uppercase bg-gradient-to-r from-green-500 py-2 px-4 rounded text-sm hover:bg-green-500">
        Contact
      </button>
    </header>
  );
};
