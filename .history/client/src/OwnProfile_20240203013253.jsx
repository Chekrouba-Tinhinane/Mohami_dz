import React, { useState, useEffect } from "react";
import { Rating } from "@mui/material";
import Coords from "./components/Coords";
import Location from "./components/Location";
import axios from "axios";
import { useUserData } from "./App";
import Footer from "./components/super/Footer";
import AvailabilityForm from "./avocat/AvailabilityForm";
import phone from "./assets/icons/contact/phone.svg";
import calendar from "./assets/icons/appoint/calendar.svg";
import clock from "./assets/icons/appoint/clock.svg";
import { useTranslation } from "react-i18next";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const OwnProfile = ({ lawyer }) => {
  const { t } = useTranslation();
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);
  const { userData } = useUserData();
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [appointmentToArchive, setAppointmentToArchive] = useState(null);
  const [dummyPendingRequests, setDummyPendingRequests] = useState([]);


  const fetchRatings = async (id) => {
    const { data } = await axios.get(
      `http://backend:8000/ratings/avocat_rating?id=${id}`
    );
    return data;
  };

  const fetchPendingRequests = async (id) => {
    const { data } = await axios.post(
      `http://backend:8000/rdv/afficher_rdv_par_avocat`,
     id 
    );
    return data;
  };

  const { data: ratings, isLoading: ratingsLoading } = useQuery(
    ["ratings", lawyer?.avocat?.id],
    () => fetchRatings(lawyer?.avocat?.id)
  );

  const { data: pendingRequests, isLoading: requestsLoading } = useQuery(
    ["pendingRequests", lawyer?.avocat?.id],
    () => fetchPendingRequests(lawyer?.avocat?.id),
    {
      onError: () => {
        // If there's an error fetching pending requests, set dummy data
        setDummyPendingRequests([
          { id: 1, client: { email: "HAHAA" } },
          { id: 2, client: { email: "second" } },
        ]);
      },
    }
  );


  const setAvailability = () => {
    setShowAvailabilityModal(!showAvailabilityModal);
  };

  const handleArchive = (appointmentId) => {
    setAppointmentToArchive(appointmentId);
    setShowConfirmationDialog(true);
  };

  const handleConfirmArchive = async () => {
    try {
      // Implement the logic to archive the appointment using appointmentToArchive
      console.log("Appointment archived:", appointmentToArchive);
      // Remove the archived appointment from pendingRequests
      setPendingRequests((prevRequests) =>
        prevRequests.filter((request) => request.id !== appointmentToArchive)
      );
      // Close the confirmation dialog
      setShowConfirmationDialog(false);
    } catch (error) {
      console.error("Error archiving appointment:", error);
    }
  };

  const handleCloseConfirmationDialog = () => {
    setShowConfirmationDialog(false);
  };

  return (
    <>
      <div className="flex flex-col gap-[4rem] mx-[4rem] my-4 py-8 px-12 bg-lightBrown min-h-max relative">
        <h2>
          {t("hello")}, {lawyer?.avocat?.first_name || lawyer?.first_name}{" "}
          {lawyer?.avocat?.last_name || lawyer?.last_name}
        </h2>
        <div className="border-b border-gray-300 pb-4">
          <h3 className="text-lg font-semibold mb-4">
            {t("Contact and Personal Information")}
          </h3>
          <div className="space-y-8">
            <Coords
              lawyer={lawyer}
              self={userData?.avocat?.id === lawyer?.avocat?.id} // Use strict equality operator
            />
            <Location lawyer={lawyer} />
            <p>{t("Other personal information...")}</p>
          </div>
        </div>
        <div className="border-b border-gray-300 pb-4">
          <h3 className="text-lg font-semibold mb-4">{t("Your Reviews")}</h3>
          <div className="space-y-4">
            {ratings.length > 0 ? (
              ratings.map((rating, index) => (
                <Comment key={index} comment={rating} />
              )) // Add key prop
            ) : (
              <p>{t("No reviews available at the moment.")}</p>
            )}
          </div>
        </div>
        <div className="border-b border-gray-300 pb-4">
          <h3 className="text-lg font-semibold mb-4">{t("Availability")}</h3>
          <button
            onClick={setAvailability}
            className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-80"
          >
            {showAvailabilityModal
              ? t("Hide availability form")
              : t("Set availability")}
          </button>
          {showAvailabilityModal && <AvailabilityForm />}
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-lg font-semibold mb-4">
            {t("Pending Requests")}
          </h3>
          {pendingRequests.length > 0 ? (
            pendingRequests.reverse().map((request) => (
              <PendingRequest request={request} />
             
            ))
          ) : dummyRendingRequests.reverse().map((request) => (<PendingRequest  />))  :  (
            <p>{t("No pending requests at the moment.")}</p>
          )}
        </div>
      </div>
      <Footer />
      {/* Confirmation Dialog */}
      <Dialog
        open={showConfirmationDialog}
        onClose={handleCloseConfirmationDialog}
      >
        <DialogTitle>{t("Confirm Archive")}</DialogTitle>
        <DialogContent>
          {t("Are you sure you want to archive this appointment?")}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleConfirmArchive}
            className="bg-primary"
            variant="contained"
          >
            {t("Yes")}
          </Button>
          <Button onClick={handleCloseConfirmationDialog} variant="outlined">
            {t("Cancel")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default OwnProfile;

function Comment({ comment }) {
  return (
    <li className="flex justify-between bg-white p-3 rounded-md">
      <div className="flex flex-col gap-5">
        <strong>
          <div className="flex gap-3 items-center">
            <div className="flex flex-col">
              {comment?.client?.username}
              <Rating
                readOnly
                className=""
                name="simple-controlled"
                value={comment?.rating?.rating}
              />
            </div>
          </div>{" "}
        </strong>{" "}
        <p>{comment?.rating?.comment}</p>
      </div>
    </li>
  );
}

function PendingRequest({request}) {
  const { t } = useTranslation()
  return ( <div
    key={request.id}
    className="flex bg-white px-5 py-4 gap-4 justify-between rounded-md"
  >
    <div className="space-y-2 w-full">
      <p className="font-semibold text-xl text-lightTypo">
        {request?.client?.username || "imed"}
      </p>
      <p className="text-sm text-gray-400">
        {request?.client?.email}
      </p>
      <p className="flex items-center gap-2 font-semibold pb-3 border-b-2 border-b-primary">
        <span>
          <img src={phone} alt="" />
        </span>{" "}
        {request?.client?.telephone}
      </p>
      <p>
        <span className="font-bold gap-2 flex items-center">
          <img src={calendar} className="w-4" alt="" />
          {t("Appointment Date")}:
          <span className="font-normal">
            {request?.timing?.DateInterval || "1"}
          </span>
        </span>
      </p>
      <p className="flex items-center gap-2">
        <img src={clock} className="w-4" alt="" />
        <span className="font-bold">{t("Time")}: </span>
        {request?.timing?.HeureDebut || "a"} -{" "}
        {request?.timing?.HeureFin || "1"}
      </p>
    </div>
    <button
      onClick={() => handleArchive(request.id)}
      className="bg-primary text-white px-4 py-2 h-max w-max rounded-md hover:opacity-80"
    >
      {t("Accept")}
    </button>
  </div>)
}