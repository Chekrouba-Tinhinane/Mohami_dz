import React from "react";
import LawyerInfo from "./LawyerInfo";

const Coords = ({onClick}) => {
  return (
    <div className="flex w-full  items-center">
      <div className=" basis-[70%] flex flex-col gap-4 ">
        <div className="flex flex-col gap-2">
          {" "}
          <h2>William King</h2>
          <h4>Region, Ville, 11000</h4>
        </div>
        <div className="flex gap-8 ">
          <div className=" bg-gray-300 h-64 w-56"></div>
          <div className="flex flex-col gap-3">
            Rating here
            <p>
              <span className=" font-semibold">Spécialité:</span>{" "}
              <span className=" font-light">Droits administratifs </span>
              <a href="" className=" text-primary underline">
                Voir plus
              </a>
            </p>
          </div>
        </div>
      </div>
      <LawyerInfo />
    </div>
  );
};

export default Coords;
