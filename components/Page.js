import React from "react";
import Image from "next/image";
import Vathana from "@/public/Vathana.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export const Page = () => {
  const [text] = useTypewriter({
    words: ["I'm Yean Sovanvathana", "I'm Yean Sovanvathana"],
    loop: true,
    delaySpeed: 6000,
    deleteSpeed: 200,
    typeSpeed: 200,
  });
  return (
    <div>
      <div className="lg:flex md:flex justify-between max-w-screen-xl mx-auto z-20 xl-items-center lg:mt-24 md:mt-24">
        <div className="p-10 text-center lg:text-start md:text-start">
          <h2 className="text-3xl py-2 font-medium lg:text-4xl">
            {/* I'm <span className=" text-green-600">Yean</span> Sovanvathana */}
            {text}
            <Cursor cursorColor="red" />
          </h2>
          <h3 className="text-xl py-2 md:text-2xl">Developer and designer.</h3>
          <p className="text-md py-5 leading-8 text-gray-500 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis
            neque, venenatis a volutpat et, ultrices.
          </p>
        </div>
        <div className="flex justify-center items-center p-10 pb-12 md:pt-5">
          <div className="bg-primary-200 w-40 h-64 rounded-3xl relative lg:h-80 lg:w-48">
            <div className="w-40 h-64 rounded-3xl absolute overflow-hidden right-5 -top-5 lg:w-48 lg:h-80">
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
      <div className="hidden md:flex lg:flex justify-center items-center py-10 pb-16">
        <div className="border bg-gray-100 w-4/6 h-24 rounded-xl grid grid-cols-3 divide-x divide-gray-300">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
