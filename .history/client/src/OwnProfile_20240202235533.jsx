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
  const [ratings, setRatings] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);
  const { userData } = useUserData();
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [appointmentToArchive, setAppointmentToArchive] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const ratingsResponse = await axios.get(
          `http://backend:8000/ratings/avocat_rating?id=${lawyer?.avocat?.id}`
        );
        setRatings(ratingsResponse.data);

        const pendingRequestsResponse = await axios.post(
          `http://backend:8000/rdv/afficher_rdv_par_avocat`,
          lawyer?.avocat?.id
        );
        setPendingRequests(pendingRequestsResponse.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, [lawyer?.avocat?.id, userData?.id]);

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
        {/* Content */}
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
          <Button onClick={handleConfirmArchive} variant="contained">
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
