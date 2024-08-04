import React from "react";
import { useHelper } from "../../hooks/useHelper";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const NetProfit = () => {
  const { getProfitOrLoss } = useHelper();
  const percentage = 77;

  return (
    <div className="flex justify-between h-full">
      <div className="grid text-left grid-col-3">
        <div className="text-[12px] font-semibold text-[--desc]">
          Net Profit
        </div>
        <div className="content-center text-3xl font-semibold">2450</div>
        <div className="flex !justify-start text-[12px] font-semibold">
          {getProfitOrLoss(false, 4)}
        </div>
      </div>
      <div className="h-auto my-auto text-center">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          strokeWidth={"12"}
          styles={buildStyles({
            textColor: "#ffff",
            pathColor: "#5356FF",
            trailColor: "#BBE9FF",
          })}
          className=" max-h-[75px]"
        />
        <span className="text-[9px] text-[--desc-l]">the value here has been rounded off</span>
      </div>
    </div>
  );
};
