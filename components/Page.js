import React from "react";
import Image from "next/image";
import Vathana from "@/public/Vathana.jpg";

export const Page = () => {
  return (
    <div>
      <div className="lg:flex md:flex justify-between max-w-7xl lg:mt-24 md:mt-24 px-10">
        <div className="mx-auto p-10 text-center lg:text-start md:text-start">
          <h2 className="text-3xl py-2 font-medium">
            I'm <span className=" text-green-600">Yean</span> Sovanvathana
          </h2>
          <h3 className="text-xl py-2">Developer and designer.</h3>
          <p className="text-md py-5 leading-8 text-gray-500 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis
            neque, venenatis a volutpat et, ultrices.
          </p>
        </div>
        <div className="flex justify-center items-center px-10 lg:px-0">
          <div className="bg-gray-300 w-44 h-64 rounded-3xl relative lg:w-56 lg:h-80">
            <div className="w-44 h-64 rounded-3xl absolute overflow-hidden right-5 -top-5 lg:w-56 lg:h-80">
              <Image
                src={Vathana}
                alt="Vathana"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center py-10 mt-16">
        <div className="border bg-gray-100 w-4/6 h-24 rounded-xl grid grid-cols-3 divide-x divide-gray-300">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
