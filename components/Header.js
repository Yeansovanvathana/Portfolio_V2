import React from "react";

export const Header = () => {
  return (
    <header className="top-0 p-5 flex items-start justify-between max-w-screen-xl mx-auto z-20 xl-items-center">
      <p className="uppercase text-xl text-gray-600">Vathana</p>
      <div className="hidden uppercase md:inline-flex space-x-16 md:space-x-8 p-1">
        <a href="">Home</a>
        <a href="">Home</a>
        <a href="">Home</a>
        <a href="">Home</a>
      </div>
      <button className="uppercase bg-gradient-to-r from-secondary-100 py-2 px-4 rounded text-sm hover:bg-secondary-100">
        Contact
      </button>
    </header>
  );
};
