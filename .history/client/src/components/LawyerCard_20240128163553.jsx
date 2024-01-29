import React, { useState, useEffect } from "react";
import maria from "../assets/maria/maria.jpg";
import msg from "../assets/icons/contact/msg.svg";
import phone from "../assets/icons/contact/phone.svg";
import { Link } from "react-router-dom";
import { useUserData } from "../App";
import axios from "axios";

const LawyerCard = ({ admin, lawyer, onDelete }) => {
  const { lawyers, setLawyers } = useUserData();

  const handleApproving = () => {
    axios
      .post(`http://192.168.137.210:8000/avocat/avocat_verify`, lawyer?.avocat?.id)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDelete = async () => {
    try {
      await axios.post(`http://192.168.137.210:8000/avocat/avocat_delete`, lawyer?.avocat?.id);
      onDelete(lawyer?.avocat?.id); // Remove the lawyer from the list on deletion
      console.log("Lawyer deleted successfully.");
    } catch (error) {
      console.error("Error deleting lawyer:", error);
    }
  };

  return (
    <div className="w-full flex gap-[3rem] bg-white rounded-3xl">
      <img src={maria} className="rounded-s-3xl" alt="" />
      <div className="flex flex-col basis-[70%] gap-4 my-6">
        <div className="basis-[45%] border-b border-b-lightTypo flex justify-between">
          <div className="flex flex-col basis-[30%] gap-3 pb-6 ">
            <div className="font-bold space-x-4">
              {" "}
              {lawyer?.avocat?.first_name} {lawyer?.avocat?.last_name}
            </div>
            <small className="text-gray-400">{lawyer?.avocat?.ville}</small>

            <div className="flex items-center gap-4 min-w-max ">
              {" "}
              <img src={msg} alt="" />
              Email : {lawyer?.avocat?.email}{" "}
            </div>

            <div className="flex items-center gap-4 min-w-max ">
              {" "}
              <img src={phone} alt="" />
              Numéro de téléphone : {lawyer?.avocat?.telephone}{" "}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <Link to={`/profile/${lawyer?.avocat?.id}`}>
              <button className="hover:bg-opacity-70 w-full h-max px-6 py-1 text-base bg-primary text-white">
                Voir Profil
              </button>
            </Link>
            {admin && (
              <>
                <button
                  onClick={handleApproving}
                  className="hover:bg-lightTypo hover:text-white font-medium w-full h-max px-6 py-1 text-base border border-primary rounded-sm  text-primary"
                >
                  {" "}
                  Approver Avocat{" "}
                </button>
                <button
                  onClick={handleDelete}
                  className="hover:bg-red-400 text-white  font-medium w-full h-max px-6 py-1 text-base border border-red-400 rounded-sm  text-red-400"
                >
                  Supprimer
                </button>
              </>
            )}
          </div>
        </div>
        <div className="basis-[45%]"> {lawyer?.speciality_name}</div>
      </div>
    </div>
  );
};

export default LawyerCard;
