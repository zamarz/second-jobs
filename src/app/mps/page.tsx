"use client";
import { useEffect, useState } from "react";
import { getMPs } from "../utils/firebase";

const Mps = () => {
  const [mpData, setMPData] = useState<Array<{
    id: String;
    data: any;
  }> | null>(null);

  useEffect(() => {
    const fetchMPs = async () => {
      const mpList = await getMPs();
      setMPData(mpList);
    };
    fetchMPs();
  }, []);

  console.log(mpData);

  return (
    <section className="min-h-screen px-10 py-10 mx-auto container">
      <div className="flex flex-col text-center justify-center items-center py-10">
        Find an MP by their last name
      </div>
    </section>
  );
};

export default Mps;
