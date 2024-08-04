import React from "react";
import { TotalListCard } from "./modules/TotalListCard";
import { totalCardsInfo } from "../../constants";

const TotalList = () => {
  return (
    <div className="grid grid-cols-4 gap-4 ">
      {totalCardsInfo.map((i) => {
        return <TotalListCard key={i.id} info={i} />;
      })}
    </div>
  );
};

export default TotalList
