import React from "react";
import { FeedbackCard } from "./modules/FeedbackCard";
import { customerFeedback } from "../../constants";

const CustomersFeedback = () => {
  return (
    <div className="pt-4">
      <span className="mb-4 text-lg font-bold">Customers Feedback</span>
      <div className="overflow-auto max-h-[325px] pb-4">
        {customerFeedback.map((f) => {
          return <FeedbackCard key={f.id} info={f} />;
        })}
      </div>
    </div>
  );
};

export default CustomersFeedback