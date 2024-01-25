import React from "react";
import SearchContainer from "./components/SearchContainer";

const Search = () => {
  return (
    <div className="relative">
      <div className="w-full flex flex-col">
        <h2 className="recursive">Trouver Un Avocat</h2>

        {/* Add a long horizontal line connected to the parent and extending almost to the end of the page */}
        <div className="bg-primary p-4 inline-block">
          Rechercher +
        </div>
        <span className="absolute left-1/2 top-full transform -translate-x-1/2 w-3/4 h-1 bg-gray-500"></span>
      </div>

      <SearchContainer />
    </div>
  );
};

export default Search;
