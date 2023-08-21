import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

export const Page = () => {
  const [text] = useTypewriter({
    words: ["I'm Yean Sovanvathana", "I'm Yean Sovanvathana"],
    loop: true,
    delaySpeed: 6000,
    deleteSpeed: 200,
    typeSpeed: 200,
  });
  return (
    <section
      id="home"
      className="mt-10 md:mt-0 md:h-full w-full flex justify-center items-center pt-20 md:pt-44 md:pb-10 "
    >
      <div className="flex-col justify-center items-center w-full space-y-10">
        <div className="lg:flex md:flex justify-between max-w-screen-xl mx-auto z-20 lg:px-20">
          <div className="p-10 text-center lg:text-start md:text-start ">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-3xl py-2 font-medium font-lekton lg:text-4xl"
            >
              {/* I'm <span className=" text-green-600">Yean</span> Sovanvathana */}
              {text}
              <Cursor cursorColor="black" />
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
              className="text-xl py-2"
            >
              Developer and designer.
            </motion.h3>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-sm py-2 leading-8 text-gray-500 max-w-xl dark:text-gray-400"
            >
              I specialize in developing and designing innovative digital
              solutions, combining my skills in coding and visual aesthetics to
              create seamless and user-centric experiences.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex space-x-3 py-2 justify-center md:justify-start text-secondary-200 dark:text-gray-400"
            >
              <AiFillGithub
                onClick={() => {
                  window.open("https://github.com/Yeansovanvathana", "_blank");
                }}
                className="w-10 h-10 hover:text-gray-500 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-105 duration-300"
              />

              <AiFillLinkedin
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/sovanvathana-yean-79474727a/",
                    "_blank"
                  );
                }}
                className="w-10 h-10 hover:text-gray-500 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-105 duration-300"
              />
              <BsTelegram
                onClick={() => {
                  window.open("https://t.me/odvito", "_blank");
                }}
                className="w-10 h-10 hover:text-gray-500 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-105 duration-300"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="py-4 "
            >
              <a
                class="bg-primary-200 dark:bg-gray-300 text-secondary-200 font-semibold py-2 px-6 rounded-md shadow-sm drop-shadow-sm"
                href="/projects/Yeansovanvathana.pdf"
                download
              >
                Download CV
              </a>
            </motion.div>
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
            <div className="bg-primary-200 dark:bg-gray-600 w-48 h-80 rounded-3xl relative">
              <div className="w-48 h-80 rounded-3xl absolute overflow-hidden right-5 -top-5">
                <Image
                  src="/Vathana1.jpg"
                  width={300}
                  height={300}
                  alt="Vathana"
                  placeholder="empty"
                  // layout="fill"
                  // objectFit="cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="hidden md:flex lg:flex justify-center items-center py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="w-[1280px] h-4/6 px-20">
            <div className=" bg-gray-100 dark:bg-gray-600 rounded-xl grid grid-cols-3 divide-x divide-gray-300 dark:divide-gray-800">
              <div className="flex flex-col justify-center items-center py-2">
                <div className="flex flex-row items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="lg:w-12 lg:h-12 h-8 w-8 animate-pulse"
                    style={{ fill: "var(--svg-fill-color)" }}
                  >
                    <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z" />
                  </svg>
                  <h1 className="text-3xl font-bold opacity-80">2.5+</h1>
                </div>
                <h3 className="text-gray-500 text-sm dark:text-gray-300">
                  Years Experience
                </h3>
              </div>
              <div className="flex flex-col justify-center items-center py-2">
                <div className="flex flex-row items-center gap-3 py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="lg:w-10 lg:h-10 h-8 w-8 animate-pulse text-gray-500"
                    style={{ fill: "var(--svg-fill-color)" }}
                  >
                    <path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z" />
                  </svg>
                  <h1 className="text-3xl font-bold opacity-80">20+</h1>
                </div>
                <h3 className="text-gray-500 text-sm dark:text-gray-300">
                  Complete Projects
                </h3>
              </div>
              <div className="flex flex-col justify-center items-center py-2">
                <div className="flex flex-row items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="lg:w-12 lg:h-12 h-8 w-8 animate-pulse"
                    style={{ fill: "var(--svg-fill-color)" }}
                  >
                    <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352H592c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H516h-4-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48H48c-26.5 0-48 21.5-48 48V304c0 26.5 21.5 48 48 48H156.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z" />
                  </svg>
                  <h1 className="text-3xl font-bold opacity-80">4+</h1>
                </div>
                <h3 className="text-gray-500 text-sm dark:text-gray-300">
                  Design Clients
                </h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
