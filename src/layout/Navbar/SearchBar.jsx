import { Input } from "antd";
import React from "react";
import { GoSearch } from "react-icons/go";

export const SearchBar = () => {
  return (
    <div className="my-auto">
      <Input
        className="dark:bg-[--bg-l] dark:text-[--title] border-0 h-6 py-1"
        placeholder=""
        prefix={<GoSearch />}
      />
    </div>
  );
};
