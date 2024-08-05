import React from "react";
import { FaBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { DarkMode } from "./DarkMode";

export const NavList = () => {
  return (
    <>
      <div className="hidden gap-2 my-auto md:flex">
        <span className=" bg-[--bg-l] text-[--desc] rounded-full h-6 p-1 cursor-pointer">
          <MdOutlineMail />
        </span>
        <span className="bg-[--bg-l] rounded-full text-[--desc] h-6 p-1 cursor-pointer">
          <IoSettingsOutline />
        </span>
        <span className=" bg-[--bg-l] rounded-full text-[--desc] h-6 p-1 cursor-pointer">
          <FaBell />
        </span>
        <DarkMode />
      </div>
    </>
  );
};
