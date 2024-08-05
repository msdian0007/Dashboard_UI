import { Input } from "antd";
import React from "react";
import { GoSearch } from "react-icons/go";

export const SearchBar = () => {
  return (
    <div className="my-auto">
      <Input
        className="dark:bg-[--bg-l] dark:text-[--title] bg-[--desc] border-0 lg:h-6 h-8 py-1"
        placeholder=""
        prefix={<GoSearch />}
      />
    </div>
  );
};
