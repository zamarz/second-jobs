"use client";

import { Interest } from "@/app/types/types";
import { valueAggregator, valueSum } from "@/app/utils/functions";
import { useEffect, useState } from "react";

const MP234Analysis = ({ secondJob }: { secondJob: Interest }) => {
  const [values, setValues] = useState<number>(0);

  let valuesArray: Array<string> = ["0"];

  useEffect(() => {
    valueSum(valuesArray, setValues);
  }, [valuesArray]);

  valueAggregator(secondJob, valuesArray);

  return (
    <div className="py-2 mx-auto text-center text-xl text-balance w-full border-2 border-secondary rounded bg-tertiary-light/40">
      <div className="py-2 px-4 mx-auto">
        {" "}
        <h3 className="py-2 px-2">{secondJob.interest}</h3>
        <p className="py-2 mx-auto">
          <span className="font-semibold">Value:</span> £{values}
        </p>
      </div>
    </div>
  );
};

export default MP234Analysis;
