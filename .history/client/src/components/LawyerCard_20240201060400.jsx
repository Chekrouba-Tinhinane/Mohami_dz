import React, { useState, useEffect } from "react";
import maria from "../assets/maria/maria.jpg";
import msg from "../assets/icons/contact/msg.svg";
import phone from "../assets/icons/contact/phone.svg";
import { Link } from "react-router-dom";
import { useUserData } from "../App";
import axios from "axios";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

const LawyerCard = ({ allL, admin, lawyer, onDelete, onApprove }) => {
  const { lawyers, setLawyers } = useUserData();
  const { t } = useTranslation();
  const [openDialog, setOpenDialog] = useState(false);

  const handleApproving = async () => {
    try {
      await axios.post(
        `http://192.168.137.210:8000/avocat/avocat_verify`,
        lawyer?.avocat?.id
      );
      onApprove(lawyer?.avocat?.id);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async () => {
    setOpenDialog(true);
  };
  const confirmDelete = async () => {
    try {
      await axios.post(
        `http://backend:8000/avocat/avocat_delete`,
        lawyer?.avocat?.id
      );
      onDelete(lawyer?.avocat?.id); // Remove the lawyer from the list on deletion
      console.log("Lawyer deleted successfully.");
    } catch (error) {
      console.error("Error deleting lawyer:", error);
    }
  };
  const cancelDelete = () => {
    setOpenDialog(false);
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
              {t("Email")}: {lawyer?.avocat?.email}
            </div>

            <div className="flex items-center gap-4 min-w-max ">
              {" "}
              <img src={phone} alt="" />
              {t("Phone Number")}: {lawyer?.avocat?.telephone}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <Link to={`/profile/${lawyer?.avocat?.id}`}>
              <button className="hover:bg-opacity-70 w-full h-max px-6 py-1 text-base bg-primary text-white">
                {t("View Profile")}
              </button>
            </Link>
            {admin && allL && (
              <>
                <button
                  onClick={handleApproving}
                  className="hover:bg-lightTypo hover:text-white font-medium w-full h-max px-6 py-1 text-base border border-primary rounded-sm  text-primary"
                >
                  {t("Approve Lawyer")}
                </button>
                <button
                  onClick={handleDelete}
                  className="hover:bg-red-400 hover:text-white  font-medium w-full h-max px-6 py-1 text-base border border-red-400 rounded-sm  text-red-400"
                >
                  {t("Delete")}
                </button>
              </>
            )}
          </div>
        </div>
        <div className="basis-[45%]"> {lawyer?.speciality_name}</div>
      </div>
      <Dialog open={openDialog} onClose={cancelDelete}>
        <DialogTitle>{t("Confirmation")}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t("Are you sure you want to delete this lawyer?")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={confirmDelete} variant="contained" color="error">
            {t("Confirm")}
          </Button>
          <Button onClick={cancelDelete} variant="contained">
            {t("Cancel")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LawyerCard;
