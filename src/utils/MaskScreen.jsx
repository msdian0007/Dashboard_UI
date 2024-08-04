import React from "react";

export const MaskScreen = ({ isOpenSideModal }) => {
  return (
    <div
      className={`${
        isOpenSideModal ? "block lg:hidden " : "hidden"
      } fixed inset-0 top-0 z-20 h-screen bg-black/70`}
    ></div>
  );
};
