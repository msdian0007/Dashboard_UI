import { Spin } from "antd";
import React from "react";

export const Spinner = () => {
  return (
    <div className="fixed inset-0 z-50 h-screen">
      <div className="flex items-center justify-center h-screen">
        <Spin size="large"/>
      </div>
    </div>
  );
};
