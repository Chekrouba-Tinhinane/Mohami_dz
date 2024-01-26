import React from "react";
import SearchContainer from "./components/SearchContainer";

const Search = () => {
  return (
    <div className="flex justify-center  w-full">
      <div className=" flex flex-col mx- w-[80%]">
        <h2 className=" recursive">Trouver Un Avocat</h2>

        {/* <div className="bg-primary p-4 relative inline-block">
            Rechercher +
          </div> */}
          <div className="mx-6"></div>
          <SearchContainer />
      </div>
    </div>
  );
};

export default Search;
