import React, { useState } from "react";
import Table from "@/components/Table";
import SearchBar from "@/components/SearchBar";
import { useSelector } from "react-redux";

const HomePage = () => {

  const { currentUser, loading, error } = useSelector((state) => state.doctor);
  
  

  return (
    <div>
      <SearchBar />
      <div className="w-3/5 mx-auto mt-12">
        <Table />
         <div>{currentUser.age}</div> 
      </div>
    </div>
  );
};

export default HomePage;
