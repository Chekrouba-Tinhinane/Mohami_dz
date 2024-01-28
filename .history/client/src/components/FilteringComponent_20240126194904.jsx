import React, { useState } from "react";
import { Select, MenuItem, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const FilteringComponent = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    sortBy: "",
    filterBy: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
    onFilter({ ...filters, [name]: value });
  };

  return (
    <form className="flex space-x-2 items-center">
      <InputBase
        name="filterBy"
        value={filters.filterBy}
        onChange={handleChange}
        placeholder="Filtrer par"
        startAdornment={<SearchIcon />}
        variant="standard"
        className="flex bg-primary outline-none px-2"
      />
    </form>
  );
};

export default FilteringComponent;
