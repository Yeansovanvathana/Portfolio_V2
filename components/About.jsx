import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
  return (
    <section
      id="about"
      className="lg:h-full flex lg:items-center lg:justify-center "
    >
      <div className="w-[1280px] mx-auto mt-20  p-5 px-10">
        <div className="flex flex-col items-center justify-center space-y-3 mb-10">
          <h1 className="text-3xl md:text-4xl font-medium">About</h1>
          <div className="h-[4px] rounded-full bg-secondary-400 w-20"></div>
        </div>
        <div className="relative p-10 bg-primary-200 w-full ">
          <div className="flex flex-col md:flex-row md:space-x-10 ">
            <Image
              src="/VathanaCode.jpg"
              alt=""
              width={300}
              height={300}
              className="w-[50%] md:w-[30%]"
            />
            <div className="my-10 space-y-5 md:p-3 lg:p-10 lg:border-primary-100 md:border-2 rounded-l-3xl">
              <h3 className="text-2xl lg:text-3xl">Hi! I'm Vathana</h3>
              <p className="lg:text-lg">
                I am a self-motivated and inpendent with a strong ability to
                adapt to various situation. I am committed to continual learning
                and am alway looking to expand my skillset I have gained
                extensive experience in development, I am confident in my
                ability to work collaboratively or independently to achieve
                project goals.{" "}
              </p>
            </div>
          </div>

          <div className="md:hidden absolute bg-secondary-400 w-[20%] rounded-l-xl h-8 top-10 right-0"></div>
          <div>
            <div className="border-secondary-400 w-56 border-2 space-x-4 flex items-center mt-10">
              <div className="bg-secondary-400 w-10 h-10"></div>
              <h3 className="uppercase font-semibold">Education</h3>
            </div>
            <div className="space-y-3 mt-6">
              <h3 className="uppercase font-bold text-xl ">
                Bachlor of software engineering
              </h3>
              <div>
                <p className="font-semibold md:text-lg">
                  Kirirom Institute of Technology
                </p>
                <p className="font-normal md:text-lg">
                  November 13, 2019 - October 1, 2023
                </p>
              </div>
              <h3 className="uppercase font-bold text-xl ">Diploma</h3>
              <div>
                <p className="font-semibold md:text-lg">
                  Kompong Speu High School
                </p>
                <p className="font-normal md:text-lg">
                  October 1, 2018 - August 18, 2019
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="border-secondary-400 w-56 border-2 space-x-4 flex items-center mt-10">
              <div className="bg-secondary-400 w-10 h-10"></div>
              <h3 className="uppercase font-semibold">Achievement</h3>
            </div>
            <div className="space-y-3 mt-6">
              <h3 className="uppercase font-bold text-xl ">
                Top 20 cscup 2022
              </h3>
              <p className="font-normal md:text-lg">
                {" "}
                I finished in the top 20 of a challenging programming-solving
                competition with four rounds, where I honed my problem-solving,
                critical thinking and programming skill, This experience also
                taught me how to work well under pressure and the importance of
                self-leaning{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
