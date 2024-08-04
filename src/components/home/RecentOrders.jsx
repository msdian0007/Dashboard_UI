import { Table, Tag } from "antd";
import React from "react";
import { recentOrders } from "../../constants";

const columns = [
  {
    title: "CustomerName",
    key: "id",
    dataIndex: "customerName",
  },
  {
    title: "OrderNo",
    key: "id",
    dataIndex: "orderNo",
  },
  {
    title: "Amount",
    key: "id",
    dataIndex: "amount",
  },
  {
    title: "Status",
    key: "id",
    dataIndex: "status",
    render: (_, record) => {
      if (record.status === 1) {
        return <Tag color="green">Delivered</Tag>;
      } else if (record.status === 2) {
        return <Tag color="orange">Pending</Tag>;
      } else {
        return <Tag color="red">Canceled</Tag>;
      }
    },
  },
];

const RecentOrders = () => {
  return (
    <div className="pt-4 ">
      <span className="pb-2 text-lg font-bold">Recent Orders</span>
      <div className="overflow-x-scroll max-h-[325px]">
        <Table
          dataSource={recentOrders}
          columns={columns}
          expandable={true}
          className=""
          // style={{borderRadius:'0%'}}
          rowClassName={"dark:bg-[--bg] dark:text-[--desc] hover:text-[--bg] "}
        />
      </div>
    </div>
  );
};

export default RecentOrders;
