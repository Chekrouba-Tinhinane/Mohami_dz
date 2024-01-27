import React from "react";
import SearchContainer from "./components/SearchContainer";
import LawyerCard from "./components/LawyerCard";
import Profile from "./components/Profile";
import Footer from "./components/super/Footer";

const Search = () => {
  return (
    <div className="flex justify-center w-full  ">
      <div className=" flex flex-col w-full gap-6">
        <div className=" flex flex-col">
          <h2 className=" recursive">Trouver Un Avocat</h2>

          <div className="mx-4">
            <SearchContainer />
          </div>
          <Profile />
        </div>

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