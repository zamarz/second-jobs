"use client";
import { useEffect, useState } from "react";
import MPChildInterestAnalysis from "./MPChildInterestAnalysis";

const MPEmploymentEarnings = ({ earningsInfo }: any) => {
  const [earnings, setEarnings] = useState(0);
  const [arrayEarnings, setArrayEarnings] = useState([]);
  const [hours, setHours] = useState(0);

  let earningsArray: any = [];

  useEffect(() => {
    sumEarnings(earningsArray);
  }, [earningsArray]);

  const sumEarnings = (earningsArray: any) => {
    const newEarnings = earningsArray.map((earning: any) => {
      return parseFloat(earning.replace(/,/g, ""));
    });

    const addEarnings = newEarnings.reduce((a: number, b: number) => a + b);

    setEarnings(addEarnings);
  };

  return (
    <div>
      <h4 className="font-bold text-xl py-3 mx-auto text-center">
        {earningsInfo.name}
      </h4>
      <div className="text-center py-3 mx-auto">
        {earningsInfo.interests.map((secondJob: any) => {
          return (
            <div>
              <h3 className="font-semibold mx-auto py-3">
                {secondJob.interest}
              </h3>

              {secondJob.childInterests.length > 0 ? (
                secondJob.childInterests.map((childInterest: any) => {
                  const regexAmount = /£([\d,]+)/g;
                  const priceEarnings =
                    childInterest.interest.match(regexAmount);
                  const removePound = priceEarnings[0].slice(
                    1,
                    priceEarnings[0].length
                  );

                  earningsArray.push(removePound);
                  return (
                    <MPChildInterestAnalysis
                      key={childInterest.id}
                      childInterestInfo={childInterest}
                      setArrayEarnings={setArrayEarnings}
                      arrayEarnings={arrayEarnings}
                    />
                  );
                })
              ) : (
                <></>
              )}
              <div> Earnings: 0</div>
              <div> Hours: 0</div>
            </div>
          );
        })}
        <div className="text-xl py-5">
          <div>Total Earnings: £{earnings}</div>
          <div>Total Hours: 0</div>
        </div>
      </div>
    </div>
  );
};

export default MPEmploymentEarnings;
