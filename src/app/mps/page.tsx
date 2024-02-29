"use client";
import { useEffect, useState } from "react";
import { getMPs } from "../utils/api";
import MPCard from "@/components/MPCard";

const Mps = () => {
  const [mpData, setMPData] = useState<Array<any> | null>(null);

  useEffect(() => {
    getMPs()
      .then((data: any) => {
        setMPData(data.items);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  console.log(mpData);

  return (
    <section className="min-h-screen px-10 py-10 mx-auto container">
      <div className="flex flex-col text-center justify-center items-center py-10">
        Find an MP by their last name (?) May need to use the search api to
        define a MP. What you see below are examples
      </div>

      <div className="flex flex-wrap py-3">
        {mpData?.map((mp: any) => {
          return <MPCard key={mp.value.id} mpInfo={mp.value} />;
        })}
      </div>
    </section>
  );
};

export default Mps;
