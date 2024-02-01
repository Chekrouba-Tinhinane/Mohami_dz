import React, { useState, useEffect } from "react";
import { Rating } from "@mui/material";
import Coords from "./components/Coords";
import Location from "./components/Location";
import axios from "axios";
import { useUserData } from "./App";
import Footer from "./components/super/Footer";
import AvailabilityForm from "./AvailabilityForm";
import phone from "./assets/icons/contact/phone.svg";
import calendar from "./assets/icons/appoint/calendar.svg";
import clock from "./assets/icons/appoint/clock.svg";
import { useTranslation } from "react-i18next";

const OwnProfile = ({ lawyer }) => {
  const { t } = useTranslation()
  const [ratings, setRatings] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false); // State for controlling the modal visibility
  const { userData } = useUserData();

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
        // Handle errors here, e.g., show an error message to the user
      }
    };

    fetchProfileData();
  }, [lawyer?.avocat?.id, userData?.id]);

  const setAvailability = () => {
    setShowAvailabilityModal(!showAvailabilityModal); // Toggle the visibility of the availability modal
  };

  return (
    <>
      <div className="flex flex-col gap-[4rem] mx-[4rem] my-4 py-8 px-12 bg-lightBrown min-h-max relative">
        <h2>{t("hello")}, {lawyer?.avocat?.first_name || lawyer?.first_name} {lawyer?.avocat?.last_name || lawyer?.last_name}</h2> 
        <div className="border-b border-gray-300 pb-4">          
          <h3 className="text-lg font-semibold mb-4">
            {t("Contact and Personal Information")}
          </h3>
          <div className="space-y-8">
            <Coords
              lawyer={lawyer}
              self={userData?.avocat?.id == lawyer?.avocat?.id}
            />
            <Location lawyer={lawyer} />
            <p>{t("Other personal information...")}</p>
          </div>
        </div>
        <div className="border-b border-gray-300 pb-4">
          <h3 className="text-lg font-semibold mb-4">{t("Your Reviews")}</h3>
          <div className="space-y-4">
            {ratings.length > 0 ? (
              ratings?.map((rating, index) => <Comment comment={rating} />)
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
          <h3 className="text-lg font-semibold mb-4">{t("Pending Requests")}</h3>
  
          {pendingRequests?.length > 0 ? (
            pendingRequests?.map((request, index) => (
              <div
                key={index}
                className="flex bg-white px-5 py-4 gap-4 justify-between rounded-md"
              >
                <div className="space-y-2 w-full">
                  <p className="font-semibold text-xl text-lightTypo">
                    {request?.client?.username}
                  </p>
                  <p className="text-sm text-gray-400">
                    {request?.client?.email}
                  </p>
                  <p className="flex items-center gap-2 font-semibold pb-3 border-b-2 border-b-primary">
                    <span>
                      {" "}
                      <img src={phone} alt="" />{" "}
                    </span>{" "}
                    {request?.client?.telephone}
                  </p>
                  <p className="">
                    <span className="font-bold gap-2 flex items-center">
                      {" "}
                      <img src={calendar} className="w-4" alt="" />{" "}
                      {t("Appointment Date")}:
                      <span className="font-normal">
                        {request?.timing?.DateInterval}
                      </span>
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    {" "}
                    <img src={clock} className="w-4" alt="" />{" "}
                    <span className="font-bold">{t("Time")}: </span>{" "}
                    {request?.timing?.HeureDebut} - {request?.timing?.HeureFin}
                  </p>
                </div>
                <button className="bg-primary text-white px-4 py-2 h-max w-max rounded-md hover:opacity-80">
                  {t("Accept")}
                </button>
              </div>
            ))
          ) : (
            <p>{t("No pending requests at the moment.")}</p>
          )}
        </div>
      </div>
      <Footer />
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
