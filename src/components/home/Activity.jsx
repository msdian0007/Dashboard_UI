import React, { useState } from "react";
import { BarChart } from "../../charts/BarChart";
import { FaCaretDown } from "react-icons/fa";
import { Dropdown } from "antd";
import { barChartData, barChartOptions } from "../../constants";

const items = [
  {
    label: "weekly",
    key: "1",
  },
  {
    label: "monthly",
    key: "2",
  },
];

export const Activity = () => {
  const [options, setOptions] = useState(items[0]?.label);
  const onClick = ({ key }) => {
    setOptions(items.filter((i) => i.key === key)[0]?.label);
  };
  return (
    <div>
      <div className="flex justify-between">
        <span className="text-lg font-bold">Activity</span>
        <Dropdown
          menu={{
            items,
            onClick,
          }}
        >
          <span className="flex items-center gap-2 bg-[--bg-l] px-2 rounded-full text-xs h-5">
            {options}
            <FaCaretDown />
          </span>
        </Dropdown>
      </div>
      <BarChart
        data={options === "weekly" ? barChartData.weekly : barChartData.monthly}
        options={barChartOptions}
      />
    </div>
  );
};
