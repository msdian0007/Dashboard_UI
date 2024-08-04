import React from "react";
import { Navbar } from "../layout/Navbar";
import { TotalList } from "../components/home/TotalList";
import { NetProfit } from "../components/home/NetProfit";
import { RecentOrders } from "../components/home/RecentOrders";
import { CustomersFeedback } from "../components/home/CustomersFeedback";
import { Popular } from "../components/home/Popular";
import { Activity } from "../components/home/Activity";

export const Home = () => {
  return (
    <div className="grid grid-cols-10 gap-4 px-[16px] py-4 ">
      <div className="col-span-10 bg-transparent dark:text-[--title] sun">
        Dashboard
      </div>
      <div className="col-span-10 lg:col-span-6">
        <TotalList />
      </div>
      <div className="col-span-10 lg:col-span-4 dark:bg-[--bg] dark:text-[--title] sun rounded-md p-4">
        <NetProfit />
      </div>
      <div className="col-span-10 lg:col-span-6 dark:bg-[--bg] dark:text-[--title] sun rounded-md p-4">
        <Activity />
      </div>
      <div className="col-span-10 lg:col-span-4 dark:bg-[--bg] dark:text-[--title] sun rounded-md p-4">
        <Popular />
      </div>
      <div className="col-span-10 lg:col-span-6 dark:bg-[--bg] dark:text-[--title] sun rounded-md px-4">
        <RecentOrders />
      </div>
      <div className="col-span-10 lg:col-span-4 dark:bg-[--bg] dark:text-[--title] sun rounded-md px-4">
        <CustomersFeedback />
      </div>
    </div>
  );
};
