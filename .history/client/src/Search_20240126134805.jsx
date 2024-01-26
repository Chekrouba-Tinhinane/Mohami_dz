import React from "react";
import SearchContainer from "./components/SearchContainer";
import LawyerCard from "./components/LawyerCard";

const Search = () => {
  return (
    <div className="flex justify-center w-full ">
      <div className=" flex flex-col w-full mx-4 gap-6">
        <h2 className=" recursive">Trouver Un Avocat</h2>

        {/* <div className="bg-primary p-4 relative inline-block">
            Rechercher +
          </div> */}
        <div className="mx-8">
          <SearchContainer />
        </div>

        </div>
    </div>
  );
};

export default Search;
