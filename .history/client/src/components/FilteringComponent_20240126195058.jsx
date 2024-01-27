import React, { useState } from "react";
import { InputBase } from "@mui/material";
import filter from "../assets/icons/filter.svg";

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
    <div className="flex space-x-2 items-center">
      <div className="flex items-center bg-primary ">
        <InputBase
          name="filterBy"
          value={filters.filterBy}
          onChange={handleChange}
          placeholder="Filtrer par"
          variant="standard"
          className="outline-none px-2"
        />
        <img src={filter} alt="filter icon" className="w-6 h-6 mr-2" />
      </div>
    </div>
  );
};

export default FilteringComponent;
