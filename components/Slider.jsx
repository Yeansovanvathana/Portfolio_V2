import React from "react";
import LazyLoad from "react-lazy-load";
import Image from "next/image";

export const Slider = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const delay = 4500;
  const slide = [
    <div className="grid grid-cols-2 gap-2 max-w-[33rem] justify-center md:grid-cols-3">
      <LazyLoad className="row-span-2 grid-item w-full">
        {/* <img /> */}
        <Image
          src="/CMC_promotion.jpg"
          width={300}
          height={300}
          loading="lazy"
          alt="img1"
          className="shadow-md shadow-black/5 dark:shadow-black/30 w-full h-full"
        />
      </LazyLoad>
      <LazyLoad className="grid-item">
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
      </LazyLoad>
      <LazyLoad className="grid-item">
        <Image
          src="/newYearHoliday_v1.jpg"
          width={300}
          height={300}
          loading="lazy"
          alt="img1"
          className="shadow-md shadow-black/5 dark:shadow-black/30"
        />
      </LazyLoad>
      <LazyLoad className="col-span-2 grid-item">
        <Image
          src="/poster.jpg"
          width={300}
          height={300}
          loading="lazy"
          alt="img1"
          className="shadow-md shadow-black/5 dark:shadow-black/30"
        />
      </LazyLoad>
      <LazyLoad className="col-span-2 grid-item">
        <Image
          src="/voucher_front_v3.jpg"
          width={300}
          height={300}
          loading="lazy"
          alt="Image1"
          className="shadow-md shadow-black/5 dark:shadow-black/30"
        />
      </LazyLoad>
      <LazyLoad className="hidden md:flex grid-item">
        <Image
          src="/Poster2_vertical_v1.jpg"
          width={300}
          height={300}
          loading="lazy"
          alt="Image1"
          className="shadow-md shadow-black/5 dark:shadow-black/30"
        />
      </LazyLoad>
    </div>,
    <div className="grid grid-cols-2 gap-2 max-w-[33rem] justify-center md:grid-cols-3">
      <LazyLoad className="row-span-2 grid-item ">
        <Image
          src="/Service2_Production.jpg"
          width={300}
          height={300}
          loading="lazy"
          alt="Image1"
          className="shadow-md shadow-black/5 dark:shadow-black/30"
        />
      </LazyLoad>
      <LazyLoad className="grid-item">
        <Image
          src="/work_flow_CMC_REVISE-1.jpg"
          width={300}
          height={300}
          loading="lazy"
          alt="Image1"
          className="shadow-md shadow-black/5 dark:shadow-black/30"
        />
      </LazyLoad>
      <LazyLoad className="grid-item">
        <Image
          src="/Discount2.jpg"
          width={300}
          height={300}
          loading="lazy"
          alt="Image1"
          className="shadow-md shadow-black/5 dark:shadow-black/30"
        />
      </LazyLoad>
      <LazyLoad className="col-span-2 grid-item">
        <Image
          src="/dish_washer.jpg"
          width={300}
          height={300}
          loading="lazy"
          alt="Image1"
          className="shadow-md shadow-black/5 dark:shadow-black/30"
        />
      </LazyLoad>
      <LazyLoad className="col-span-2 md:col-span-3 grid-item">
        <Image
          src="/CMC_Wash_Comming_Soon.jpg"
          width={300}
          height={300}
          loading="lazy"
          alt="Image1"
          className="shadow-md shadow-black/5 dark:shadow-black/30"
        />
      </LazyLoad>
    </div>,
  ];

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slide.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow max-w-md">
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
    </div>
  );
};
