import React, { useState, useEffect } from "react";
import LawyerCard from "./components/LawyerCard";
import axios from "axios";
import SearchBar from "./components/SearchBar"
const ResultsPage = ({ lawyers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchResults, setSearchResults] = useState([]); // Initialize searchResults as an empty array

  useEffect(() => {
    // Set searchResults to the same data as lawyers when the component mounts
    setSearchResults(lawyers);
  }, [lawyers]); // Run this effect whenever the lawyers prop changes

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (query) => {
    axios
      .get(
        `http://192.168.137.210:8000/avocat/recherche-basic?keyword=${query}`
      )
      .then((response) => {
        console.log(response.data);
        setSearchResults(response.data);
        setCurrentPage(1);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <div>
      <div className="bg-lightBrown px-5 py-6">
        <div className="mb-4 mt-3 flex w-full justify-between">
          <SearchBar onSearch={handleSearch} />
        </div>
        <LawyerList
          lawyers={searchResults}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(searchResults.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

const LawyerList = ({ lawyers, currentPage, itemsPerPage }) => {
  const indexOfLastLawyer = currentPage * itemsPerPage;
  const indexOfFirstLawyer = indexOfLastLawyer - itemsPerPage;
  const currentLawyers = lawyers.slice(indexOfFirstLawyer, indexOfLastLawyer);

  return (
    <div className="flex flex-col gap-8 px-6 py-3">
      {currentLawyers.map((lawyer, index) => (
        <LawyerCard key={index} lawyer={lawyer} />
      ))}
    </div>
  );
};

export default ResultsPage;
