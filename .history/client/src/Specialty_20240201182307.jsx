import React from "react";

const Specialty = () => {
  return (
    <div className="flex flex-col w-full  pt-5 ">
      <div className=" flex justify-between">
        {" "}
        <h2 className=" recursive mx-[4rem]">Liste des spécialités</h2>
        <button
                  className="hover:bg-red-400 hover:text-white  font-medium w-full h-max px-6 py-1 text-base border border-red-400 rounded-sm  text-red-400"
                >
                  {t("Delete")}
                </button>
      </div>

      <div className="flex flex-col bg-lightBrown px-[3rem] py-[1.5rem] mx-[4rem]"></div>
    </div>
  );
};

export default Specialty;