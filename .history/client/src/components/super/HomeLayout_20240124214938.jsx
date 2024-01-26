import React, { useState } from "react";
import NavBar from "./NavBar";

const HomeLayout = ({ pageComponent }) => {
  return (
    <div className=" flex flex-col min-h-screen items-center mx-">
      <header className=" p-3 recursive border-b border-b-primary w-[90%] text-center font-semibold text-xl">
        {" "}
        DZ Mouhami{" "}
      </header>
      <NavBar />

      <div className={` w-full  `}>{pageComponent}</div>
    </div>
  );
};

export default HomeLayout;
