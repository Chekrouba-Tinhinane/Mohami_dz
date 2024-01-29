import React, { useState, useEffect } from "react";
import SearchContainer from "./components/SearchContainer";
import Footer from "./components/super/Footer";
import { useUserData } from "./App";

const AdminPage = ({ lawyers, setLawyers }) => {
  const { userData, setUserData } = useUserData();

  return (
    <div className="flex justify-center w-full  ">
      <div className=" flex flex-col w-full ">
        <div className=" flex flex-col mx-[4rem] gap-[5rem]">
          <div className="">
            <h2 onClick={() => console.log(userData)} className="recursive">
              Trouver Un Avocat
            </h2>
            <SearchContainer setLawyers={setLawyers} />
          </div>
          <div className=" ">
                  </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminPage;
