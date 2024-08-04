import React from "react";
import { useHelper } from "../../../hooks/useHelper";
import { Avatar } from "antd";

export const FeedbackCard = ({ info }) => {
  const { getProfileInitials, getUserRatings } = useHelper();
  return (
    <div className="grid border-b-[1px] border-[--bg-l] py-3 gap-2">
      <div className="flex items-center gap-2">
        <Avatar className="bg-slate-600" size={'default'}>{getProfileInitials(info?.customerName)}</Avatar>
        <span className="">{info?.customerName}</span>
      </div>
      <div className="flex gap-1">{getUserRatings(info?.rating)}</div>
      <div className="text-xs text-[--desc-l]">{info?.feedback}</div>
    </div>
  );
};
