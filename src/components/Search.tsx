"use client";

import { getMPSearch } from "@/app/utils/api";
import { error } from "console";
import { ChangeEvent, useEffect, useState } from "react";
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
        <label className="mx-3">MP Name:</label>
        <input
          className="outline"
          placeholder="Search for an MP here..."
          id="userSearch"
          onChange={(event) => setSearchTerm(event.target.value)}
        ></input>
        <button className="mx-6 button" type="submit">
          Search
        </button>
      </div>
      <div hidden={false}>
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
