import React from "react";
import Table from "@/components/Table";
import SearchBar from "@/components/SearchBar";
import { useSelector } from "react-redux";

const HomePage = () => {

  const { currentUser, loading, error } = useSelector((state) => state.doctor);
  // console.log(currentUser.name);
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
