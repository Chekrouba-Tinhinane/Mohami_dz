import React, { useState } from "react";
import SearchContainer from "./components/SearchContainer";
import LawyerCard from "./components/LawyerCard";
import Profile from "./components/Profile";
import Footer from "./components/super/Footer";
import { useUserData } from "./App";
import ResultsPage from "./ResultsPage";
import axios from "axios";

const Search = () => {
  const [lawyers, setLawyers] = useState([]);

  const fetchLawyers = async () => {
    try {
      const response = await axios.get(
        "http://192.168.137.210:8000/avocat/avocat_list"
      );
      setLawyers(response.data);

      return response.data; // Return the data received from the API
    } catch (error) {
      console.error("Error fetching lawyers:", error);
      return []; // Return an empty array in case of an error
    }
  };

  const { userData, setUserData } = useUserData();
  return (
    <div className="flex justify-center w-full  ">
      <div className=" flex flex-col w-full ">
        <div className=" flex flex-col mx-[4rem] gap-[5rem]">
          <div className="mx-4">
            {" "}
            <h2 onClick={() => console.log(userData)} className=" recursive">
              Trouver Un Avocat
            </h2>
            <SearchContainer />
          </div>
          <div className=" ">
            {" "}
            <Profile />
          </div>
        </div>
x
        <Footer />
      </div>
    </div>
  );
};

export default Search;
{
  /* <div className="bg-primary p-4 relative inline-block">
            Rechercher +
          </div> */
}
