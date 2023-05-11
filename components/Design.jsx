import React, { useEffect } from "react";
import { Data } from "@/utils/Design";

export const Design = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="pt-10 px-10 md:text-start text-center">
        <h2 className="text-2xl font-medium py-2">Design Poster</h2>
        <h3 className="text-xl text-gray-500">
          many of our work showcase here
        </h3>
      </div>
      <div className="p-10 flex justify-between">
        <div className="grid grid-cols-2 gap-2 max-w-[33rem] justify-center md:grid-cols-3">
          <div className="row-span-2 grid-item">
            <img src="CMC_promotion.jpg" alt="img1" />
          </div>
          <div className="grid-item">
            <img src="/recruitment_REVISE-1.jpg" alt="img1" />
          </div>
          <div className="grid-item">
            <img src="/newYearHoliday_v1.jpg" alt="img1" />
          </div>
          <div className="col-span-2 grid-item">
            <img src="/poster.jpg" alt="img1" />
          </div>
          <div className="col-span-2 grid-item">
            <img src="/voucher_front_v3.jpg" alt="img1" />
          </div>
          <div className="hidden md:flex grid-item">
            <img src="/Discount2.jpg" alt="img1" />
          </div>
        </div>
        {/* <div>hello</div> */}
      </div>
    </div>
  );
};
