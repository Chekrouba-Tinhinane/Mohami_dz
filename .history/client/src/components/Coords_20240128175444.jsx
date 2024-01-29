import React from "react";
import LawyerInfo from "./LawyerInfo";

const Coords = ({ lawyer, onClick, self }) => {
  return (
    <div className="flex w-full  items-center">
      <div className=" basis-[70%] flex flex-col gap-4 ">
        <div className="flex flex-col gap-2">
          {" "}
          <h2>
            {lawyer?.avocat?.first_name || lawyer?.first_name}{" "}
            {lawyer?.avocat?.last_name || lawyer?.last_name}
          </h2>
          <h4>
            {" "}
            {lawyer?.avocat?.ville || lawyer?.ville}{" "}
            {lawyer?.avocat?.region || lawyer?.region}{" "}
          </h4>
        </div>
        <div className="flex gap-8 ">
          <div className=" bg-gray-300 h-64 w-56"></div>
          <div className="flex flex-col gap-3">
            Rating here
            <p className="space-x-4">
              <span className=" font-semibold">Spécialité:</span>
              <span className=" font-light">{lawyer?.speciality?.name ||lawyer} </span>
              <a href="" className=" text-primary underline">
                Voir plus
              </a>
            </p>
          </div>
        </div>
      </div>
      <LawyerInfo self={self} lawyer={lawyer} onClick={onClick} />
    </div>
  );
};

export default Coords;
