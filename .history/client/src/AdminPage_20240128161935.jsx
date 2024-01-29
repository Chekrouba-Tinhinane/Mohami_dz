import React, { useState, useEffect } from "react";
import SearchContainer from "./components/SearchContainer";
import Footer from "./components/super/Footer";
import { useUserData } from "./App";
import EvalLawyers from "./components/EvalLawyers";

const AdminPage = ({ lawyers, setLawyers }) => {
  const { userData, setUserData } = useUserData();

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const response = await axios.get(
          "http://192.168.137.210:8000/avocat/avocats"
        );
        console.log(response.data);
        setLawyers(response.data);
      } catch (error) {
        console.error("Error fetching lawyers:", error);
      }
    };

    fetchLawyers(); // Call fetchLawyers when the component mounts
  }, []); // Empty dependency array ensures fetchLawyers is called only onc

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
            <EvalLawyers lawyers={lawyers} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminPage;
