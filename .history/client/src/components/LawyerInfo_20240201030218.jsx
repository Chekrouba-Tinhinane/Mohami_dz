import React from "react";
import msg from "../assets/icons/contact/msg.svg";
import phone from "../assets/icons/contact/phone.svg";
import { useUserData } from "../App";
import { useTranslation } from 'react-i18next';

const LawyerInfo = ({ lawyer, onClick, self }) => {
  const { t } = useTranslation(); 
  const { userData } = useUserData()
  return (
    <div className=" flex flex-col basis-[30%] border-l border-l-primary gap-6 pl-8">
      <div className=" flex items-center gap-4 ">
        {" "}
        <img src={msg} alt="" />
        {t("email")}: {lawyer?.avocat?.email || lawyer?.email}
      </div>
      <div className=" flex items-center gap-2.5 ">
        <img src={phone} alt="" />
        {t("phoneNumber")}: {lawyer?.avocat?.telephone || lawyer?.telephone}
      </div>
      <p className="text-primary underline">
        {t("city")}: {lawyer?.avocat?.ville || lawyer?.ville}
      </p>
      <div className="flex flex-col h-full">
        { self ? null : (
          <button
            onClick={onClick}
            className="bg-primary text-white px-4 py-3 place-self-end"
          >
            {t("makeAppointment")}
          </button>
        )}
      </div>
    </div>
  );
};

export default LawyerInfo;
