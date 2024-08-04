import React, { useEffect, useState } from "react";
import { FaNotesMedical } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoMdStats } from "react-icons/io";
import { LuWallet } from "react-icons/lu";
import { MdOutlineStorefront } from "react-icons/md";
import { Link } from "react-router-dom";

const menuList = [
  {
    id: 1,
    icon: <GoHomeFill />,
    path: "/",
  },
  {
    id: 2,
    icon: <IoMdStats />,
    path: "/stats",
  },
  {
    id: 3,
    icon: <FaNotesMedical />,
    path: "/orders",
  },
  {
    id: 4,
    icon: <LuWallet />,
    path: "/wallet",
  },
  {
    id: 5,
    icon: <MdOutlineStorefront />,
    path: "/store",
  },
];
export const SideMenus = ({ isOpenSideModal, setIsOpenSideModal }) => {
  const [path, setPath] = useState(window.location?.pathname);
  return (
    <div
      onClick={() => setIsOpenSideModal(false)}
      className={`${
        isOpenSideModal ? "flex" : "lg:flex hidden"
      } fixed z-30 text-lg top-0 gap-4 bottom-0 text-center left-0 mt-[60px] flex-col dark:bg-[--bg] dark:text-[--title] sun min-w-[60px]`}
    >
      {menuList.map((m) => {
        return (
          <Link
            to={m.path}
            key={m.id}
            onClick={(e) => setPath(m.path)}
            className={`${
              m.path === path
                ? " border-l-[3px] border-blue-500 !text-blue-500 "
                : ""
            }dark:text-[--desc]  cursor-pointer flex justify-center py-2 text-xl`}
          >
            {m.icon}
          </Link>
        );
      })}
    </div>
  );
};
