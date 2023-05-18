import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Image from "next/image";

export const Feedback = () => {
  const StarStyles = `text-yellow-500`;

  return (
    <div className="z-30">
      <div className="pb-4">
        <h3 className="text-2xl font-medium text-center lg:text-start">
          Client Feedback
        </h3>
        <p className="text-xl text-gray-500 text-center lg:text-start">
          What Our Clients Say About Us...
        </p>
      </div>
      {/* Feedback 1*/}
      <div className="flex flex-col lg:flex-row bg-gray-100 rounded-lg shadow justify-center items-center m-auto py-2 my-4 px-4">
        <div className="w-14 h-14  relative">
          <Image
            src="/Discount2.jpg"
            width={300}
            height={300}
            alt="Image"
            className="block rounded-full border border-gray-100 shadow-sm "
          />
          <div class="absolute animate-ping  top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
          <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
        </div>
        <div className="lg:px-10 py-2 ">
          <h2 className="text-center lg:text-start">KimHoung</h2>
          <div className="flex justify-center lg:justify-start">
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiOutlineStar className={`${StarStyles}`} />
          </div>
          <p className="lg:max-w-[320px] max-w-[400px] text-center lg:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quae,
            esse repudiandae
          </p>
        </div>
        <div>
          <h2 className="text-center lg:text-start">Quality</h2>
          <div className="flex justify-center lg:justify-start">
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiOutlineStar className={`${StarStyles}`} />
          </div>
          <h2>Communication</h2>
          <div className="flex justify-center lg:justify-start">
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiOutlineStar className={`${StarStyles}`} />
          </div>
          <h2>Target Audience</h2>
          <div className="flex justify-center lg:justify-start">
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiOutlineStar className={`${StarStyles}`} />
          </div>
        </div>
      </div>
      {/* Feedback2 */}
      <div className="flex flex-col lg:flex-row bg-gray-100 rounded-lg shadow justify-center items-center m-auto py-2 my-4 px-4">
        <div className="w-14 h-14  relative">
          <Image
            src="/Discount2.jpg"
            width={300}
            height={300}
            alt="Image"
            className="block rounded-full border border-gray-100 shadow-sm "
          />
          <div class="absolute animate-ping  top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
          <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
        </div>
        <div className="lg:px-10 py-2 ">
          <h2 className="text-center lg:text-start">KimHoung</h2>
          <div className="flex justify-center lg:justify-start">
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiOutlineStar className={`${StarStyles}`} />
          </div>
          <p className="lg:max-w-[320px] max-w-[400px] text-center lg:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quae,
            esse repudiandae
          </p>
        </div>
        <div>
          <h2 className="text-center lg:text-start">Quality</h2>
          <div className="flex justify-center lg:justify-start">
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiOutlineStar className={`${StarStyles}`} />
          </div>
          <h2>Communication</h2>
          <div className="flex justify-center lg:justify-start">
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiOutlineStar className={`${StarStyles}`} />
          </div>
          <h2>Target Audience</h2>
          <div className="flex justify-center lg:justify-start">
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiOutlineStar className={`${StarStyles}`} />
          </div>
        </div>
      </div>

      {/* Feedback3 */}
      <div className="flex flex-col lg:flex-row bg-gray-100 rounded-lg shadow justify-center items-center m-auto py-2  px-4">
        <div className="w-14 h-14  relative">
          <Image
            src="/Discount2.jpg"
            width={300}
            height={300}
            alt="Image"
            className="block rounded-full border border-gray-100 shadow-sm "
          />
          <div class="absolute animate-ping  top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
          <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
        </div>
        <div className="lg:px-10 py-2 ">
          <h2 className="text-center lg:text-start">KimHoung</h2>
          <div className="flex justify-center lg:justify-start">
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiOutlineStar className={`${StarStyles}`} />
          </div>
          <p className="lg:max-w-[320px] max-w-[400px] text-center lg:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quae,
            esse repudiandae
          </p>
        </div>
        <div>
          <h2 className="text-center lg:text-start">Quality</h2>
          <div className="flex justify-center lg:justify-start">
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiOutlineStar className={`${StarStyles}`} />
          </div>
          <h2>Communication</h2>
          <div className="flex justify-center lg:justify-start">
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiOutlineStar className={`${StarStyles}`} />
          </div>
          <h2>Target Audience</h2>
          <div className="flex justify-center lg:justify-start">
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiOutlineStar className={`${StarStyles}`} />
          </div>
        </div>
      </div>
    </div>
  );
};
