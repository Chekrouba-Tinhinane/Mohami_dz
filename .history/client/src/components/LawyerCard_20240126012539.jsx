import React from "react";
import maria from "../assets/maria/maria.jpg";

const LawyerCard = () => {
  return (
    <div className=" flex gap-[3rem] bg-white rounded-3xl">
      <img src={maria} className=" rounded-s-3xl " alt="" />
      <div className=" flex flex-col gap-4 my-6">
        <div className=" basis-[45%] border-b border-b-lightTypo flex"> <div className=" flex flex-col"></div> </div>
        <div className=" basis-[45%]"> Hello world</div>
      </div>
    </div>
  );
};

export default LawyerCard;
