import React, { useState } from "react";
import search from "../assets/icons/search.svg"

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
      <div className="flex items-center border border-primary rounded px-2">
  <input
    type="text"
    value={searchQuery}
    onChange={handleChange}
    placeholder="Search..."
    className="flex-grow outline-none py-1"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-primary cursor-pointer"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={handleSearch}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17.5 17.5l2.5 2.5"
    />
  </svg>
</div>

    </form>
  );
};

export default SearchBar;
