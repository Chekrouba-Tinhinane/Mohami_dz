import React from "react";
import maria from "../assets/maria/maria.jpg";
import LawyerInfo from "./LawyerInfo";

const LawyerCard = () => {
  return (
    <div className=" flex gap-[3rem] bg-white rounded-3xl">
      <img src={maria} className=" rounded-s-3xl " alt="" />
      <div className=" flex flex-col basis-[60%] gap-4 my-6">
        <div className=" basis-[45%] border-b border-b-lightTypo flex justify-between">
          {" "}
          <LawyerInfo />
          <button className=" w-max h-max bg-primary">Here</button>
        </div>
        <div className=" basis-[45%]"> Hello world</div>
      </div>
    </div>
  );
};

export default LawyerCard;
