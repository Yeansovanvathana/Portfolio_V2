import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LineGradient from "./LineGradient";
import { Exp } from "@/utils/Experience";
import Image from "next/image";

export const Project = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (itemId) => {
    setActiveDropdown((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  return (
    <section
      id="portfolio"
      className="lg:h-full flex justify-center items-center "
    >
      <div className="max-w-screen-xl mx-auto lg:px-20 w-full mt-20">
        <div className="p-5 px-10 md:text-start text-center">
          <motion.h2
            className="text-2xl  font-semibold py-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Projects Experience
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-sm md:text-base text-gray-500 dark:text-gray-400"
          >
            many of my work showcase here
          </motion.h3>
        </div>
        <div className="justify-center flex flex-col space-y-3 items-center my-10 p-8">
          {Exp.map((data, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="md:w-[80%] text-sm md:text-base bg-primary-200 dark:bg-gray-700 rounded-lg shadow h-auto relative"
            >
              <div className="px-6 py-3 space-y-3">
                <div className="flex items-center space-x-5">
                  <Image
                    width={300}
                    height={300}
                    src={data.img}
                    className="w-10 h-10 rounded-lg shadow-sm"
                    alt=""
                  />
                  <div className="w-[240px] md:w-full">
                    <h2 className="font-semibold text-lg">{data.project}</h2>
                    <div className="max-w-xs md:max-w-3xl overflow-hidden">
                      <p className="text-left">{data.project_description}</p>
                    </div>
                  </div>
                </div>
                <p>{data.project_date}</p>
              </div>
              <LineGradient />
              <div className="flex justify-end">
                <button onClick={() => toggleDropdown(data.id)}>
                  <div className="flex justify-end py-2 px-4 cursor-pointer font-semibold">
                    {activeDropdown === data.id ? "Close" : "View project"}
                  </div>
                </button>
              </div>
              <AnimatePresence>
                {activeDropdown === data.id && (
                  <motion.div
                    className=" bg-primary-200 dark:bg-gray-700 overflow-hidden rounded-lg shadow"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{
                      height: 0,
                      transition: { duration: 0.5 },
                    }}
                    transition={{
                      duration: 0.5,
                      when: "beforeChildren",
                    }}
                  >
                    <div className="p-6 font-light text-sm md:text-base lg:text-lg flex flex-col  items-center space-y-2">
                      <h3 className="font-semibold md:text-xl p-2">Project</h3>

                      <h3 className="font-normal">
                        Position :{" "}
                        <span className="font-light">{data.position}</span>
                      </h3>
                      <h3 className="font-normal">
                        Project Type :{" "}
                        <span className="font-light">{data.Company}</span>
                      </h3>

                      <h3 className="font-semibold md:text-xl p-2">
                        {data.project_id}
                      </h3>
                      <ul className="space-y-2 text-justify">
                        {data.work_exp.map((expLine, index) => (
                          <li key={index}>{expLine}</li>
                        ))}
                      </ul>
                      <h3 className="font-semibold md:text-xl p-2">
                        Technologys
                      </h3>
                      <div className="grid grid-cols-2 grid-flow-row md:grid-cols-3 gap-4 place-content-center">
                        {data.tools.map((tool, idx) => (
                          <div
                            className="w-28 md:w-36 bg-primary-100 dark:bg-gray-600 border-spacing-1 shadow p-3 drop-shadow-md font-medium "
                            key={idx}
                          >
                            <p className="md:text-sm text-[11px] text-center">
                              {tool}
                            </p>
                          </div>
                        ))}
                      </div>

                      <h3 className="font-semibold md:text-xl p-2">Product</h3>
                      <img
                        src={data.demo}
                        // width={300}
                        // height={300}
                        alt=""
                        className="mx-auto lg:w-2/4"
                      />
                      <div className="p-2 space-x-8">
                        {data.publish && (
                          <button
                            className="bg-white shadow text-secondary-200 drop-shadow-sm p-2 rounded-lg text-sm font-semibold"
                            onClick={() => {
                              window.open(data.publish, "_blank");
                            }}
                          >
                            Publish
                          </button>
                        )}

                        {data.video_demo && (
                          <button
                            className="bg-white shadow text-secondary-200 drop-shadow-sm p-2 rounded-lg text-sm font-semibold"
                            onClick={() => {
                              window.open(data.video_demo, "_blank");
                            }}
                          >
                            Demo
                          </button>
                        )}

                        {/* <button
                          className="bg-secondary-200 shadow text-white drop-shadow-sm p-2 rounded-lg text-sm font-semibold"
                          onClick={() => {
                            window.open(data.github, "_blank");
                          }}
                        >
                          {data.github_status}
                        </button> */}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
