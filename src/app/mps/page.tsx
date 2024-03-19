"use client";
import { useEffect, useState } from "react";
import { getMPBySurnameStart } from "../utils/api";
import MPCard from "@/components/MPCard";
import Loading from "../loading";
import { GetMPData, MPData } from "../types/types";

const Mps = () => {
  const [mpData, setMPData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  useEffect(() => {
    setLoading(true);
    getMPBySurnameStart("A")
      .then((data: GetMPData) => {
        setMPData(data.items);
      })
      .catch((err: Error) => {
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
      .then((data: GetMPData) => {
        setMPData(data.items);
      })
      .catch((err: Error) => {
        console.log(err);
      });
    setLoading(false);
  };

  return (
    <section className="min-h-screen px-10 py-10 mx-auto container">
      <div className="text-center justify-center items-center py-5 ">
        <p className="text-2xl py-2 pb-3">View Members by surname</p>
        <div className="flex flex-row gap-2 flex-wrap md:flex-nowrap">
          {alphabet.map((letter: string) => (
            <button
              className="buttonAZ"
              key={letter}
              onClick={() => handleClick(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap py-3 justify-center">
        {mpData.length > 0 ? (
          mpData?.map((mp: MPData) => {
            return <MPCard key={mp.value.id} mpInfo={mp.value} />;
          })
        ) : (
          <div className="py-5 mx-auto">
            <h3 className="text-center py-4 text-2xl">
              It looks like there aren't any MP's that have a surname beginning
              with that letter.
            </h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default Mps;
