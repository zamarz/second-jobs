"use client";
import { useEffect, useState } from "react";
import MPChildInterestAnalysis from "./MPChildInterestAnalysis";
import {
  earningsAggregator,
  hoursAggregator,
  sumEarnings,
  sumHours,
} from "@/app/utils/functions";
import { Interest, UpdateTotalEarnings, ValueExpense } from "@/app/types/types";

type Props = {
  earningsInfo: ValueExpense;
  updateTotalEarnings: UpdateTotalEarnings;
};

const MPEmploymentEarnings = ({ earningsInfo, updateTotalEarnings }: Props) => {
  const [earnings, setEarnings] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);

  let earningsArray: Array<string> = ["0"];
  let hoursArray: Array<string> = ["0"];

  useEffect(() => {
    sumEarnings(earningsArray, setEarnings);
    sumHours(hoursArray, setHours);
  }, [earningsArray, hoursArray]);

  useEffect(() => {
    updateTotalEarnings(earnings);
  }, [earnings]);
  console.log(earningsArray);

  return (
    <div>
      <h4 className="font-bold text-3xl py-3 mx-auto text-center">
        {earningsInfo.name}
      </h4>
      <div className="py-3 mx-auto">
        {earningsInfo.interests.map((secondJob: Interest) => {
          earningsAggregator(secondJob, earningsArray);
          hoursAggregator(secondJob, hoursArray);
          return (
            <div key={secondJob.id}>
              <h3 className="font-semibold mx-auto py-3 text-center text-xl text-balance underline bg-tertiary-alt">
                {secondJob.interest}
              </h3>
              <br></br>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 py-6 mx-auto px-5">
                {secondJob.childInterests.length > 0 ? (
                  secondJob.childInterests.map((childInterest: Interest) => {
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
        <div className="text-3xl py-5 text-center border-primary border-4 mx-auto w-1/2 rounded border-solid hover:border-double shadow-xl bg-tertiary-alt">
          <div className="py-2 mx-auto">
            <span className="font-semibold">Total Value:</span> £{earnings}
          </div>
          <div className="py-2 mx-auto">
            <span className="font-semibold">Total Hours:</span> {hours}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MPEmploymentEarnings;
