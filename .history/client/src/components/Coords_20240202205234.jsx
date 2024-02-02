import React from "react";
import LawyerInfo from "./LawyerInfo";
import { useTranslation } from "react-i18next";

const Coords = ({ lawyer, onClick, self }) => {
  const { t } = useTranslation();
  return (
    <div className="flex w-full phone:max-lg:flex-col gap-4">
      <div className=" basis-[70%] flex flex-col gap-4 ">
        <div className="flex flex-col gap-2">
          {" "}
          <h2>
            {lawyer?.avocat?.first_name || lawyer?.first_name}
            {lawyer?.avocat?.last_name || lawyer?.last_name}
          </h2>
          <h4>
            {" "}
            {lawyer?.avocat?.ville || lawyer?.ville}
            {lawyer?.avocat?.region || lawyer?.region}
          </h4>
        </div>
        <div className="flex gap-8 phone:max-tablet:flex-col ">
          <div className=" bg-gray-300 h-64 w-56 phone:max-tablet:w-25 phone:max-tablet:h-30"></div>
          <div className="flex flex-col gap-3">
            <p className="space-x-4">
              <span className=" font-semibold">{t("specialty")}:</span>
              <span className=" font-light">
                {lawyer?.speciality?.name || lawyer?.speciality_name}{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
      <LawyerInfo self={self} lawyer={lawyer} onClick={onClick} />
    </div>
  );
};

export default Coords;
