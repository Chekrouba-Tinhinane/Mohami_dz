import React from "react";
import SearchContainer from "./components/SearchContainer";
import LawyerCard from "./components/LawyerCard";
import Profile from "./components/Profile";
import Footer from "./components/super/Footer";
import { useUserData } from "./App";
import ResultsPage from "./ResultsPage";

const Search = () => {

  

  const { userData, setUserData } = useUserData()
  return (
    <div className="flex justify-center w-full  ">
      <div className=" flex flex-col w-full ">
        <div className=" flex flex-col mx-[4rem] gap-[5rem]">
          <div className="mx-4">
            {" "}
            <h2 onClick={() => console.log(userData)} className=" recursive">Trouver Un Avocat</h2>
            <SearchContainer />
          </div>
          <div className=" ">
            {" "}
            <Profile  />
          </div>
        </div>
        <ResultsPage />

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
