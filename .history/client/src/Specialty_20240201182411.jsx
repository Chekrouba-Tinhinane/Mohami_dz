import React from "react";

const Specialty = () => {
    const { t } = useTra
  return (
    <div className="flex flex-col w-full  pt-5 ">
      <div className=" flex justify-between">
        {" "}
        <h2 className=" recursive mx-[4rem]">Liste des spécialités</h2>
        <button className="hover:bg-opacity-70 hover:text-white font-medium w-full h-max px-6 py-1 text-base border border-primary rounded-sm  text-primary">
          {t("Ajouter spec")}
        </button>
      </div>

      <div className="flex flex-col bg-lightBrown px-[3rem] py-[1.5rem] mx-[4rem]"></div>
    </div>
  );
};

export default Specialty;
