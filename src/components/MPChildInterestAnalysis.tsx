"use client";

import { useEffect, useState } from "react";

const MPChildInterestAnalysis = ({ childInterestInfo }: any) => {
  console.log(childInterestInfo, "childinterestinfo");

  const [childInterestEarnings, setChildInterestEarnings] = useState(0);

  let childInterestEarningsArray: any = [];

  useEffect(() => {
    sumEarnings(childInterestEarningsArray);
  }, [childInterestEarningsArray]);

  const sumEarnings = (childInterestEarningsArray: any) => {
    const newEarnings = childInterestEarningsArray.map((earning: any) => {
      return parseFloat(earning.replace(/,/g, ""));
    });

    const addEarnings = newEarnings.reduce((a: number, b: number) => a + b);

    setChildInterestEarnings(addEarnings);
  };

  const regexAmount = /£([\d,]+)/g;
  const priceEarnings = childInterestInfo.interest.match(regexAmount);
  const removePound = priceEarnings[0].slice(1, priceEarnings[0].length);
  childInterestEarningsArray.push(removePound);

  return (
    <div>
      <div className="py-2 mx-auto">
        <div>{childInterestInfo.interest}</div>
        <div>Earnings: £{childInterestEarnings}</div>
      </div>
    </div>
  );
};

export default MPChildInterestAnalysis;
