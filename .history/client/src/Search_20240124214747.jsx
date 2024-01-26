import React from "react";
import SearchContainer from "./components/SearchContainer";

const Search = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col relative">
        <h2 className="recursive">Trouver Un Avocat</h2>

        {/* Add a long horizontal line coming out of the middle */}
        <div className="relative">
          <div className="bg-primary p-4 relative inline-block">
            Rechercher +
          </div>
          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-gray-500"></span>
        </div>
      </div>

      <SearchContainer />
    </div>
  );
};

export default Search;
