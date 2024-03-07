"use client";
import { useEffect, useState } from "react";
import MPChildInterestAnalysis from "./MPChildInterestAnalysis";
import { earningsAggregator, sumEarnings } from "@/app/utils/functions";

const MPEmploymentEarnings = ({ earningsInfo }: any) => {
  const [earnings, setEarnings] = useState(0);
  const [hours, setHours] = useState(0);

  let earningsArray: any = ["0"];

  useEffect(() => {
    sumEarnings(earningsArray, setEarnings);
  }, [earningsArray]);

  return (
    <div>
      <h4 className="font-bold text-xl py-3 mx-auto text-center">
        {earningsInfo.name}
      </h4>
      <div className="text-center py-3 mx-auto">
        {earningsInfo.interests.map((secondJob: any) => {
          earningsAggregator(secondJob, earningsArray);
          return (
            <div>
              <h3 className="font-semibold mx-auto py-3">
                {secondJob.interest}
              </h3>

              {secondJob.childInterests.length > 0 ? (
                secondJob.childInterests.map((childInterest: any) => {
                  earningsAggregator(childInterest, earningsArray);

                  return (
                    <MPChildInterestAnalysis
                      key={childInterest.id}
                      childInterestInfo={childInterest}
                    />
                  );
                })
              ) : (
                <></>
              )}
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
