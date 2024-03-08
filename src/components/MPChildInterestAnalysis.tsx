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

  return (
    <div>
      <div className="py-2 mx-auto text-center text-xl text-balance">
        <div className="py-2 mx-auto">{childInterestInfo.interest}</div>
        <div className="py-2 mx-auto">
          <span className="font-bold">Earnings:</span> £{childInterestEarnings}
        </div>
        <div className="py-2 mx-auto">
          <span className="font-bold">Hours:</span> {childInterestHours}
        </div>
      </div>
    </div>
  );
};

export default MPChildInterestAnalysis;
