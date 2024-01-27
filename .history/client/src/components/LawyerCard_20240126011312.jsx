import React from "react";
import maria from "../assets/maria/maria.jpg";

const LawyerCard = () => {
  return (
    <div className=" flex gap-8 bg-white rounded-3xl">
      <img src={maria} className=" rounded-s-3xl " alt="" />
      <div className=" flex my-6">
            the rest
      </div>
    </div>
  );
};

export default LawyerCard;
