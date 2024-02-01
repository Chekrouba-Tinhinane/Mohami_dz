import React, { useState, useEffect } from "react";
import SearchContainer from "./components/SearchContainer";
import Footer from "./components/super/Footer";
import { useUserData } from "./App";
import ResultsPage from "./ResultsPage";

const Search = ({ lawyers, setLawyers }) => {
  const { userData, setUserData } = useUserData();

  return (
    <div className="flex justify-center w-full  ">
      <div className=" flex flex-col w-full ">
        <div className=" flex flex-col mx-[4rem] gap-[5rem]">
          <div className="">
            <h2 className="recursive">
              Trouver Un Avocat {t("FindLawyer")}
            </h2>
            <SearchContainer setLawyers={setLawyers} />
          </div>
          <div className=" ">
            <ResultsPage lawyers={lawyers} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Search;
