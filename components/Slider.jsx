import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Slider = () => {
  const [index, setIndex] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const timeoutRef = React.useRef(null);
  const delay = 4500;
  const slide = [
    <div className="grid grid-cols-2 gap-2  justify-center md:grid-cols-3">
      <div className="row-span-2 grid-item w-full">
        {/* <img /> */}
        <Image
          src="/CMC_promotion.jpg"
          width={300}
          height={300}
          loading="lazy"
          alt="img1"
          className="shadow-md shadow-black/5 dark:shadow-black/30 w-full h-full"
        />
      </div>
      <div className="grid-item">
        <Image
          Import
          Loader
          src="/recruitment_REVISE-1.jpg"
          width={300}
          height={300}
          loading="lazy"
          alt="img1"
          className="shadow-md shadow-black/5 dark:shadow-black/30"
        />
      </div>
      <div className="grid-item">
        <Image
          src="/newYearHoliday_v1.jpg"
          width={300}
          height={300}
          loading="lazy"
          alt="img1"
          className="shadow-md shadow-black/5 dark:shadow-black/30"
        />
      </div>
      <div className="col-span-2 grid-item">
        <Image
          src="/poster.jpg"
          width={300}
          height={300}
          loading="lazy"
          alt="img1"
          className="shadow-md shadow-black/5 dark:shadow-black/30"
        />
      </div>
      <div className="col-span-2 grid-item">
        <Image
          src="/voucher_front_v3.jpg"
          width={300}
          height={300}
          loading="lazy"
          alt="Image1"
          className="shadow-md shadow-black/5 dark:shadow-black/30"
        />
      </div>
      <div className="hidden md:flex grid-item">
        <Image
          src="/Poster2_vertical_v1.jpg"
          width={300}
          height={300}
          loading="lazy"
          alt="Image1"
          className="shadow-md shadow-black/5 dark:shadow-black/30"
        />
      </div>
    </div>,
    <div className="grid grid-cols-2 gap-2 justify-center md:grid-cols-3">
      <div className="row-span-2 grid-item ">
        <Image
          src="/Service2_Production.jpg"
          width={300}
          height={300}
          loading="lazy"
          alt="Image1"
          className="shadow-md shadow-black/5 dark:shadow-black/30"
        />
      </div>
      <div className="grid-item">
        <Image
          src="/work_flow_CMC_REVISE-1.jpg"
          width={300}
          height={300}
          loading="lazy"
          alt="Image1"
          className="shadow-md shadow-black/5 dark:shadow-black/30"
        />
      </div>
      <div className="grid-item">
        <Image
          src="/Discount2.jpg"
          width={300}
          height={300}
          loading="lazy"
          alt="Image1"
          className="shadow-md shadow-black/5 dark:shadow-black/30"
        />
      </div>
      <div className="col-span-2 grid-item">
        <Image
          src="/dish_washer.jpg"
          width={300}
          height={300}
          loading="lazy"
          alt="Image1"
          className="shadow-md shadow-black/5 dark:shadow-black/30"
        />
      </div>
      <div className="col-span-2 md:col-span-3 grid-item">
        <Image
          src="/CMC_Wash_Comming_Soon.jpg"
          width={300}
          height={300}
          loading="lazy"
          alt="Image1"
          className="shadow-md shadow-black/5 dark:shadow-black/30"
        />
      </div>
    </div>,
  ];

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();

    if (isLoading) {
      timeoutRef.current = setTimeout(() => {
        setIsLoading(false);
      }, delay);
    } else {
      timeoutRef.current = setTimeout(() => {
        setIndex((prevIndex) =>
          prevIndex === slide.length - 1 ? 0 : prevIndex + 1
        );
      }, delay);
    }

    return () => {
      resetTimeout();
    };
  }, [index, isLoading]);

  return (
    <div className="slideshow max-w-md">
      {isLoading ? (
        <div className="loading">
          <div className="pb-5 w-4 h-4 text-center"></div>
          <div className="slideshowSlider">
            <div className="grid grid-cols-2 gap-2 max-w-[33rem] justify-center md:grid-cols-3 animate-pulse border-red-500">
              <div className="row-span-2 grid-item">
                <div className="w-32 h-[330px] bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="grid-item">
                <div className="bg-gray-200 dark:bg-gray-700 w-32 h-32"></div>
              </div>
              <div className="grid-item">
                <div className="bg-gray-200 dark:bg-gray-700 w-32 h-32"></div>
              </div>
              <div className="col-span-2 grid-item">
                <div className="bg-gray-200 dark:bg-gray-700 h-32"></div>
              </div>
              <div className="col-span-2 grid-item">
                <div className="bg-gray-200 dark:bg-gray-700  h-32"></div>
              </div>
              <div className="hidden md:flex grid-item">
                <div className="bg-gray-200 dark:bg-gray-700 w-32 h-32"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="slideshowDots pb-5">
            {slide.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div
              className="slideshowSlider"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {slide.map((slide, index) => (
                <div className="slide" key={index}>
                  {slide}
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};
