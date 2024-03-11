"use client";

import { getMPSearch } from "@/app/utils/api";
import { useEffect, useState } from "react";
import MPCard from "./MPCard";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchAPIData, setSearchAPIData] = useState({});

  useEffect(() => {
    if (searchTerm !== "") {
      getMPSearch(searchTerm)
        .then((data: any) => {
          setSearchAPIData(data);
        })
        .catch((err: string) => {
          console.log(err);
        });
    }
  }, [searchTerm]);

  console.log(searchAPIData);
  return (
    <section>
      <div>
        <label className="mx-3 text-2xl">Search for an MP: </label>
        <input
          className="outline"
          placeholder="Search for an MP here..."
          id="userSearch"
          onChange={(event) => setSearchTerm(event.target.value)}
        ></input>
        <button className="mx-6 button" type="button">
          Search
        </button>
      </div>
      <div
        hidden={false}
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 mx-3 py-3"
      >
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
