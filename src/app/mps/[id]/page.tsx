"use client";

import { MPData, MPExpensesData, UpdateTotalEarnings } from "@/app/types/types";
import { getMPExpenses, getMPById } from "@/app/utils/api";
import MPCardIDPage from "@/components/MPCardIDPage";
import MPInterestCard from "@/components/MPExpenses";
import Error from "next/error";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const MPExpensesPage = () => {
  const params = useParams<{ id: string }>();
  const [singleMPData, setsingleMPData] = useState<MPData | null>(null);

  const [MPInterestData, setMPInterestData] = useState<MPExpensesData | null>(
    null
  );

  const [totalEarnings, setTotalEarnings] = useState<number>(0);

  const updateTotalEarnings: UpdateTotalEarnings = (value: number) => {
    setTotalEarnings((prevTotal) => prevTotal + value);
  };

  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getMPById(params.id)
      .then((data: MPData) => {
        setsingleMPData(data);
      })
      .catch((err: Error) => {
        console.log(err);
        setError(true);
      });
    getMPExpenses(params.id)
      .then((data: MPExpensesData) => {
        setMPInterestData(data);
      })
      .catch((err: Error | undefined) => {
        console.log(err, "err2");
      });
  }, []);

  // if (error) {
  //   console.log(error);
  //   // return <Error />;
  // }

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
