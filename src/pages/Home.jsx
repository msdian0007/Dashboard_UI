import { Spin } from "antd";
import React, { Suspense } from "react";
import { Spinner } from "../utils/Spinner";

const TotalList = React.lazy(() => import("../components/home/TotalList"));
const NetProfit = React.lazy(() => import("../components/home/NetProfit"));
const RecentOrders = React.lazy(() =>
  import("../components/home/RecentOrders")
);
const CustomersFeedback = React.lazy(() =>
  import("../components/home/CustomersFeedback")
);
const Popular = React.lazy(() => import("../components/home/Popular"));
const Activity = React.lazy(() => import("../components/home/Activity"));

const Home = () => {
  return (
    <div className="grid grid-cols-10 gap-4 px-[16px] py-4 ">
      <div className="col-span-10 bg-transparent dark:text-[--title] sun">
        Dashboard
      </div>
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </div>
  );
};

export default Home;
