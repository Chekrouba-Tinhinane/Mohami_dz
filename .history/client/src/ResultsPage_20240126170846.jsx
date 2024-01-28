import React, { useState } from "react";
import LawyerCard from "./components/LawyerCard";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Pagination component code remains the same
};

const LawyerList = ({ lawyers, currentPage, itemsPerPage }) => {
  // LawyerList component code remains the same
};

const ResultsPage = ({ lawyers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const totalPages = Math.ceil(lawyers.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (query) => {
    // Implement search functionality here
    // You can filter the lawyers based on the search query
  };

  const handleFilter = (filters) => {
    // Implement filtering functionality here
    // You can filter the lawyers based on the selected filters
  };

  return (
    <div className="mx-[4rem] bg-lightBrown px-5 py-3">
      <div className="mb-4">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="mb-4">
        <FilteringComponent onFilter={handleFilter} />
      </div>
      <LawyerList
        lawyers={lawyers}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ResultsPage;

  

const LawyerList = ({ lawyers, currentPage, itemsPerPage }) => {
  const indexOfLastLawyer = currentPage * itemsPerPage;
  const indexOfFirstLawyer = indexOfLastLawyer - itemsPerPage;
  const currentLawyers = lawyers.slice(indexOfFirstLawyer, indexOfLastLawyer);

  return (
    <div className=" flex flex-col gap-8 px-6 py-3">
      {currentLawyers.map((lawyer, index) => (
        <LawyerCard key={index} lawyer={lawyer} />
      ))}
    </div>
  );
};

const ResultsPage = ({ lawyers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Change this number based on your preference
  const totalPages = Math.ceil(lawyers.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="  mx-[4rem] bg-lightBrown px-5 py-3  ">
      <LawyerList
        lawyers={lawyers}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ResultsPage;
