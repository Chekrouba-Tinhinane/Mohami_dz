import React from "react";
import SearchContainer from "./components/SearchContainer";
import LawyerCard from "./components/LawyerCard";
import Profile from "./components/Profile";
import Footer from "./components/super/Footer";

const Search = () => {
  return (
    <div className="flex justify-center w-full  ">
      <div className=" flex flex-col w-full ">
        <div className=" flex flex-col mx-8 gap-[5rem]">
          <div className="mx-4">
            {" "}
            <h2 className=" recursive">Trouver Un Avocat</h2>
            <SearchContainer />
          </div>
          <div className=" ">
            {" "}
            <Profile lawyer={} />
          </div>
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
