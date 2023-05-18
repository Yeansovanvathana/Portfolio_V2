import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Image from "next/image";

export const Feedback = () => {
  const StarStyles = `text-yellow-500`;

  return (
    <div className="bg-blue-200 animate-pulse">
      <div>
        <h3 className="text-2xl font-medium ">Client Feedback</h3>
        <p className="text-xl text-gray-500 py-2">
          What Our Clients Say About Us...
        </p>
      </div>

      <div className="flex bg-red-100 py-5">
        <div className="w-14 h-14 gap-5">
          <Image src="/Discount2.jpg" width={300} height={300} alt="Image" />
        </div>
        <div className="px-10">
          <h2>KimHoung</h2>
          <div className="flex">
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiOutlineStar className={`${StarStyles}`} />
          </div>
          <p className="max-w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quae,
            esse repudiandae
          </p>
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
        </div>
      </div>
      {/* Feedback2 */}
      <div className="flex bg-red-100 py-5">
        <div className="w-14 h-14 gap-5">
          <Image src="/Discount2.jpg" width={300} height={300} alt="Image" />
        </div>
        <div className="px-10">
          <h2>KimHoung</h2>
          <div className="flex">
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiOutlineStar className={`${StarStyles}`} />
          </div>
          <p className="max-w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quae,
            esse repudiandae
          </p>
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
        </div>
      </div>
      {/* Feedback3 */}
      <div className="flex bg-red-100 py-5">
        <div className="w-14 h-14 gap-5">
          <Image src="/Discount2.jpg" width={300} height={300} alt="Image" />
        </div>
        <div className="px-10">
          <h2>KimHoung</h2>
          <div className="flex">
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiFillStar className={`${StarStyles}`} />
            <AiOutlineStar className={`${StarStyles}`} />
          </div>
          <p className="max-w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quae,
            esse repudiandae
          </p>
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
        </div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>
  );
};
