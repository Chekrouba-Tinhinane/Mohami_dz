import React from "react";
import SearchContainer from "./components/SearchContainer";
import LawyerCard from "./components/LawyerCard";
import Profile from "./components/Profile";
import Footer from "./components/super/Footer";

const Search = () => {
  return (
      <div className=" flex flex-col w-full mx-[4rem] ">
        <div className=" flex flex-col  gap-[5rem]">
          <div className="mx-4">
            {" "}
            <h2 className=" recursive">Trouver Un Avocat</h2>
            <SearchContainer />
          </div>
          <div className=" ">
            {" "}
            <Profile  />
          </div>
        </div>

        <Footer />
      </div>
  );
};

export default Search;
{
  /* <div className="bg-primary p-4 relative inline-block">
            Rechercher +
          </div> */
}
