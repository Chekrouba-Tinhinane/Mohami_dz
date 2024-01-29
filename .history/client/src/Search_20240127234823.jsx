import React, { useState, useEffect } from "react";
import SearchContainer from "./components/SearchContainer";
import LawyerCard from "./components/LawyerCard";
import Profile from "./components/Profile";
import Footer from "./components/super/Footer";
import { useUserData } from "./App";
import ResultsPage from "./ResultsPage";
import axios from "axios";

const Search = () => {
  const [lawyers, setLawyers] = useState([]);
  const { userData, setUserData } = useUserData();

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const response = await axios.get(
          "http://192.168.137.210:8000/avocat/avocat_list"
        );
        console.log(response.data)
        setLawyers(response.data);
      } catch (error) {
        console.error("Error fetching lawyers:", error);
      }
    };

    fetchLawyers(); // Call fetchLawyers when the component mounts
  }, []); // Empty dependency array ensures fetchLawyers is called only once

  return (
    <div className="flex justify-center w-full  ">
      <div className=" flex flex-col w-full ">
        <div className=" flex flex-col mx-[4rem] gap-[5rem]">
          <div className="mx-4">
            <h2 onClick={() => console.log(userData)} className="recursive">
              Trouver Un Avocat
            </h2>
            <SearchContainer filteredLawyers={lawyers} setFilteredLawyers={setLawyers} />
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
