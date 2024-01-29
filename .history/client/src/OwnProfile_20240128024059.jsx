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
    // Fetch ratings for the lawyer
    const fetchRatings = async () => {
      try {
        const response = await axios.post(
          `http://192.168.137.210:8000/rating/avocat_rating`,
          userData?.id
        );
        console.log(response.data);
        setRatings(response.data);
      } catch (error) {
        console.error("Error fetching ratings:", error);
      }
    };

    // Fetch pending requests for the lawyer
    const fetchPendingRequests = async () => {
      try {
        const response = await axios.post(
          `http://192.168.137.210:8000/rdv/afficher rdv_par_avocat`,
          userData?.id
        );
        console.log(response.data);
        setPendingRequests(response.data);
      } catch (error) {
        console.error("Error fetching pending requests:", error);
      }
    };

    fetchRatings();
    fetchPendingRequests();
  }, [lawyer?.id]);

  // Function to handle setting availability
  const setAvailability = async () => {
    // Logic to set availability, call API endpoint, etc.
  };

  return (
    <>
      <div className="flex flex-col mx-[4rem] my-4 py-8 px-12 bg-lightBrown min-h-max relative">
        <div className="border-b border-gray-300 pb-4">
          <h3 className="text-lg font-semibold mb-4">Vos Avis</h3>
          {ratings.length > 0 ? (
            ratings.map((rating, index) => (
              <div key={index} className="flex justify-between">
                <div>
                  <p>{rating.comment}</p>
                  <Rating
                    name={`rating-${index}`}
                    value={rating.value}
                    readOnly
                  />
                </div>
                <p>{rating.date}</p>
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
                  <p>{request.description}</p>
                  <p>{request.date}</p>
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
