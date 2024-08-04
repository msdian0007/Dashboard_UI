import React from "react";
import { FaBell } from "react-icons/fa";
import { MdOutlineMail, MdWbSunny } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut, IoMdMoon } from "react-icons/io";
import { DarkMode } from "../Navbar/DarkMode";

const menuItems = [
  {
    label: "Mail",
    key: "0",
    icon: (
      <div className="flex justify-center text-green-500">
        <MdOutlineMail className="text-xl" />
      </div>
    ),
  },
  {
    label: "Notification",
    key: "1",
    icon: (
      <div className="flex justify-center text-orange-500">
        <FaBell className="text-xl" />
      </div>
    ),
  },
  {
    label: "Setting",
    key: "2",
    icon: (
      <div className="flex justify-center text-slate-500">
        <IoSettingsOutline className="text-xl" />
      </div>
    ),
  },

  {
    label: "Profile",
    key: "3",
    icon: (
      <div className="flex justify-center text-blue-500">
        <CgProfile className="text-xl" />
      </div>
    ),
  },
  {
    label: "SignOut",
    key: "4",
    icon: (
      <div className="flex justify-center text-red-500">
        <IoMdLogOut className="text-xl" />
      </div>
    ),
  },
];

export const MenuBar = ({ setOpenMenus, openMenus }) => {
  return (
    <div
      // onClick={() => setOpenMenus(false)}
      className={`${
        openMenus ? "md:hidden flex" : "hidden "
      } fixed z-30 text-lg top-0 gap-3 items-center bottom-0 text-center right-0 mt-[60px] flex-col dark:bg-[--bg] dark:text-[--title] sun min-w-[60px] px-2`}
    >
      <span className="py-2 border-b-[1px] border-[--bg-l]">
        <DarkMode />
      </span>
      {menuItems.map((i) => {
        return (
          <>
            <span
              key={i.id}
              className="dark:text-[--desc] cursor-pointer grid text-center text-lg pb-1 border-b-[1px]  border-[--bg-l]"
            >
              {i.icon}
              <span className="text-xs">{i.label}</span>
            </span>
          </>
        );
      })}
    </div>
  );
};
