import React from "react";
import maria from "../assets/maria/maria.jpg";
import msg from "../assets/icons/contact/msg.svg";
import phone from "../assets/icons/contact/phone.svg";
import { Link } from "react-router-dom";

const LawyerCard = ({admin, lawyer, key }) => {
  return (
    <div className=" w-full flex gap-[3rem] bg-white rounded-3xl">
      <img src={maria} className=" rounded-s-3xl " alt="" />
      <div className=" flex flex-col basis-[70%] gap-4 my-6">
        <div className=" basis-[45%] border-b border-b-lightTypo flex justify-between">
          <div className=" flex flex-col basis-[30%] gap-3 pb-6 ">
            <div className=" font-bold space-x-4">
              {" "}
              {lawyer?.avocat?.first_name} {lawyer?.avocat?.last_name}
            </div>
            <small className="text-gray-400">{lawyer?.avocat.ville}</small>

            <div className=" flex items-center gap-4 min-w-max ">
              {" "}
              <img src={msg} alt="" />
              Email : {lawyer?.avocat.email}{" "}
            </div>

            <div className=" flex items-center gap-4 min-w-max ">
              {" "}
              <img src={phone} alt="" />
              Numéro de téléphone : {lawyer?.avocat.telephone}{" "}
            </div>
          </div>
          <Link to={`/profile/${lawyer?.avocat.id}`}>
            <button className=" hover:bg-opacity-70 w-max h-max px-6 py-1 text-base bg-primary text-white">
              Voir Profil
            </button>
          </Link>
          <button>  Appro </button>
        </div>
        <div className=" basis-[45%]"> {lawyer?.speciality_name}</div>
      </div>
    </div>
  );
};

export default LawyerCard;
