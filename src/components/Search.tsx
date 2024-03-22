"use client";

import { getMPSearch } from "@/app/utils/api";
import { useEffect, useState } from "react";
import MPCard from "./MPCard";
import { GetMPData } from "@/app/types/types";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchAPIData, setSearchAPIData] = useState<GetMPData>(
    {} as GetMPData
  );

  useEffect(() => {
    if (searchTerm !== "") {
      getMPSearch(searchTerm)
        .then((data: GetMPData) => {
          setSearchAPIData(data);
        })
        .catch((err: Error) => {
          console.log(err);
        });
    }
  }, [searchTerm]);

  return (
    <section>
      <div>
        <label className="mx-3 text-2xl px-3">Search for an MP: </label>
        <input
          className="outline px-9 py-2"
          placeholder="Enter an MP's name..."
          id="userSearch"
          onChange={(event) => setSearchTerm(event.target.value)}
        ></input>
        <button className="mx-6 button" type="button">
          Search
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 mx-auto gap-2 py-3">
        {Object.keys(searchAPIData).length > 0 ? (
          searchAPIData.items.map((mp: any) => {
            return <MPCard key={mp.value.id} mpInfo={mp.value} />;
          })
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Search;
