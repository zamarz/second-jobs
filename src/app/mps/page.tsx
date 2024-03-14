"use client";
import { useEffect, useState } from "react";
import { getMPBySurnameStart, getMPs } from "../utils/api";
import MPCard from "@/components/MPCard";
import Loading from "../loading";

const Mps = () => {
  const [mpData, setMPData] = useState<Array<any> | null>(null);
  const [loading, setLoading] = useState(false);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  useEffect(() => {
    setLoading(true);
    getMPs()
      .then((data: any) => {
        setMPData(data.items);
      })
      .catch((err: any) => {
        console.log(err);
      });
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const handleClick = (letter: string) => {
    setLoading(true);
    getMPBySurnameStart(letter)
      .then((data: any) => {
        setMPData(data.items);
      })
      .catch((err: any) => {
        console.log(err);
      });
    setLoading(false);
  };

  return (
    <section className="min-h-screen px-10 py-10 mx-auto container">
      <div className="flex flex-col text-center justify-center items-center py-10">
        Find an MP by their last name (?) May need to use the search api to
        define a MP. What you see below are examples
      </div>

      <div>
        <p>See Members by surname</p>
        {alphabet.map((letter: string) => (
          <button key={letter} onClick={() => handleClick(letter)}>
            {letter}
          </button>
        ))}
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
