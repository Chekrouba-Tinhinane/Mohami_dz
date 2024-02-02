import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "./components/super/Footer";

const Specialty = () => {
    const { t } = useTranslation()
  return (
    <div className="flex flex-col w-full  pt-5 ">
      <div className="mx-[4rem] flex justify-between items-center">
        <h2 className=" recursive flex-shrink-0">{t("")}Liste des spécialités</h2>
        <button className="flex items-center gap-2 hover:bg-opacity-70 h-max px-6 py-1 text-base bg-primary text-white">
        <span>+</span> {t("Ajouter spec")}
        </button>
      </div>

      <div className="flex flex-col bg-lightBrown px-[3rem] py-[1.5rem] mx-[4rem]">
    
      </div>
      <Footer />
    </div>
  );
};

export default Specialty;
