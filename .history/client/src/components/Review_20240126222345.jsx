import React from "react";
import close from "../assets/icons/appoint/x.svg";
import pfp from "../assets/profile/pfp.jpg";
import { Rating } from "@mui/material";

const Review = ({}) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <img src={close} alt="" /> <p> Rédiger un avis</p>
        <button className=" text-primary">Publier</button>
      </div>

      <div className="flex flex-col border-b border-b-primary pb-8">
        <div className="flex items-center">
          <img src={pfp} alt="" /> user{" "}
        </div>
        <Rating className="" name="simple-controlled" value={6} />
      </div>
    </div>
  );
};

export default Review;
