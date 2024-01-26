import React from "react";
import msg from '../assets/icons/contact/msg.svg'
import phone from '../assets/icons/contact/phone.svg'


const Profile = () => {
  return <div className=" mx-4 bg-lightBrown min-h-max"><Coords /> </div>;
};

export default Profile;

function Coords() {
  return (
    <div className="flex">
      <div className=" flex-col basis-[70%]">
        <h2>William King</h2>
        <h4>Region, Ville, 11000</h4>
        <div className="flex ">
            <div className=" bg-gray-300 h-56 w-56"></div>
            <div className="flex flex-col"> Rating here
            <p>Spécialité: Droits administratifs <a href="" className=" text-primary underline">Voir plus</a></p>
            </div>
        </div>
      </div>





      <div className=" flex-col basis-[30%] border-l border-l-primary">
        <div className=" flex items-center "> <img src={msg} alt="" />Email :email_81194@gmail.com </div>
        <div className=" flex items-center "> <img src={phone} alt="" />Numéro de téléphone : 000-000-000 </div>
        <p className="text-primary underline">HP Law, PLLC</p> 
        <button className="bg-primary p-3 justify-self-end items-end h-full">Prendre Rendez-Vous</button>


      </div>
    </div>
  );
}
