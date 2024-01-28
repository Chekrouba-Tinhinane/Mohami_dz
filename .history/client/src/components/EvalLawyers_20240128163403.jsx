import React, { useState, useEffect } from "react";
import LawyerCard from "./LawyerCard";

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

const EvalLawyers = ({ lawyers, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchResults, setSearchResults] = useState([]); // Initialize searchResults as an empty array
  const totalSearchResults = searchResults.length; // Get the total number of search results

  useEffect(() => {
    // Set searchResults to the same data as lawyers when the component mounts
    setSearchResults(lawyers);
  }, [lawyers]); // Run this effect whenever the lawyers prop changes

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="bg-lightBrown px-5 py-6">
        {totalSearchResults === 0 ? (
          <div className="flex justify-center">0 résultats compatibles</div>
        ) : (
          <>
            <LawyerList
            onDelete={onDelete}
              admin
              lawyers={lawyers}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(totalSearchResults / itemsPerPage)}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

const LawyerList = ({ admin, onDelete, lawyers, currentPage, itemsPerPage }) => {
  const indexOfLastLawyer = currentPage * itemsPerPage;
  const indexOfFirstLawyer = indexOfLastLawyer - itemsPerPage;
  const currentLawyers = lawyers.slice(indexOfFirstLawyer, indexOfLastLawyer);

  return (
    <div className="flex flex-col gap-8 px-6 py-3">
      {currentLawyers.map((lawyer, index) => (
        <LawyerCard onDelete={} admin key={index} lawyer={lawyer} />
      ))}
    </div>
  );
};

export default EvalLawyers;