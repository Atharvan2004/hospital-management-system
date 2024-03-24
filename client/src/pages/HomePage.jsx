import React from "react";
import Table from "@/components/Table";
import SearchBar from "@/components/SearchBar";

const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <div className="w-3/5 mx-auto mt-12">
        <Table />
      </div>
    </div>
  );
};

export default HomePage;
