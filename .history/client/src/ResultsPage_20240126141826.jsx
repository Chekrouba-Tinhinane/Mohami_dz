import React, { useState } from "react";
import LawyerCard from "./LawyerCard";

const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  return (
    <div className="flex justify-center">
      <button onClick={onPrevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>{currentPage}/{totalPages}</span>
      <button onClick={onNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

const LawyerList = ({ lawyers, currentPage, itemsPerPage }) => {
  const indexOfLastLawyer = currentPage * itemsPerPage;
  const indexOfFirstLawyer = indexOfLastLawyer - itemsPerPage;
  const currentLawyers = lawyers.slice(indexOfFirstLawyer, indexOfLastLawyer);

  return (
    <div>
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

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <LawyerList
        lawyers={lawyers}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={nextPage}
        onPrevPage={prevPage}
      />
    </div>
  );
};

export default ResultsPage;
