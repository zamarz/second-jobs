"use client";

import { useEffect, useState } from "react";
import { earningsAggregator, sumEarnings } from "../app/utils/functions";

const MPChildInterestAnalysis = ({ childInterestInfo }: any) => {
  console.log(childInterestInfo, "childinterestinfo");

  const [childInterestEarnings, setChildInterestEarnings] = useState(0);

  let childInterestEarningsArray: any = [];

  useEffect(() => {
    sumEarnings(childInterestEarningsArray, setChildInterestEarnings);
  }, [childInterestEarningsArray]);

  earningsAggregator(childInterestInfo, childInterestEarningsArray);

  return (
    <div>
      <div className="py-2 mx-auto">
        <div>{childInterestInfo.interest}</div>
        <div>Earnings: £{childInterestEarnings}</div>
        <div>Hours: </div>
      </div>
    </div>
  );
};

export default MPChildInterestAnalysis;
