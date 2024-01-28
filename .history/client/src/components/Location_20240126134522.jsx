import React from "react";
import gps from "../assets/icons/gps.svg"

const Location = () => {
  return (
    <div className="">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22786.676220806636!2d5.055891413920318!3d36.74303162425042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f2cca1a82082c5%3A0x7807b41e13330b6e!2zQsOpamHDr2E!5e0!3m2!1sen!2sdz!4v1706272831618!5m2!1sen!2sdz"
        width="95%"
        height="400"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        frameBorder="0"
        style={{ border: "0" }}
        allowFullScreen
      ></iframe>
      <div className="flex gap-3 items-baseline"> <img src={gps} className=" w-3" alt="" /> Location</div>
    </div>
  );
};

export default Location;
