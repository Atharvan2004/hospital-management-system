import React from "react";
import SearchBar from "@/components/SearchBar";
import Table from "./Table";

function SearchResult() {
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
}

export default SearchResult;
