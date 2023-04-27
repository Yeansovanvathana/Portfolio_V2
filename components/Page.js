import React from "react";
import Image from "next/image";
import Vathana from "@/public/Vathana.jpg";

export const Page = () => {
    return (
        <div className="lg:inline-flex max-w-7xl mx-auto z-20 xl-items-center">
            <div className=" mx-auto p-12 text-center">
                <h2 className=" text-3xl py-2 font-medium">
                    I'm <span className=" text-green-600">Yean</span>{" "}
                    Sovanvathana
                </h2>
                <h3 className="text-2xl py-2">Developer and designer.</h3>
                <p className="text-md py-5 leading-8 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc felis neque, venenatis a volutpat et, ultrices.
                </p>
            </div>
            <div className="bg-gray-300 w-48 h-72 mx-auto rounded-3xl relative">
                <div className="w-48 h-72 mx-auto rounded-3xl absolute overflow-hidden right-5 -top-5">
                    <Image
                        src={Vathana}
                        alt="Vathana"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
    );
};
