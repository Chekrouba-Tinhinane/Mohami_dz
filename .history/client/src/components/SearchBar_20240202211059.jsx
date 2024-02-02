import React, { useState } from "react";
import search from "../assets/icons/search.svg";
import { useTranslation } from "react-i18next";

const SearchBar = ({ onSearch }) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  const handleSearchIconClick = () => {
    if (searchQuery.trim() !== "") {
      onSearch(searchQuery);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-max bg-white items-center border border-primary rounded px-1.5 ">
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder={t("searchPlaceholder")}
          className="flex outline-none py-1.5 w-[] "
        />
        <img
          src={search}
          onClick={handleSearchIconClick}
          className=" cursor-pointer bg-light"
          alt=""
        />
      </div>
    </form>
  );
};

export default SearchBar;
