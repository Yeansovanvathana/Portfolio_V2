import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Image from "next/image";
import { motion } from "framer-motion";

export const Feedback = () => {
  const StarStyles = `text-yellow-500`;

  return (
    <div className="z-30 mt-6 lg:-mt-3">
      <div className="pb-4">
        <h3 className="text-xl font-medium text-center lg:text-start">
          Client Feedback
        </h3>
        <p className="text-xs text-gray-500 text-center lg:text-start dark:text-gray-400">
          What Our Clients Say About Us...
        </p>
      </div>
      {/* Feedback 1*/}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-col lg:flex-row bg-primary-200 dark:bg-gray-600 rounded-lg shadow justify-center items-center m-auto py-5 lg:py-2 px-4"
      >
        <div className="w-14 h-14 relative">
          <Image
            src="/feedback/kimhoung.jpg"
            width={300}
            height={300}
            alt="Image"
            className="block rounded-full border border-gray-100 shadow-sm "
          />
          <div class="absolute animate-ping  top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
          <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
        </div>
        <div className="lg:px-5 py-1 ">
          <h2 className="text-center text-sm lg:text-start">KimHoung</h2>
          <div className="flex justify-center lg:justify-start">
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiOutlineStar className={`${StarStyles}`} />
          </div>
          <p className="lg:max-w-[320px] max-w-[320px] text-center lg:text-start text-gray-500 text-xs dark:text-gray-300">
            The poster design you provided surpassed our expectations! It
            beautifully captured the essence of our brand and received many new
            customer.
          </p>
        </div>
        <div>
          <div className="space-y-1">
            <h2 className="text-center lg:text-start text-xs">Quality</h2>
            <div className="w-full h-1.5 bg-secondary-100 rounded-lg">
              <div className="w-4/5 h-full bg-green-600 rounded-lg transition-all duration-500 hover:w-full"></div>
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="space-y-1 text-xs lg:text-start">Communication</h2>
            <div className="w-full h-1.5 bg-secondary-100 rounded-lg">
              <div className="w-[90%] h-full bg-green-600 rounded-lg transition-all duration-500 hover:w-full"></div>
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="space-y-1 text-xs lg:text-start">Target Audience</h2>
            <div className="w-full h-1.5 bg-secondary-100 rounded-lg">
              <div className="w-4/5 h-full bg-green-600 rounded-lg transition-all duration-500 hover:w-full"></div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Feedback2 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-col lg:flex-row bg-primary-200 dark:bg-gray-600 rounded-lg shadow justify-center items-center m-auto py-5 lg:py-2 my-4 px-4"
      >
        <div className="w-14 h-14 relative">
          <Image
            src="/feedback/sopheak.jpg"
            width={300}
            height={300}
            alt="Image"
            className="block rounded-full border border-gray-100 shadow-sm "
          />
          <div class="absolute animate-ping  top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
          <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
        </div>
        <div className="lg:px-5 py-1 ">
          <h2 className="text-center text-sm lg:text-start">SoPheak</h2>
          <div className="flex justify-center lg:justify-start">
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiOutlineStar className={`${StarStyles}`} />
          </div>
          <p className="lg:max-w-[320px] max-w-[400px] text-center lg:text-start text-gray-500 text-xs dark:text-gray-300">
            Thank you for the exceptional poster design. It truly stood out and
            connected with our intended audience.
          </p>
        </div>
        <div>
          <div className="space-y-1">
            <h2 className="text-center lg:text-start text-xs">Quality</h2>
            <div className="w-full h-1.5 bg-secondary-100 rounded-lg">
              <div className="w-[95%] h-full bg-green-600 rounded-lg transition-all duration-500 hover:w-full"></div>
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="text-xs">Communication</h2>
            <div className="w-full h-1.5 bg-secondary-100 rounded-lg">
              <div className="w-[90%] h-full bg-green-600 rounded-lg transition-all duration-500 hover:w-full"></div>
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="text-xs">Target Audience</h2>
            <div className="w-full h-1.5 bg-secondary-100 rounded-lg">
              <div className="w-4/5 h-full bg-green-600 rounded-lg transition-all duration-500 hover:w-full"></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Feedback3 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.4 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-col lg:flex-row bg-primary-200 dark:bg-gray-600 rounded-lg shadow justify-center items-center m-auto py-5 lg:py-2 px-4"
      >
        <div className="w-14 h-14 relative">
          <Image
            src="/feedback/sreytoch.jpg"
            width={300}
            height={300}
            alt="Image"
            className="block rounded-full border border-gray-100 shadow-sm "
          />
          <div class="absolute animate-ping  top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
          <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
        </div>
        <div className="lg:px-5 py-1 ">
          <h2 className="text-center text-sm lg:text-start">SreyToch</h2>
          <div className="flex justify-center lg:justify-start">
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
          </div>
          <p className="lg:max-w-[320px] max-w-[400px] text-center lg:text-start text-gray-500 text-xs dark:text-gray-400">
            Your service delivered an excellent banner that effectively
            communicates our message to customers.
          </p>
        </div>
        <div>
          <div className="space-y-1">
            <h2 className=" text-center lg:text-start text-xs">Quality</h2>
            <div className="w-full h-1.5 bg-secondary-100 rounded-lg">
              <div className="w-[90%] h-full bg-green-600 rounded-lg transition-all duration-500 hover:w-full"></div>
            </div>
          </div>
          <div className="space-y-1">
            <h2 className=" text-xs">Communication</h2>
            <div className="w-full h-1.5 bg-secondary-100 rounded-lg">
              <div className="w-[90%] h-full bg-green-600 rounded-lg transition-all duration-500 hover:w-full"></div>
            </div>
          </div>
          <div className="space-y-1">
            <h2 className=" text-xs">Target Audience</h2>
            <div className="w-full h-1.5 bg-secondary-100 rounded-lg">
              <div className="w-4/5 h-full bg-green-600 rounded-lg transition-all duration-500 hover:w-full"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
