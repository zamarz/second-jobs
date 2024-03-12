"use client";

import { useEffect, useState } from "react";
import MP234Analysis from "./MP234Analysis";
import { valueAggregator, valueSum } from "@/app/utils/functions";

const MP234Section = ({ interestInfo }: any) => {
  const [values, setValues] = useState(0);

  let valuesArray: any = ["0"];

  useEffect(() => {
    valueSum(valuesArray, setValues);
  }, [valuesArray]);

  return (
    <div className="py-3">
      <h4 className="font-bold text-3xl text-center py-3 mx-auto">
        {interestInfo.name}
      </h4>
      <div className="py-3 mx-auto grid grid-cols-1 lg:grid-cols-3 px-4 gap-4">
        {interestInfo.interests.map((secondJob: any) => {
          valueAggregator(secondJob, valuesArray);
          return <MP234Analysis id={secondJob.id} secondJob={secondJob} />;
        })}
      </div>
      <div className="text-center text-2xl py-3 mx-auto bg-tertiary-dark w-1/3 outline">
        <span className="font-bold">Total Value:</span> £{values}
      </div>
    </div>
  );
};

export default MP234Section;
