"use client";
import { useEffect, useState } from "react";
import MPChildInterestAnalysis from "./MPChildInterestAnalysis";
import {
  earningsAggregator,
  hoursAggregator,
  sumEarnings,
  sumHours,
} from "@/app/utils/functions";

const MPEmploymentEarnings = ({ earningsInfo, updateTotalEarnings }: any) => {
  const [earnings, setEarnings] = useState(0);
  const [hours, setHours] = useState(0);

  let earningsArray: any = ["0"];
  let hoursArray: any = ["0"];

  useEffect(() => {
    sumEarnings(earningsArray, setEarnings);
    sumHours(hoursArray, setHours);
    // updateTotalEarnings(earnings);
  }, [earningsArray, hoursArray]);

  useEffect(() => {
    updateTotalEarnings(earnings);
  }, [earnings]);

  return (
    <div>
      <h4 className="font-bold text-3xl py-3 mx-auto text-center">
        {earningsInfo.name}
      </h4>
      <div className="py-3 mx-auto">
        {earningsInfo.interests.map((secondJob: any) => {
          earningsAggregator(secondJob, earningsArray);
          hoursAggregator(secondJob, hoursArray);
          return (
            <div>
              <h3 className="font-semibold mx-auto py-3 text-center text-xl text-balance underline bg-tertiary-light">
                {secondJob.interest}
              </h3>
              <br></br>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 py-6 mx-auto px-5">
                {secondJob.childInterests.length > 0 ? (
                  secondJob.childInterests.map((childInterest: any) => {
                    earningsAggregator(childInterest, earningsArray);
                    hoursAggregator(childInterest, hoursArray);
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
            </div>
          );
        })}
        <div className="text-3xl py-5 text-center bg-tertiary-dark outline mx-auto w-1/2">
          <div className="py-2 mx-auto">
            <span className="font-bold">Total Earnings:</span> £{earnings}
          </div>
          <div className="py-2 mx-auto">
            <span className="font-bold">Total Hours:</span> {hours}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MPEmploymentEarnings;
