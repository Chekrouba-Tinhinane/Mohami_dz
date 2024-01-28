import React, { useState, useEffect } from "react";
import { Rating } from "@mui/material";
import Coords from "./components/Coords";
import Location from "./components/Location";
import axios from "axios";
import { useUserData } from "./App";
import Footer from "./components/super/Footer";

const OwnProfile = ({ lawyer }) => {
  const [ratings, setRatings] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const { userData } = useUserData();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const ratingsResponse = await axios.get(
          `http://192.168.137.210:8000/ratings/avocat_rating?id=${userData?.id}`,
        );
        setRatings(ratingsResponse.data);

        const pendingRequestsResponse = await axios.post(
          `http://192.168.137.210:8000/rdv/afficher_rdv_par_avocat`,
          userData?.id
        );
        setPendingRequests(pendingRequestsResponse.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        // Handle errors here, e.g., show an error message to the user
      }
    };

    fetchProfileData();
  }, [lawyer?.id, userData?.id]);

  const setAvailability = async () => {
    // Implement setAvailability logic here
  };

  return (
    <>
      <div className="flex flex-col gap-[4rem] mx-[4rem] my-4 py-8 px-12 bg-lightBrown min-h-max relative">
        <div className="border-b border-gray-300 pb-4">
          <h3 className="text-lg font-semibold mb-4">Vos Avis</h3>
          {ratings.length > 0 ? (
            ratings?.map((rating, index) => (
              <div key={index} className="flex justify-between">
                <div>
                  <p>{rating?.rating}</p>
                  <Rating
                    name={`rating-${index}`}
                    value={rating?.value}
                    readOnly
                  />
                </div>
                <p>{rating?.date}</p>
              </div>
            ))
          ) : (
            <p>Aucun avis disponible pour le moment.</p>
          )}
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
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Demandes en Attente</h3>
          {pendingRequests.length > 0 ? (
            pendingRequests.map((request, index) => (
              <div key={index} className="flex justify-between">
                <div>
                  <p>{request?.description}</p>
                  <p>{request?.date}</p>
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
    </>
  );
};

export default OwnProfile;
