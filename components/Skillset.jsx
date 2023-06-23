import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Skillset = () => {
    return (
        <section
            id="skills"
            className="lg:h-full flex lg:items-center lg:justify-center pt-10 lg:pt-0"
        >
            <div className="max-w-screen-xl mx-auto lg:px-20 lg:py-24 w-full">
                <div className="lg:flex lg:gap-52 p-10 lg:p-0">
                    <div className="py-5 lg:px-10 md:text-start text-center">
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
                            className="text-sm md:text-base text-gray-500"
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
                            <div className=" rounded-2xl relative w-48 h-52  lg:pr-10">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/design/Code Bug (HD).png"
                                    alt=""
                                />
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex gap-4 justify-center items-center lg:pl-4 lg:pr-10">
                        <div className="space-y-4">
                            <div className="Card md:w-48">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/Icons/python-svgrepo-com.svg"
                                    alt=""
                                    className="Button"
                                />
                                <p className="text-sm md:text-base">Python</p>
                            </div>
                            <div className="Card md:w-48">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/Icons/java-icon.svg"
                                    className="Button"
                                    alt=""
                                />
                                <p className="text-sm md:text-base">Java</p>
                            </div>
                            <div className="Card md:w-48">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/Icons/js.png"
                                    className="Button"
                                    alt=""
                                />
                                <p className="text-sm md:text-base">
                                    JavaScript
                                </p>
                            </div>
                            <div className="Card md:w-48">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/Icons/node-js-svgrepo-com.svg"
                                    className="Button"
                                    alt=""
                                />
                                <p className="text-sm md:text-base">Node js</p>
                            </div>
                            <div className="Card md:w-48">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/Icons/nest-middleware-js-svgrepo-com.svg"
                                    className="Button"
                                    alt=""
                                />
                                <p className="text-sm md:text-base">Nest Js</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="Card md:w-48">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/Icons/react-javascript-js-framework-facebook-svgrepo-com.svg"
                                    className="Button"
                                    alt=""
                                />
                                <p className="text-sm md:text-base">React js</p>
                            </div>
                            <div className="Card md:w-48">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/Icons/vue-vuejs-javascript-js-framework-svgrepo-com.svg"
                                    className="Button"
                                    alt=""
                                />
                                <p className="text-sm md:text-base">Vue js</p>
                            </div>
                            <div className="Card md:w-48">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/Icons/flutter-svgrepo-com.svg"
                                    className="Button"
                                    alt=""
                                />
                                <p className="text-sm md:text-base">Flutter</p>
                            </div>
                            <div className="Card md:w-48">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/Icons/unity-svgrepo-com.svg"
                                    className="Button"
                                    alt=""
                                />
                                <p className="text-sm md:text-base">Unity</p>
                            </div>
                            <div className="Card md:w-48 invisible">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/Icons/unity-svgrepo-com.svg"
                                    className="Button"
                                    alt=""
                                />
                                <p className="text-sm md:text-base">Flutter</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:flex lg:gap-56 p-10 lg:p-0 ">
                    <div className="py-5 lg:px-10 md:text-start text-center ">
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
                            className="text-sm md:text-base text-gray-500"
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
                            <div className=" rounded-2xl relative w-48 h-52">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/design/Thinking (HD).png"
                                    alt=""
                                />
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex gap-4 justify-center items-center lg:pl-12  lg:pr-10">
                        <div className="space-y-4">
                            <div className="Card2 gap-2 md:w-48">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/Icons/photoshop-cc-logo-svgrepo-com.svg"
                                    className="Button"
                                    alt=""
                                />
                                <p className="text-[11px] md:text-base">
                                    Adobe Photoshop
                                </p>
                            </div>
                            <div className="Card2 md:w-48">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/Icons/illustrator-svgrepo-com.svg"
                                    className="Button"
                                    alt=""
                                />
                                <p className="text-[11px] md:text-base">
                                    Adobe Illustrator
                                </p>
                            </div>
                            <div className="Card2 md:w-48">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/Icons/adobe-xd-1-logo-svgrepo-com.svg"
                                    className="Button"
                                    alt=""
                                />
                                <p className="text-sm md:text-base">Adobe Xd</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="Card2 md:w-48">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/Icons/adobe-lightroom-svgrepo-com.svg"
                                    className="Button"
                                    alt=""
                                />
                                <p className="text-[11px] md:text-base">
                                    Adobe Lightroom
                                </p>
                            </div>
                            <div className="Card2 md:w-48">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/Icons/figma-svgrepo-com.svg"
                                    className="Button"
                                    alt=""
                                />
                                <p className="text-sm md:text-base">Figma</p>
                            </div>
                            <div className="Card2 md:w-48">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/Icons/Canva_icon_2021.svg.png"
                                    className="Button"
                                    alt=""
                                />
                                <p className="text-sm md:text-base">Canva</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
