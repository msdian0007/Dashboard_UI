import React from "react";
import { useHelper } from "../../../hooks/useHelper";

export const TotalListCard = ({ info }) => {
  const { getProfitOrLoss, getTotalCount, getFormattedCurrency } = useHelper();
  return (
    <div className="grid grid-cols-2 md:col-span-1 col-span-2 p-4 rounded-md dark:bg-[--bg] dark:text-[--title] sun w-full">
      <div className="flex col-span-2">
        <div
          className={`${info?.css} p-2 text-3xl text-blue-500 rounded-md bg-blue-500/20`}
        >
          {info.icon}
        </div>
      </div>
      <div className="col-span-2 dark:text-[--desc] text-[12px] font-semibold mt-1  tracking-wide">
        {info.title}
      </div>
      <div className="flex justify-between col-span-2 mt-2">
        <span className="flex items-end text-3xl font-bold">
          {getTotalCount(getFormattedCurrency(info?.count), info?.countInRupees)}
        </span>
        <div className="content-end text-[12px] font-semibold ">
          {getProfitOrLoss(info?.inProfit, info?.profitPercentage)}
        </div>
      </div>
    </div>
  );
};
