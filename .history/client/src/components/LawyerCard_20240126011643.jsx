import React from "react";
import maria from "../assets/maria/maria.jpg";

const LawyerCard = () => {
  return (
    <div className=" flex gap-[3rem] bg-white rounded-3xl">
      <img src={maria} className=" rounded-s-3xl " alt="" />
      <div className=" flex flex-col my-6">

        <div></div>
        <div></div>
            the rest
      </div>
    </div>
  );
};

export default LawyerCard;
