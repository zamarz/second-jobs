"use client";
import { useEffect, useState } from "react";
import { getPracticeMPs, getMPs } from "../utils/api";

const Mps = () => {
  const [mpData, setMPData] = useState<Array<{
    id: String;
    data: any;
  }> | null>(null);

  useEffect(() => {
    getMPs()
      .then((data) => {
        setMPData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   const fetchMPs = async () => {
  //     const mpList = await getPracticeMPs();
  //     setMPData(mpList);
  //   };
  //   fetchMPs();
  // }, []);

  // useEffect(() => {
  //   const fetchMPs = async () => {
  //     const mpList = await getMPs();
  //     setMPData(mpList);
  //   };
  //   fetchMPs();
  // }, []);

  console.log(mpData);

  return (
    <section className="min-h-screen px-10 py-10 mx-auto container">
      <div className="flex flex-col text-center justify-center items-center py-10">
        Find an MP by their last name
      </div>

      <div>
        MPs will be shown here in flex or with little letters in each section
        depending on their surname
      </div>
    </section>
  );
};

export default Mps;
