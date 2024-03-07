"use client";

import { useEffect, useState } from "react";
import {
  earningsAggregator,
  hoursAggregator,
  sumEarnings,
  sumHours,
} from "../app/utils/functions";

const MPChildInterestAnalysis = ({ childInterestInfo }: any) => {
  console.log(childInterestInfo, "childinterestinfo");

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
      <div className="py-2 mx-auto">
        <div>{childInterestInfo.interest}</div>
        <div>Earnings: £{childInterestEarnings}</div>
        <div>Hours: {childInterestHours}</div>
      </div>
    </div>
  );
};

export default MPChildInterestAnalysis;
