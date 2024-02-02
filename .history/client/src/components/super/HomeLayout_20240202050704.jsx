import React, { useState } from "react";
import NavBar from "./NavBar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HomeLayout = ({ pageComponent, admin }) => {
  const { t } = useTranslation();

  const adminNav = [
    { label: t("specialités"), to: "/specialty" },
    { label: t("Liste des avocats"), to: "/AdminPage" },
  ];
  const navLinks = [
    { label: t("home"), to: "/" },
    { label: t("findLawyer"), to: "/Search" },
  ];
  return (
    <div className=" flex flex-col min-h-screen items-center">
      <Link className="border-b border-b-primary w-[90%]" to="/">
      <header className=" min-w-max cursor-pointer p-3 recursive  text-center font-semibold text-xl">
        DZ Mouhami
      </header></Link>
      <NavBar links={admin ? adminNav : navLinks} landing={true} l={false} />

      <div className={`w-full`}>{pageComponent}</div>
    </div>
  );
};

export default HomeLayout;
