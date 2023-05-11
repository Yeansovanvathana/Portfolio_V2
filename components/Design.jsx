import React from "react";
import { Data } from "@/utils/Design";

export const Design = () => {
  const img1 = Data.filter((img) => img.img === "/CMC_promotion.jpg");
  return (
    <div className="bg-primary-200">
      <div className="p-10">
        <h2 className="text-2xl text-center font-medium py-2">Design Poster</h2>
        <h3 className="text-xl text-gray-500 text-center">
          many of our work showcase here
        </h3>
      </div>
      <div className="p-10">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <img src="/Poster2_vertical_v1.jpg" alt="img1" />
          </div>
          <div className="col-span-2">
            <img src="/poster1.jpg" alt="img1" />
          </div>
          <div>
            <img src="/newYearHoliday_v1.jpg" alt="img1" />
          </div>
          <div>
            <img src="/Discount2.jpg" alt="img1" />
          </div>
          <div>
            <img src="/voucher_front_v3.jpg" alt="img1" />
          </div>
          <div>
            <img src="/recruitment_REVISE-1.jpg" alt="img1" />
          </div>
          <div className="col-span-3">
            <img src="/CMC_Wash_Comming_Soon.jpg" alt="img1" />
          </div>
        </div>
      </div>
    </div>
  );
};
