"use client";

import { valueAggregator, valueSum } from "@/app/utils/functions";
import { useEffect, useState } from "react";

const MP234Analysis = ({ secondJob }: any) => {
  const [values, setValues] = useState(0);

  let valuesArray: any = ["0"];

  useEffect(() => {
    valueSum(valuesArray, setValues);
  }, [valuesArray]);

  valueAggregator(secondJob, valuesArray);

  return (
    <div className="py-2 mx-auto text-center text-xl text-balance w-full outline">
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
