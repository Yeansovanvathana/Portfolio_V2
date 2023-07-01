import React from "react";
import { Slider } from "./Slider";
import { motion } from "framer-motion";
import { Feedback } from "./Feedback";

export const Design = () => {
  return (
    <section
      id="design"
      className="lg:h-full flex lg:items-center lg:justify-center"
    >
      <div className="max-w-screen-xl mx-auto lg:px-20 mt-20 lg:mt-0 lg:py-24 w-full">
        <div className="p-5 px-10 md:text-start text-center ">
          <motion.h2
            className="text-2xl font-semibold py-2"
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
            className="text-sm md:text-base text-gray-500"
          >
            many of my work showcase here
          </motion.h3>
        </div>
        <div className=" max-w-screen-xl p-10 flex justify-center items-center flex-col lg:flex-row lg:justify-between gap-10 ">
          <Slider />
          <Feedback />
        </div>
      </div>
    </section>
  );
};
