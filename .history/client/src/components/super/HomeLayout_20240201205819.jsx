import React, { useState } from "react";
import NavBar from "./NavBar";
import { useTranslation } from "react-i18next";

const HomeLayout = ({ pageComponent, admin }) => {
  const { t } = useTranslation();

  const adminNav = [
    { label: t("specialités"), to: "/specialty" },
    { label: t("Liste des avocats"), to: "/AdminPage" },
  ];
  const navLinks = [
    { label: t("home"), to: "/", offset: -50 },
    { label: t("findLawyer"), to: "/Search", offset: 0 },
  ];
  return (
    <div className=" flex flex-col min-h-screen items-center">
      <header className=" p-3 recursive border-b border-b-primary w-[90%] text-center font-semibold text-xl">
        DZ Mouhami
      </header>
      <NavBar links={admin ? adminNav : navLinks} landing={true} l={false} />

      <div className={`w-full`}>{pageComponent}</div>
    </div>
  );
};

export default HomeLayout;
