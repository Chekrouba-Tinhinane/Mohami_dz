import React from "react";
import close from "../assets/icons/appoint/x.svg";

const Review = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <img src={close} alt="" /> <p> Rédiger un avis</p>
        <button className=" text-primary">Publier</button>
      </div>
    </div>
  );
};

export default Review;
