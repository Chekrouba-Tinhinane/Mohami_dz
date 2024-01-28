import React from "react";
import maria from "../assets/maria/maria.jpg";

const LawyerCard = () => {
  return (
    <div className=" bg-white rounded-full">
      {" "}
      <img src={maria} className=" object-contain" alt="" />
    </div>
  );
};

export default LawyerCard;
