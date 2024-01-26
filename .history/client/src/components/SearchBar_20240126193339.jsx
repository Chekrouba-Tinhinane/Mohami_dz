import React, { useState } from "react";
import search from "../assets/icons/search.svg";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-max bg-white items-center border border-primary rounded px-2">
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search..."
          className="flex outline-none py-1"
        />
        <img src={search} className=" cursor-pointer bg-lightBrown" alt="" />
      </div>
    </form>
  );
};

export default SearchBar;
