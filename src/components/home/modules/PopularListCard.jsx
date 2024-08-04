import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export const PopularListCard = ({ info }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-between gap-3">
        <div className="p-4 text-2xl text-orange-600 rounded-full bg-orange-400/20">
          {info?.icon}
        </div>
        <div className="text-[--desc]">{info?.title}</div>
      </div>
      <div className="text-2xl text-[--bg-l] cursor-pointer hover:text-slate-400">
        <IoIosArrowDroprightCircle />
      </div>
    </div>
  );
};
