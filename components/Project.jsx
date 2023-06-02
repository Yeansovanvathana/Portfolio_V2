import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LineGradient from "./LineGradient";
import { Exp } from "@/utils/Experience";

export const Project = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (itemId) => {
    setActiveDropdown((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  return (
    <section
      id="experience"
      className="lg:h-full flex justify-center items-center "
    >
      <div className="w-[1280px] mx-auto mt-20">
        <div className="p-5 px-10 md:text-start text-center">
          <motion.h2
            className="text-3xl font-medium py-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Design Poster
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-gray-500"
          >
            many of our work showcase here
          </motion.h3>
        </div>
        <div className="justify-center flex flex-col space-y-3 items-center my-10 p-8">
          {Exp.map((data, idx) => (
            <div
              key={idx}
              className="md:w-2/3  bg-primary-200 rounded-lg shadow h-auto relative"
            >
              <div className="p-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <img
                    src={data.img}
                    className="w-10 h-10 rounded-full"
                    alt=""
                  />
                  <div>
                    <h2 className="font-bold text-xl">{data.project}</h2>
                    <p>{data.project_description}</p>
                  </div>
                </div>
                <p>{data.project_date}</p>
              </div>
              <LineGradient />
              <div className="flex justify-end">
                <button onClick={() => toggleDropdown(data.id)}>
                  <div className="flex justify-end py-4 px-4 cursor-pointer">
                    {activeDropdown === data.id ? "Close" : "View project"}
                  </div>
                </button>
              </div>
              <AnimatePresence>
                {activeDropdown === data.id && (
                  <motion.div
                    className="w-full bg-primary-200 overflow-hidden rounded-lg shadow"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0, transition: { duration: 0.5 } }}
                    transition={{ duration: 0.5, when: "beforeChildren" }}
                  >
                    <div className="p-6 flex flex-col justify-center items-center text-xl lg:justify-between">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-extralight">Position :</h3>
                        <span className="font-extralight">{data.position}</span>
                      </div>
                      <div>
                        <h3 className="text-center font-lekton">Demo</h3>
                        <img
                          src={data.demo}
                          alt=""
                          className="mx-auto lg:w-2/4"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
