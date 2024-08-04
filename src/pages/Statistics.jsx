import React from "react";
import { IoMdStats } from "react-icons/io";

export const Statistics = () => {
  return (
    <div className="flex justify-center h-[calc(100vh-60px)] items-center ">
      <span className="text-[--desc] text-blue-500 text-5xl">
        <IoMdStats />
      </span>
    </div>
  );
};
