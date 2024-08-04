import React from "react";
import { MdOutlineStorefront } from "react-icons/md";

export const Store = () => {
  return (
    <div className="flex justify-center h-[calc(100vh-60px)] items-center ">
      <span className="text-[--desc] text-blue-500 text-5xl">
        <MdOutlineStorefront />
      </span>
    </div>
  );
};
