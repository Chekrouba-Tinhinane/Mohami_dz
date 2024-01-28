import React from "react";
import LawyerInfo from "./LawyerInfo";

const Coords = ({lawyer, onClick}) => {
  return (
    <div className="flex w-full  items-center">
      <div className=" basis-[70%] flex flex-col gap-4 ">
        <div className="flex flex-col gap-2">
          {" "}
          <h2>{lawyer?.avocat.first_name} {lawyer?.avocat.last_name}</h2>
          <h4> {lawyer?.avocat.ville} {lawyer?.avocat.region} </h4>
        </div>
        <div className="flex gap-8 ">
          <div className=" bg-gray-300 h-64 w-56"></div>
          <div className="flex flex-col gap-3">
            Rating here
            <p>
              <span className=" font-semibold">Spécialité:</span>
              <span className=" font-light">{lawyer.s} </span>
              <a href="" className=" text-primary underline">
                Voir plus
              </a>
            </p>
          </div>
        </div>
      </div>
      <LawyerInfo onClick={onClick} />
    </div>
  );
};

export default Coords;
