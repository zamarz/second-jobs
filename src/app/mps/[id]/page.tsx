"use client";

import Error from "@/app/error";
import { getMPExpenses, getMPById } from "@/app/utils/api";
import MPCardIDPage from "@/components/MPCardIDPage";
import MPInterestCard from "@/components/MPExpenses";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const MPExpensesPage = () => {
  const params = useParams<{ id: string }>();
  const [singleMPData, setsingleMPData] = useState<Array<any> | null>(null);
  const [MPInterestData, setMPInterestData] = useState(null);

  const [totalEarnings, setTotalEarnings] = useState(0);

  const updateTotalEarnings = (value: number) => {
    setTotalEarnings((prevTotal) => prevTotal + value);
  };

  const [error, setError] = useState(false);

  useEffect(() => {
    getMPById(params.id)
      .then((data: any) => {
        setsingleMPData(data);
      })
      .catch((err: any) => {
        setError(true);
      });
    getMPExpenses(params.id)
      .then((data: any) => {
        setMPInterestData(data);
      })
      .catch((err: any) => {
        console.log(err, "err2");
      });
  }, []);

  if (error) {
    return <Error />;
  }

  return (
    <section>
      <div>
        <div>
          <MPCardIDPage
            key={singleMPData?.value.id}
            mpInfo={singleMPData?.value}
          />
        </div>
        <div className="flex flex-col items-center pb-7 mx-auto mb-4">
          <h2 className="text-3xl">
            Approximate total:{" "}
            <span className="font-bold">£{totalEarnings}</span>
          </h2>
        </div>
        <div>
          <MPInterestCard
            mpInterestInfo={MPInterestData}
            updateTotalEarnings={updateTotalEarnings}
          />
        </div>
      </div>
    </section>
  );
};

export default MPExpensesPage;
