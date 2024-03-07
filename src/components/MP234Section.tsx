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
    <div>
      <h4 className="font-bold text-xl text-center py-3">
        {interestInfo.name}
      </h4>
      <div>
        {interestInfo.interests.map((secondJob: any) => {
          valueAggregator(secondJob, valuesArray);
          return <MP234Analysis id={secondJob.id} secondJob={secondJob} />;
        })}
      </div>
      <div className="text-center text-xl font-bold py-3 mx-auto">
        Total Value: £{values}
      </div>
    </div>
  );
};

export default MP234Section;
