import React, { useState, useEffect } from "react";
import { Rating } from "@mui/material";
import Coords from "./components/Coords";
import Location from "./components/Location";
import axios from "axios";
import { useUserData } from "./App";
import Footer from "./components/super/Footer";
import AvailabilityModal from "./components/AvailabilityModal";
import AvailabilityForm from "./AvailabilityForm";

const OwnProfile = ({ lawyer }) => {
  const [ratings, setRatings] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false); // State for controlling the modal visibility
  const { userData } = useUserData();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const ratingsResponse = await axios.get(
          `http://192.168.137.210:8000/ratings/avocat_rating?id=${1}`
        );
        setRatings(ratingsResponse.data);

        const pendingRequestsResponse = await axios.post(
          `http://192.168.137.210:8000/rdv/afficher_rdv_par_avocat`,
          1
        );
        setPendingRequests(pendingRequestsResponse.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        // Handle errors here, e.g., show an error message to the user
      }
    };

    fetchProfileData();
  }, [lawyer?.id, userData?.id]);

  const setAvailability = () => {
    setShowAvailabilityModal(true); // Open the availability modal
  };

  const handleCloseAvailabilityModal = () => {
    setShowAvailabilityModal(false); // Close the availability modal
  };

  return (
    <>
      <div className="flex flex-col gap-[4rem] mx-[4rem] my-4 py-8 px-12 bg-lightBrown min-h-max relative">
        <div className="border-b border-gray-300 pb-4">
          <h3 className="text-lg font-semibold mb-4">Vos Avis</h3>
          <div className="space-y-4">
            {ratings.length > 0 ? (
              ratings?.map((rating, index) => <Comment comment={rating} />)
            ) : (
              <p>Aucun avis disponible pour le moment.</p>
            )}
          </div>
        </div>
        <div className="border-b border-gray-300 pb-4">
          <h3 className="text-lg font-semibold mb-4">
            Coordonnées et Informations Personnelles
          </h3>
          <Coords lawyer={lawyer} self={true} />
          <Location lawyer={lawyer} />
          <p>Autres informations personnelles...</p>
        </div>
        <div className="border-b border-gray-300 pb-4">
          <h3 className="text-lg font-semibold mb-4">Disponibilité</h3>
          <button
            onClick={setAvailability}
            className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-80"
          >
            Définir la disponibilité
          </button>
          
            <AvailabilityForm />
    
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-lg font-semibold mb-4">Demandes en Attente</h3>
          {pendingRequests?.length > 0 ? (
            pendingRequests?.map((request, index) => (
              <div key={index} className="flex gap-4 justify-between">
                <div>
                  <p>{request?.client?.username}</p>
                  <p>{request?.client?.email}</p>
                  <p>{request?.client?.telephone}</p>
                  <p>{request?.timing?.DateInterval}</p>
                  <p>{request?.timing?.HeureDebut} - 
                  {request?.timing?.HeureFin}</p>


                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-80">
                  Accepter
                </button>
              </div>
            ))
          ) : (
            <p>Aucune demande en attente pour le moment.</p>
          )}
        </div>
      </div>
      <Footer />

      {/* Modal for availability form */}
      
    </>
  );
};

export default OwnProfile;

function Comment({ comment }) {
  const { userData } = useUserData();
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
