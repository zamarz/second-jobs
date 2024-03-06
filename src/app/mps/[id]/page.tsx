"use client";

import { getMPExpenses, getMPById } from "@/app/utils/api";
import MPCard from "@/components/MPCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const MPExpensesPage = () => {
  const params = useParams<{ id: string }>();
  const [singleMPData, setsingleMPData] = useState<Array<any> | null>(null);
  const [MPExpensesData, setMPExpensesData] = useState(null);

  useEffect(() => {
    getMPById(params.id)
      .then((data: any) => {
        setsingleMPData(data);
      })
      .catch((err: any) => {
        console.log(err);
      });
    getMPExpenses(params.id)
      .then((data: any) => {
        setMPExpensesData(data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  //might need to make two calls to the api here, one for member info too

  console.log(MPExpensesData);
  return (
    <section>
      <div>
        <div className="flex">
          <MPCard key={singleMPData?.value.id} mpInfo={singleMPData?.value} />;
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default MPExpensesPage;
