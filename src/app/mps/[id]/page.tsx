"use client";

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
        setMPInterestData(data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  return (
    <section>
      <div>
        <div>
          <MPCardIDPage
            key={singleMPData?.value.id}
            mpInfo={singleMPData?.value}
          />
        </div>
        <div className="flex flex-col items-center text-center">
          {MPInterestData?.value.map((interest: string) => {
            return (
              <div>
                <h2>{interest.name}</h2>
              </div>
            );
          })}
        </div>
        <div>
          <h2>Approximate total earnings: £{totalEarnings}</h2>
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
