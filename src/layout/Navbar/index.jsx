import React, { useState } from "react";
import { Profile } from "./Profile";
import { NavList } from "./NavList";
import { SearchBar } from "./SearchBar";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { MenuBar } from "../Menubar";
import { MaskScreen } from "../../utils/MaskScreen";
import { RxCross1, RxCross2 } from "react-icons/rx";

export const Navbar = ({ setIsOpenSideModal, isOpenSideModal }) => {
  const [openMenus, setOpenMenus] = useState(false);
  let props = {
    openMenus,
    setOpenMenus,
  };
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
        <div className="flex md:hidden">
          <span className="content-center text-3xl cursor-pointer">
            {openMenus ? (
              <RxCross2 onClick={() => setOpenMenus(!openMenus)} />
            ) : (
              <MdMenu onClick={() => setOpenMenus(!openMenus)} />
            )}
          </span>
        </div>
        <MenuBar {...props} />
        <MaskScreen isOn={openMenus} />
      </div>
    </div>
  );
};
