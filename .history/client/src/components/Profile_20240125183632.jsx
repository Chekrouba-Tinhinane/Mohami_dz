import React from "react";
import msg from "../assets/icons/contact/msg.svg";
import phone from "../assets/icons/contact/phone.svg";

const Profile = () => {
  return (
    <div className=" mx-4 bg-lightBrown min-h-max">
      <Coords />{" "}
    </div>
  );
};

export default Profile;

function Coords() {
  return (
    <div className="flex py-3 px-12 items-center">
      <div className=" basis-[70%] flex flex-col gap-4 ">
        <div className="flex flex-col gap-2">
          {" "}
          <h2>William King</h2>
          <h4>Region, Ville, 11000</h4>
        </div>
        <div className="flex gap-8 ">
          <div className=" bg-gray-300 h-64 w-56"></div>
          <div className="flex flex-col gap-3">
            Rating here
            <p>
              <span className=" font-semibold">Spécialité:</span>  <span className=" font-light">Droits administratifs </span>
              <a href="" className=" text-primary underline">
                Voir plus
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col basis-[30%] border-l border-l-primary h-full">
        <div className=" flex items-center ">
          {" "}
          <img src={msg} alt="" />
          Email :email_81194@gmail.com{" "}
        </div>
        <div className=" flex items-center ">
          {" "}
          <img src={phone} alt="" />
          Numéro de téléphone : 000-000-000{" "}
        </div>
        <p className="text-primary underline">HP Law, PLLC</p>
        <div className="flex flex-col h-full">
          {" "}
          <button className="bg-primary p-3 place-self-end">
            Prendre Rendez-Vous
          </button>
        </div>
      </div>
    </div>
  );
}