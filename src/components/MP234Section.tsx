"use client";

import { useEffect, useState } from "react";
import MP234Analysis from "./MP234Analysis";
import { valueAggregator, valueSum } from "@/app/utils/functions";
import { Interest, UpdateTotalEarnings, ValueExpense } from "@/app/types/types";

type Props = {
  interestInfo: ValueExpense;
  updateTotalEarnings: UpdateTotalEarnings;
};

const MP234Section = ({ interestInfo, updateTotalEarnings }: Props) => {
  const [values, setValues] = useState<number>(0);

  let valuesArray: Array<string> = ["0"];

  useEffect(() => {
    valueSum(valuesArray, setValues);
  }, [valuesArray]);

  useEffect(() => {
    updateTotalEarnings(values);
  }, [values]);

  return (
    <div className="py-3">
      <h4 className="font-bold text-3xl text-center py-3 mx-auto">
        {interestInfo.name}
      </h4>
      <div className="py-3 mx-auto grid grid-cols-1 lg:grid-cols-3 px-4 gap-4">
        {interestInfo.interests.map((secondJob: Interest) => {
          valueAggregator(secondJob, valuesArray);
          return <MP234Analysis key={secondJob.id} secondJob={secondJob} />;
        })}
      </div>
      <div className="text-center text-2xl py-3 mx-auto w-1/2 rounded border-4 border-primary bg-tertiary-alt dark:bg-tertiary-alt/70 border-solid hover:border-double shadow-xl">
        <span className="font-bold">Total Value:</span> £{values}
      </div>
    </div>
  );
};

export default MP234Section;
