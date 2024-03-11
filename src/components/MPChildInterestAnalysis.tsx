"use client";

import { useEffect, useState } from "react";
import {
  earningsAggregator,
  hoursAggregator,
  sumEarnings,
  sumHours,
} from "../app/utils/functions";

const MPChildInterestAnalysis = ({ childInterestInfo }: any) => {
  const [childInterestEarnings, setChildInterestEarnings] = useState(0);
  const [childInterestHours, setChildInterestHours] = useState(0);

  let childInterestEarningsArray: any = [];
  let childInterestHoursArray: any = ["0"];

  useEffect(() => {
    sumEarnings(childInterestEarningsArray, setChildInterestEarnings);
    sumHours(childInterestHoursArray, setChildInterestHours);
  }, [childInterestEarningsArray, childInterestHoursArray]);

  earningsAggregator(childInterestInfo, childInterestEarningsArray);
  hoursAggregator(childInterestInfo, childInterestHoursArray);
  // grid grid-cols-2 lg:grid-cols-3 gap-4
  return (
    <div className="mx-auto w-full md:w-2/3 lg:w-2/3 grid grid-cols-3 gap-4">
      <div className=" ">
        <div className="py-2 mx-auto text-center text-xl text-balance">
          <div className="py-2 mx-auto">{childInterestInfo.interest}</div>
          <div className="py-2 mx-auto">
            <span className="font-bold">Earnings:</span> £
            {childInterestEarnings}
          </div>
          <div className="py-2 mx-auto">
            <span className="font-bold">Hours:</span> {childInterestHours}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MPChildInterestAnalysis;
