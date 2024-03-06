"use client";
import { useState } from "react";
import MPChildInterestAnalysis from "./MPChildInterestAnalysis";

const MPEmploymentEarnings = ({ earningsInfo }: any) => {
  const [earnings, setEarnings] = useState(0);
  const [hours, setHours] = useState(0);

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
              <div> Earnings: 0</div>
              <div> Hours: 0</div>
            </div>
          );
        })}
        <div className="text-xl py-5">
          <div>Total Earnings: 0</div>
          <div>Total Hours: 0</div>
        </div>
      </div>
    </div>
  );
};

export default MPEmploymentEarnings;
