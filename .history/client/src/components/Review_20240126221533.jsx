import React from "react";
import close from "../assets/icons/appoint/x.svg";

const Review = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        {" "}
        <img src={close} alt="" />{" "}
        <p> Rédiger un avis</p>

        
      </div>
    </div>
  );
};

export default Review;
