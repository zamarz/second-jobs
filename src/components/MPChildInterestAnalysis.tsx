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
    <div className="mx-auto w-full outline py-2 rounded bg-tertiary-light/40">
      <div className="py-2 mx-auto text-center text-xl text-balance">
        <div className="py-2 mx-auto">{childInterestInfo.interest}</div>
        <div className="py-1 mx-auto text-2xl ">
          <span className="font-bold">Value:</span> £{childInterestEarnings}
        </div>
        <div className="py-1 mx-auto text-2xl ">
          <span className="font-bold">Hours:</span> {childInterestHours}
        </div>
      </div>
    </div>
  );
};

export default MPChildInterestAnalysis;
