import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import filter from "../assets/icons/filter.svg";

const FilteringComponent = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    filterBy: "Filtrer par",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
    onFilter({ ...filters, [name]: value });
  };
  import React, { useState } from "react";
  import { Select, MenuItem, Button } from "@mui/material";
  import filter from "../assets/icons/filter.svg";
  
  const FilteringComponent = ({ onFilter }) => {
    const [filters, setFilters] = useState({
      filterBy: "Filtrer par",
      selectedFilter: ""
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFilters({ ...filters, [name]: value });
    };
  
    const handleApplyFilter = () => {
      onFilter(filters.selectedFilter);
    };
  
    return (
      <div className="flex space-x-2 items-center">
        <div className="flex items-center bg-primary ">
          <Select
            name="selectedFilter"
            value={filters.selectedFilter}
            onChange={handleChange}
            variant="standard"
            className="outline-none px-2 text-white"
          >
            <MenuItem value="">Filtrer par</MenuItem>
            <MenuItem value="Localisation">Localisation</MenuItem>
            <MenuItem value="Spécialité">Spécialité</MenuItem>
            <MenuItem value="Langue">Langue</MenuItem>
          </Select>
          <img src={filter} alt="filter icon" className="w-4 mr-2" />
          <Button variant="contained" onClick={handleApplyFilter}>Appliquer</Button>
        </div>
      </div>
    );
  };
  
  export default FilteringComponent;
  
  return (
    <div className="flex space-x-2 items-center">
      <div className="flex items-center bg-primary ">
        <Select
          name="filterBy"
          value={filters.filterBy}
          onChange={handleChange}
          placeholder="Filtrer"
          variant="standard"
          className="outline-none px-2 text-white"
        >
          <MenuItem disabled value="Filtrer par" className=" text-white font-medium">Filtrer par</MenuItem>
          <MenuItem value="Localisation">Localisation</MenuItem>
          <MenuItem value="Spécialité">Spécialité</MenuItem>
          <MenuItem value="Langue">Langue</MenuItem>
        </Select>
        <img src={filter} alt="filter icon" className="w-4 mr-2" />
      </div>
    </div>
  );
};

export default FilteringComponent;
