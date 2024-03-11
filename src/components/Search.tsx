"use client";

import { ChangeEvent, useEffect, useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {}, [searchTerm]);

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
