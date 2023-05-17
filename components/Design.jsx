import React from "react";
import { Slider } from "./Slider";
import { motion } from "framer-motion";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import LazyLoad from "react-lazy-load";

export const Design = () => {
  const StarStyles = `text-yellow-500`;
  return (
    <section id="skills" className="md:h-full ">
      <div className="max-w-screen-xl mx-auto">
        <div className="p-5 px-10 md:text-start text-center">
          <motion.h2
            className="text-2xl font-medium py-2"
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
        <div className="p-10 md:flex justify-between gap-16">
          <Slider />,
          {/* <div className="bg-blue-200 w-max">
            <h3 className="text-2xl font-medium pb-2">Client Feedback</h3>
            <p className="text-xl text-gray-500">
              What Our Clients Say About Us...
            </p> */}
          {/* <div className="flex gap-5 bg-red-100  ">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-red-500">
                <img
                  src="/Discount2.jpg"
                  alt="Image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h2>KimHoung</h2>
                <div className="flex">
                  <AiFillStar className={`${StarStyles}`} />
                  <AiFillStar className={`${StarStyles}`} />
                  <AiFillStar className={`${StarStyles}`} />
                  <AiFillStar className={`${StarStyles}`} />
                  <AiOutlineStar className={`${StarStyles}`} />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  quae, esse repudiandae
                </p>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};
