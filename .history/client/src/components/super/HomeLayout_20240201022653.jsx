import React, { useState } from "react";
import NavBar from "./NavBar";
import { useTranslation } from "react-i18next";

const HomeLayout = ({ pageComponent }) => {
  
  const navLinks = [
    { label: t("home"), to: "/", offset: -50 },
    { label: t("findLawyer"), to: "/Search", offset: 0 },
    { label: t("makeAppointment"), to: "/Search", offset: 50 },
    { label: t("contactUs"), to: "footer", offset: -100 },
  ];
  return (
    <div className=" flex flex-col min-h-screen items-center">
      <header className=" p-3 recursive border-b border-b-primary w-[90%] text-center font-semibold text-xl">
        DZ Mouhami
      </header>
      <NavBar links={navLinks} landing={true} l={false} />

      <div className={` w-full  `}>{pageComponent}</div>
    </div>
  );
};

export default HomeLayout;
