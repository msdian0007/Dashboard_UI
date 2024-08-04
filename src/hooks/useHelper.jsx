import React from "react";
import { FaCaretDown, FaCaretUp, FaStar } from "react-icons/fa";

export const useHelper = () => {
  return {
    getProfitOrLoss: (isProfit, percentage) => {
      return (
        <>
          <div className="flex items-center justify-end gap-1">
            {isProfit ? (
              <FaCaretUp className="text-green-600" />
            ) : (
              <FaCaretDown className="text-red-600" />
            )}
            <span>{percentage}%</span>
          </div>
        </>
      );
    },
    getProfileInitials: (name) => {
      let initials;
      let names = name?.split(" ");
      initials =
        names?.length > 1
          ? names[0]?.charAt(0) + names[1]?.charAt(0)
          : names[0]?.charAt(0);
      return initials;
    },
    getUserRatings: (rating) => {
      const res = [1, 2, 3, 4, 5].map((c, i) => {
        if (i < rating) {
          return (
            <span key={i} className="text-yellow-400">
              <FaStar />
            </span>
          );
        } else {
          return (
            <span key={i} className="text-white">
              <FaStar />
            </span>
          );
        }
      });
      return res;
    },
  };
};
