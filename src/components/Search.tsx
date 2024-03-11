"use client";

import { getMPSearch } from "@/app/utils/api";
import { error } from "console";
import { ChangeEvent, useEffect, useState } from "react";

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
    </section>
  );
};

export default Search;
