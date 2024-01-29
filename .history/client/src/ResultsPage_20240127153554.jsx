import React, { useState } from "react";
import LawyerCard from "./components/LawyerCard";
import FilteringComponent from "./components/FilteringComponent";
import SearchBar from "./components/SearchBar";
import Footer from "./components/super/Footer";
import axios from "axios";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageRange = 5; // Adjust this value to change the number of visible page numbers
  const pages = [];

  // Function to handle page clicks
  const handleClick = (page) => {
    onPageChange(page);
  };

  // Function to generate page numbers
  const generatePages = () => {
    // Case 1: If total pages are less than or equal to the page range
    if (totalPages <= pageRange) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Case 2: If total pages are greater than the page range
      const midPoint = Math.ceil(pageRange / 2);
      const startPage = Math.max(1, currentPage - midPoint + 1);
      const endPage = Math.min(totalPages, startPage + pageRange - 1);

      // Display ellipsis before page numbers if necessary
      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) {
          pages.push("...");
        }
      }

      // Display page numbers within the range
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Display ellipsis after page numbers if necessary
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push("...");
        }
        pages.push(totalPages);
      }
    }
  };

  // Generate the page numbers
  generatePages();

  return (
    <div className="flex justify-center">
      <button
        onClick={() => handleClick(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      {pages.map((page, index) => (
        <span
          key={index}
          onClick={() => handleClick(page)}
          style={{
            cursor: "pointer",
            margin: "0 5px",
            color: currentPage === page ? "#D4AD6B" : "inherit",
            textDecoration: currentPage === page ? "underline" : "none",
          }}
        >
          {page}
        </span>
      ))}
      <button
        onClick={() => handleClick(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

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
  const [itemsPerPage] = useState(5);
  const [searchResults, setSearchResults] = useState(lawyers); // State to hold search results
  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (query) => {
    console.log(query)
    axios
      .get("http://192.168.137.210:8000/avocat/recherche-basic", query) // Adjust the URL according to your backend route
      .then((response) => {
        console.log(response.data)
        setSearchResults(response.data); // Update search results state with data from the backend
        setCurrentPage(1); // Reset current page to 1 when performing a new search
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  const handleFilter = (filters) => {
  
    // Implement filtering functionality here
    // You can filter the lawyers based on the selected filters
    axios
      .get("http://192.168.1.127:8000/avocat/recherche-basic", filters) // Adjust the URL according to your backend route
      .then((response) => {
        setSearchResults(response.data); // Update search results state with filtered data from the backend
        setCurrentPage(1); // Reset current page to 1 when applying new filters
      })
      .catch((error) => {
        console.error("Error fetching filtered results:", error);
      });
  };

  return (
    <div>
      <div className="mx-[4rem] my-[rem] bg-lightBrown px-5 py-6">
        <div className="mb-4 mt-3 flex w-full justify-between">
          <SearchBar onSearch={handleSearch} />{" "}
          <FilteringComponent onFilter={handleFilter} />
        </div>
        <LawyerList
          lawyers={searchResults} // Render search results instead of original lawyers
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>{" "}
      <Footer />
    </div>
  );
};

export default ResultsPage;
