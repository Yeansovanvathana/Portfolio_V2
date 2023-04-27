import React from "react";

export const Header = () => {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl-items-center">
            <div className="flex flex-row items-center text-gray-300 cursor-poniter">
                <p className="uppercase text-xl text-gray-600">Vathana</p>
            </div>
            <div className="hidden md:inline-flex space-x-16">
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
