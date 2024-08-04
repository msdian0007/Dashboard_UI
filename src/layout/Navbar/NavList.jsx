import { Switch } from "antd";
import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineMail, MdWbSunny } from "react-icons/md";

export const NavList = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
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
        <span className=" text-[--desc cursor-pointer">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
          />
          <label for="checkbox" class="checkbox-label bg-[--bg-l] ">
            <IoMdMoon className="fa-moon" />
            <MdWbSunny className="fa-sun" />
            <span className="ball !bg-[--desc]"></span>
          </label>
        </span>
      </div>
    </>
  );
};
