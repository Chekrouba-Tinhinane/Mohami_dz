import React from "react";

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

      </div>
    </div>
  );
}
