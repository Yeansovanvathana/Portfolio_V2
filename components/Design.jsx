import React from "react";
import Image from "next/image";
import { data } from "autoprefixer";

export const Design = () => {
  const Data = [
    {
      id: 1,
      title: "banner1",
      img: "/CMC_promotion.jpg",
    },
    {
      id: 2,
      title: "banner2",
      img: "/poster1.jpg",
    },
    {
      id: 3,
      title: "banner3",
      img: "/newYearHoliday_v1.jpg",
    },
    {
      id: 4,
      title: "banner4",
      img: "/Discount2.jpg",
    },
    {
      id: 5,
      title: "banner5",
      img: "/voucher_front_v3.jpg",
    },
    {
      id: 6,
      title: "banner6",
      img: "/recruitment_REVISE-1.jpg",
    },
    {
      id: 7,
      title: "banner7",
      img: "/CMC_Wash_Comming_Soon.jpg",
    },
  ];
  return (
    <div className="bg-primary-200">
      <div className="p-10">
        <h2 className="text-2xl text-center font-medium py-2">Design Poster</h2>
        <h3 className="text-xl text-gray-500 text-center">
          many of our work showcase here
        </h3>
      </div>
      <div className="p-10">
        <div className="grid grid-cols-[repeat(3,minmax(100px,500px))] gap-4">
          {Data &&
            Data.map((img) => (
              <img
                src={img.img}
                alt={img.title}
                className="inline-block align-middle object-fill"
              />
            ))}
        </div>
      </div>
    </div>
  );
};
