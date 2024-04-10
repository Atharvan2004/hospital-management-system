import React from "react";
import SearchBar from "@/components/SearchBar";
import Table from '@/components/Table'

const HomePage = () => {

  // const { currentUser, loading, error } = useSelector((state) => state.doctor);
  
  // console.log(currentUser.age);

  return (
    <div>
      <SearchBar />
      <div className="w-3/5 mx-auto mt-12">
        <Table />
         {/* <div>{currentUser.age}</div>  */}

      </div>
    </div>

  );
};

export default HomePage;
