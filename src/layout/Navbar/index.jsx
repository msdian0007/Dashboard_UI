import React, { useState } from "react";
import { Profile } from "./Profile";
import { NavList } from "./NavList";
import { SearchBar } from "./SearchBar";
import { FaBell, FaCanadianMapleLeaf } from "react-icons/fa";
import { MdMenu, MdOutlineMail } from "react-icons/md";
import { Dropdown } from "antd";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

const items = [
  {
    label: "Mail",
    key: "0",
    icon: (
      <div className="text-green-500">
        <MdOutlineMail className="text-xl" />
      </div>
    ),
  },
  {
    label: "Notification",
    key: "1",
    icon: (
      <div className="text-orange-500">
        <FaBell className="text-xl" />
      </div>
    ),
  },
  {
    label: "Setting",
    key: "2",
    icon: (
      <div className="text-slate-500">
        <IoSettingsOutline className="text-xl" />
      </div>
    ),
  },
  {
    type: "divider",
  },
  {
    label: "Profile",
    key: "3",
    icon: (
      <div className="text-blue-500">
        <CgProfile className="text-xl" />
      </div>
    ),
  },
  {
    type: "divider",
  },
  {
    label: "SignOut",
    key: "4",
    icon: (
      <div className="text-red-500">
        <IoMdLogOut className="text-xl" />
      </div>
    ),
  },
];

export const Navbar = ({ setIsOpenSideModal, isOpenSideModal }) => {
  const [openMenus, setOpenMenus] = useState(false);
  return (
    <div className="fixed inset-0 top-0 flex max-h-[60px] dark:bg-[--bg] dark:text-[--title] sun z-50">
      <div className="flex min-w-[60px] justify-center">
        <span className="content-center cursor-pointer">
          <FaCanadianMapleLeaf
            className="text-2xl italic text-orange-500"
            onClick={() => setIsOpenSideModal(!isOpenSideModal)}
          />
        </span>
      </div>
      <div className="flex justify-between w-full px-4 my-auto">
        <SearchBar />
        <div className="justify-between hidden gap-4 md:flex">
          <NavList />
          <Profile />
        </div>
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <div className="flex md:hidden">
            <span className="content-center text-3xl cursor-pointer">
              <MdMenu onClick={() => setOpenMenus(true)} />
            </span>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};
