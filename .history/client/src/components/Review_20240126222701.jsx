import React, { useState } from "react";
import close from "../assets/icons/appoint/x.svg";
import pfp from "../assets/profile/pfp.jpg";
import { Rating, TextareaAutosize, Button } from "@mui/material";

const Review = ({}) => {
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handlePublish = () => {
    // Logic to publish the comment
    console.log("Comment published:", comment);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between items-center">
        <img src={close} alt="" /> 
        <p>Rédiger un avis</p>
        <Button variant="outlined" color="primary" onClick={handlePublish}>
          Publier
        </Button>
      </div>

      <div className="flex flex-col items-center mt-4">
        <div className="flex items-center">
          <img src={pfp} alt="" />
          <span className="ml-2">user</span>
        </div>
        <Rating className="mt-2" name="simple-controlled" value={6} />
        <TextareaAutosize
          className="mt-2"
          placeholder="Votre commentaire (max 500 caractères)"
          value={comment}
          onChange={handleChange}
          rowsMin={3}
          rowsMax={5}
          maxLength={500}
        />
      </div>
    </div>
  );
};

export default Review;
