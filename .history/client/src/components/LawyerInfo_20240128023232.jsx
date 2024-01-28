import React from 'react'
import msg from "../assets/icons/contact/msg.svg";
import phone from "../assets/icons/contact/phone.svg";

const LawyerInfo = ({lawyer, onClick}) => {
    return (
      <div className=" flex flex-col basis-[30%] border-l border-l-primary gap-6 pl-8">
        <div className=" flex items-center gap-4 ">
          {" "}
          <img src={msg} alt="" />
          Email : {lawyer?.avocat.email || lawyer?.email}
        </div>
        <div className=" flex items-center gap-4 ">
          {" "}
          <img src={phone} alt="" />
          Numéro de téléphone : {lawyer?.avocat.telephone || lawyer.telephone}
        </div>
        <p className="text-primary underline">{lawyer?.avocat.ville || lawyer?.ville }</p>
        <div className="flex flex-col h-full">
          {" "}
          <button onClick={onClick} className="bg-primary text-white px-4 py-3 place-self-end">
            Prendre Rendez-Vous
          </button>
        </div>
      </div>
    );
  }

export default LawyerInfo