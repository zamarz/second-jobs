"use client";

import { getMPExpenses } from "@/app/utils/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const MPExpensesPage = () => {
  const params = useParams<{ id: string }>();

  const [MPExpensesData, setMPExpensesData] = useState(null);

  useEffect(() => {
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

  return <div>page</div>;
};

export default MPExpensesPage;
