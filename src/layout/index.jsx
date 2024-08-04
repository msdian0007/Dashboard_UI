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
      <div className="dark:bg-[--bg-d]">
        <Navbar {...props} />
        <SideMenus {...props} />
        <MaskScreen {...props} />
        <div className="mt-[60px] lg:ml-[60px] transition-all ">{children}</div>
      </div>
    </>
  );
};
