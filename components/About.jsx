import React from "react";
import Image from "next/image";

export const About = () => {
  return (
    <section
      id="about"
      className="lg:h-full flex lg:items-center lg:justify-center "
    >
      <div className="max-w-screen-xl mx-auto lg:px-32 w-full mt-24 lg:p-5 px-8">
        <div className="flex flex-col items-center justify-center space-y-3 mb-10">
          <h1 className="text-3xl md:text-3xl font-semibold">About</h1>
          <div className="h-[4px] rounded-full bg-secondary-400 w-20"></div>
        </div>
        <div className="relative p-10 bg-primary-200 w-full ">
          <div className="grid grid-cols-1 md:grid-cols-3 auto-cols-max ">
            <Image
              src="/VathanaCode.jpg"
              alt=""
              width={300}
              height={300}
              className="w-[50%] md:w-[90%] md:h-[80%] md:my-16"
            />
            <div className="my-10 space-y-5 md:p-3 lg:p-10 md:border-primary-100 md:border-2 rounded-l-3xl md:col-span-2 max-w-prose">
              <h3 className="text-2xl lg:text-2xl font-semibold">
                Hi! I'm Vathana
              </h3>
              <p className="text-base">
                I'm a software developer passionate about building innovative
                and user-friendly products. I believe in continuous learning and
                value the insights gained from collaborating with others.
              </p>
              <p className="text-base">
                With 2.5 years of experience as a software developer, I have
                gained extensive experience in development, I am confident in my
                ability to work collaboratively or independently to achieve
                project goals.
              </p>
              <p className="text-base">
                Outside of work, I enjoy spending time with family and friends,
                traveling, and pursuing new knowledge.
              </p>
              <p className="text-base">
                Feel free to explore my portfolio for project examples. If you
                have any questions or collaboration opportunities, let's connect
                and create remarkable solutions together.
              </p>
              <div className="flex space-x-2 items-center md:justify-end">
                <Image
                  width={300}
                  height={300}
                  src="/Icons/icons8-gmail.svg"
                  className="Button"
                  alt=""
                />
                <p className="font-semibold">sovanvathanayean@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="md:hidden absolute bg-secondary-400 w-[20%] rounded-l-xl h-8 top-10 right-0"></div>
          <div>
            <div className="border-secondary-400 w-56 border-2 space-x-4 flex items-center mt-10">
              <div className="bg-secondary-400 w-10 h-10"></div>
              <h3 className="uppercase font-semibold">Education</h3>
            </div>
            <div className="space-y-3 mt-6">
              <div className="space-y-1">
                <h3 className="uppercase font-bold text-xl ">
                  Bachlor of software engineering
                </h3>
                <div>
                  <p className="font-semibold md:text-lg">
                    Kirirom Institute of Technology
                  </p>
                  <p className="font-normal text-base">
                    November 13, 2019 - October 1, 2023
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="uppercase font-bold text-xl ">Diploma</h3>
                <div>
                  <p className="font-semibold md:text-lg">
                    Kompong Speu High School
                  </p>
                  <p className="font-normal text-base">
                    October 1, 2018 - August 18, 2019
                  </p>
                </div>
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
              <p className="font-normal text-base">
                {" "}
                I finished in the top 20 of a challenging programming-solving
                competition with four rounds, where I honed my problem-solving,
                critical thinking and programming skill, This experience also
                taught me how to work well under pressure and the importance of
                self-learning{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
