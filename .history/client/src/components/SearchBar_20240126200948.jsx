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
          placeholder="Rechercher..."
          className="flex outline-none py-1 px-2"
        />
        <img src={search} className=" cursor-pointer bg-light" alt="" />
      </div>
    </form>
  );
};

export default SearchBar;
