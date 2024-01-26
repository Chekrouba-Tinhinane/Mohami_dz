import React from "react";
import SearchContainer from "./components/SearchContainer";

const Search = () => {
  return (
    <div className="flex items-center w-full">
      <div className=" flex flex-col mx-6 w-[80%]">
        <h2 className=" recursive">Trouver Un Avocat</h2>

        {/* <div className="bg-primary p-4 relative inline-block">
            Rechercher +
          </div> */}
                <SearchContainer />

      </div>

    </div>
  );
};

export default Search;
