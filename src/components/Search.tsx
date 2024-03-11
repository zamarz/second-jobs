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

  return (
    <section>
      <div>
        <label className="mx-3 text-2xl px-3">Search for an MP: </label>
        <input
          className="outline px-4 py-2"
          placeholder="Enter an MP's name here..."
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
