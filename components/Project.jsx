import React, { useState } from "react";
import { motion } from "framer-motion";
import LineGradient from "./LineGradient";
import { Exp } from "@/utils/Experience";

export const Project = () => {
  const [showItem, setShowItem] = useState(false);
  console.log(showItem);
  return (
    <section
      id="experience"
      className="lg:h-screen  flex justify-center items-center"
    >
      <div className="w-[1280px] mx-auto">
        <div className="p-5 px-10 md:text-start text-center">
          <motion.h2
            className="text-3xl font-medium py-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Design Poster
          </motion.h2>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-xl text-gray-500"
          >
            many of our work showcase here
          </motion.h3>
        </div>
        <div className="justify-center flex flex-col space-y-3 items-center">
          {Exp.map((data, idx) => (
            <div key={idx} className="w-2/3 bg-primary-200 rounded-sm shadow ">
              <div className="p-8 space-y-3">
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
              <div
                className="flex justify-end py-4 px-4 cursor-pointer"
                onClick={() => setShowItem(!showItem)}
              >
                View project
              </div>
            </div>
          ))}
          {/* <div
            className={`absolute top-[75px] right-0 w-full bg-primary-100 m-0 overflow-hidden transition-height duration-500 ease-in-out ${
              showItem ? "h-10 w-10 bg-red-200" : "h-0"
            }`}
          >
            <div
              className="flex flex-col justify-center h-screen items-center gap-10 text-2xl -mt-20"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <p>kdjfadj</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
