import React from "react";
import Image from "next/image";
import Vathana from "@/public/Vathana.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export const Page = () => {
  const [text] = useTypewriter({
    words: ["I'm Yean Sovanvathana", "I'm Yean Sovanvathana"],
    loop: true,
    delaySpeed: 6000,
    deleteSpeed: 200,
    typeSpeed: 200,
  });
  return (
    <section id="home" className="gap-16 md:h-full py-10">
      <div className="lg:flex md:flex justify-between max-w-screen-xl mx-auto z-20 xl-items-center md:mt-24">
        <div className="p-10 text-center lg:text-start md:text-start">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-3xl py-2 font-medium lg:text-4xl"
          >
            {/* I'm <span className=" text-green-600">Yean</span> Sovanvathana */}
            {text}
            <Cursor cursorColor="red" />
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
            className="text-xl py-2 md:text-2xl"
          >
            Developer and designer.
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-md py-5 leading-8 text-gray-500 max-w-xl"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis
            neque, venenatis a volutpat et, ultrices.
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex justify-center items-center p-10 pb-12 md:pt-5"
        >
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
        </motion.div>
      </div>
      <div className="hidden md:flex lg:flex justify-center items-center py-10 pb-16">
        <div className="border bg-gray-100 w-4/6 h-24 rounded-xl grid grid-cols-3 divide-x divide-gray-300">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
