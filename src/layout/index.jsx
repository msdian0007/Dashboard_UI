import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { SideMenus } from "./Sidebar/SideMenus";
import { MaskScreen } from "../utils/MaskScreen";

export const MainLayout = ({ children }) => {
  const [isOpenSideModal, setIsOpenSideModal] = useState(false);
  let props = {
    setIsOpenSideModal,
    isOpenSideModal,
  };
  return (
    <>
      <Navbar {...props} />
      <SideMenus {...props} />
      <MaskScreen {...props} />
      <div
        className={`${
          isOpenSideModal ? "block lg:hidden " : "hidden"
        } fixed inset-0 top-0 z-20 h-screen bg-black/70`}
      ></div>
      <div className="mt-[60px] lg:ml-[60px] transition-all ">{children}</div>
    </>
  );
};
