import React from "react";
import { LuWallet } from "react-icons/lu";

export const Wallet = () => {
  return (
    <div className="flex justify-center h-[calc(100vh-60px)] items-center ">
      <span className="text-[--desc] text-blue-500 text-5xl">
        <LuWallet />
      </span>
    </div>
  );
};
