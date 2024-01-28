import React from "react";
import maria from "../assets/maria/maria.jpg";

const LawyerCard = () => {
  return (
    <div className=" bg-white rounded-xl">
      {" "}
      <img src={maria} className=" object-cover" alt="" />
    </div>
  );
};

export default LawyerCard;
