import React from "react";
import { motion } from "framer-motion";
export const Skillset = () => {
  return (
    <section
      id="skills"
      className="lg:h-screen flex lg:items-center lg:justify-center pt-10 lg:pt-0"
    >
      <div className="w-[1280px] mx-auto">
        <div className="lg:flex lg:gap-40 p-10 lg:p-0">
          <div className="p-5 px-10 md:text-start text-center ">
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
              Development Skills
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
              Comprehensive Technical Skillset for Development
            </motion.h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex justify-center"
            >
              <div className=" rounded-2xl relative h-64 w-50 mt-5 lg:pr-10">
                <img src="/Code Bug (HD).png" alt="" />
              </div>
            </motion.div>
          </div>
          <div className="flex gap-4 justify-center items-center ">
            <div className="space-y-4">
              <div className="Card md:w-60">
                <img
                  src="/Icons/python-svgrepo-com.svg"
                  alt=""
                  className="Button"
                />
                <p className="text-sm md:text-xl">Python</p>
              </div>
              <div className="Card md:w-60">
                <img src="/Icons/java-icon.svg" className="Button" alt="" />
                <p className="text-sm md:text-xl">Java</p>
              </div>
              <div className="Card md:w-60">
                <img src="/Icons/js.png" className="Button" alt="" />
                <p className="text-sm md:text-xl">JavaScript</p>
              </div>
              <div className="Card md:w-60">
                <img
                  src="/Icons/node-js-svgrepo-com.svg"
                  className="Button"
                  alt=""
                />
                <p className="text-sm md:text-xl">Node js</p>
              </div>
              <div className="Card md:w-60">
                <img
                  src="/Icons/nest-middleware-js-svgrepo-com.svg"
                  className="Button"
                  alt=""
                />
                <p className="text-sm md:text-xl">Nest Js</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="Card md:w-60">
                <img
                  src="/Icons/react-javascript-js-framework-facebook-svgrepo-com.svg"
                  className="Button"
                  alt=""
                />
                <p className="text-sm md:text-xl">React js</p>
              </div>
              <div className="Card md:w-60">
                <img
                  src="/Icons/vue-vuejs-javascript-js-framework-svgrepo-com.svg"
                  className="Button"
                  alt=""
                />
                <p className="text-sm md:text-xl">Vue js</p>
              </div>
              <div className="Card md:w-60">
                <img
                  src="/Icons/flutter-svgrepo-com.svg"
                  className="Button"
                  alt=""
                />
                <p className="text-sm md:text-xl">Flutter</p>
              </div>
              <div className="Card md:w-60">
                <img
                  src="/Icons/unity-svgrepo-com.svg"
                  className="Button"
                  alt=""
                />
                <p className="text-sm md:text-xl">Unity</p>
              </div>
              <div className="Card md:w-60 invisible">
                <img
                  src="/Icons/unity-svgrepo-com.svg"
                  className="Button"
                  alt=""
                />
                <p className="text-sm md:text-xl">Flutter</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:gap-56 p-10 lg:p-0 ">
          <div className="p-5 px-10 md:text-start text-center ">
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
              Design Skills
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
              Comprehensive Technical Skillset for Design
            </motion.h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex justify-center"
            >
              <div className=" rounded-2xl relative h-64 w-50 mt-5">
                <img src="/Thinking (HD).png" alt="" />
              </div>
            </motion.div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div className="space-y-4">
              <div className="Card2 md:w-60">
                <img
                  src="/Icons/photoshop-cc-logo-svgrepo-com.svg"
                  className="Button"
                  alt=""
                />
                <p className="text-[11px] md:text-xl">Adobe Photoshop</p>
              </div>
              <div className="Card2 md:w-60">
                <img
                  src="/Icons/illustrator-svgrepo-com.svg"
                  className="Button"
                  alt=""
                />
                <p className="text-[11px] md:text-xl">Adobe Illustrator</p>
              </div>
              <div className="Card2 md:w-60">
                <img
                  src="/Icons/adobe-xd-1-logo-svgrepo-com.svg"
                  className="Button"
                  alt=""
                />
                <p className="text-sm md:text-xl">Adobe Xd</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="Card2 md:w-60">
                <img
                  src="/Icons/adobe-lightroom-svgrepo-com.svg"
                  className="Button"
                  alt=""
                />
                <p className="text-[11px] md:text-xl">Adobe Lightroom</p>
              </div>
              <div className="Card2 md:w-60">
                <img
                  src="/Icons/figma-svgrepo-com.svg"
                  className="Button"
                  alt=""
                />
                <p className="text-sm md:text-xl">Figma</p>
              </div>
              <div className="Card2 md:w-60">
                <img
                  src="/Icons/Canva_icon_2021.svg.png"
                  className="Button"
                  alt=""
                />
                <p className="text-sm md:text-xl">Canva</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
