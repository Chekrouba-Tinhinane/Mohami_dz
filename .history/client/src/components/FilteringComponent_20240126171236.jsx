import React, { useState } from "react";

const FilteringComponent = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    // Define your filter options here
    // Example: sortBy: "", filterBy: ""
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
    <form onSubmit={handleSubmit}>
      Add your filter options here Example:
      <select name="sortBy" value={filters.sortBy} onChange={handleChange}>
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="date">Date</option>
      </select>
      Add more filter options as needed
      <button type="submit">Apply Filters</button>
    </form>
  );
};

export default FilteringComponent;
