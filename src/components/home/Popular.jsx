import React from "react";
import { PopularListCard } from "./modules/PopularListCard";
import { popularList } from "../../constants";

const Popular = () => {
  return (
    <div className="grid items-center h-full">
      <div className="grid gap-3 ">
        {popularList.map((l) => {
          return <PopularListCard key={l.id} info={l} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
