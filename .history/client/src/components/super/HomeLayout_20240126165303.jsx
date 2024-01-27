import React, { useState } from "react";
import NavBar from "./NavBar";

const HomeLayout = ({ pageComponent }) => {
  const navLinks = [
    { label: "Accueil", id: "about", offset: -50 },
    { label: "Trouver un avocat", id: "hero", offset: 0 },
    { label: "Prendre un rendez-vous", id: "appoint", offset: 50 },
    { label: "Contactez nous", id: "footer", offset: -100 }
  ];
  return (
    <div className=" flex flex-col min-h-screen items-center">
      <header className=" p-3 recursive border-b border-b-primary w-[90%] text-center font-semibold text-xl">
        {" "}
        DZ Mouhami{" "}
      </header>
      <NavBar links={navLinks} landing={true} />

      <div className={` w-screen overflow-x-hidden `}>{pageComponent}</div>
    </div>
  );
};

export default HomeLayout;
