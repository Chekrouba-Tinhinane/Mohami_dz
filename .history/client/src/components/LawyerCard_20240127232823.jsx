import React from "react";
import maria from "../assets/maria/maria.jpg";
import msg from "../assets/icons/contact/msg.svg";
import phone from "../assets/icons/contact/phone.svg";

const LawyerCard = ({ lawyer, key }) => {
  return (
    <div className=" w-full flex gap-[3rem] bg-white rounded-3xl">
      <img src={maria} className=" rounded-s-3xl " alt="" />
      <div className=" flex flex-col basis-[70%] gap-4 my-6">
        <div className=" basis-[45%] border-b border-b-lightTypo flex justify-between">
          <div className=" flex flex-col basis-[30%] gap-3 pb-6 ">
            <div className=" flex items-center gap-4 min-w-max ">
              {" "}
              <img src={msg} alt="" />
              Email :  {lawyer.email}{" "}
            </div>
            <small className="text-gray-400">{lawyer.ville}</small>

            <div className=" flex items-center gap-4 min-w-max ">
              {" "}
              <img src={phone} alt="" />
              Numéro de téléphone : {lawyer.avocat.telephone}{" "}
            </div>
          </div>
          <button className=" hover:bg-opacity-70 w-max h-max px-6 py-1 text-base bg-primary text-white">
            Voir Profil
          </button>
        </div>
        <div className=" basis-[45%]"> {lawyer.speciality}</div>
      </div>
    </div>
  );
};

export default LawyerCard;
