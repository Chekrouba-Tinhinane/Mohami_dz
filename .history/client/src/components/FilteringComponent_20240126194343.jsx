import React, { useState } from "react";
import { Select, MenuItem, Button } from "@mui/material";

const FilteringComponent = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    sortBy: "",
    filterBy: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilter(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 items-center">
      <Select
        name="filterBy"
        value={filters.filterBy}
        onChange={handleChange}
        variant="outlined"
        className="flex-grow"
      >
        <MenuItem value="">Filtrer par</MenuItem>
        <MenuItem value="Localisation">Localisation</MenuItem>
        <MenuItem value="Spécialité">Spécialité</MenuItem>
        <MenuItem value="Langue">Langue</MenuItem>
      </Select>
      <Button type="submit" variant="contained">
        Appliquer
      </Button>
    </form>
  );
};

export default FilteringComponent;
