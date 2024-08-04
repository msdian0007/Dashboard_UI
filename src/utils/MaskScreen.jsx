import React from "react";

export const MaskScreen = ({ isOn }) => {
  return (
    <div
      className={`${
        isOn ? "block lg:hidden " : "hidden"
      } fixed inset-0 top-[60px] z-20 h-[calc(100vh-60px)] bg-black/70`}
    ></div>
  );
};
