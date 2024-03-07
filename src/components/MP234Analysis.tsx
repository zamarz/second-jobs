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
    <div className="py-2 mx-7 items-center text-center">
      <div className="py-2 mx-auto">
        {" "}
        <h3>{secondJob.interest}</h3>
        <p className="font-semibold">Value: £{values}</p>
      </div>
    </div>
  );
};

export default MP234Analysis;
