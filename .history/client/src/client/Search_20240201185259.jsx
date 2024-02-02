import React, { useState, useEffect } from "react";
import SearchContainer from "./components/SearchContainer";
import Footer from "./components/super/Footer";
import { useUserData } from "./App";
import ResultsPage from "./client/ResultsPage";
import { useTranslation } from "react-i18next";

const Search = ({ lawyers, setLawyers }) => {
  const { t } = useTranslation()
  const { userData, setUserData } = useUserData();

  return (
    <div className="flex justify-center w-full  ">
      <div className=" flex flex-col w-full ">
        <div className=" flex flex-col mx-[4rem] gap-[5rem]">
          <div className="">
            <h2 className="recursive">
               {t("findLawyer")}
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
