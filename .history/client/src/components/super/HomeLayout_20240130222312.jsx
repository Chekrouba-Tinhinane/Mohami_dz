import React, { useState } from "react";
import NavBar from "./NavBar";

const HomeLayout = ({ pageComponent }) => {
  const navLinks = [
    { label: "Accueil", to: "/", offset: -50 },
    { label: "Trouver un avocat", to: "./Search", offset: 0 },
    { label: "Prendre un rendez-vous", to: "Search", offset: 50 },
    { label: "Contactez nous", to: "#footer", offset: -100 },
  ];
  return (
    <div className=" flex flex-col min-h-screen items-center">
      <header className=" p-3 recursive border-b border-b-primary w-[90%] text-center font-semibold text-xl">
        {" "}
        DZ Mouhami{" "}
      </header>
      <NavBar links={navLinks} landing={true} />

      <div className={` w-full  `}>{pageComponent}</div>
    </div>
  );
};

export default HomeLayout;
