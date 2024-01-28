import React, { useState, useEffect } from "react";
import NavBar from "./super/NavBar";
import pfp from "../assets/profile/pfp.jpg";
import { Rating } from "@mui/material";
import Coords from "./Coords";
import Location from "./Location";
import axios from "axios";
import { useUserData } from "../App";

const lawyerComments = {
  "John Doe": [
    {
      user: "Alice",
      text: "John is an excellent lawyer. He helped me win my case.",
    },
    {
      user: "Bob",
      text: "I highly recommend John. He is very professional and dedicated.",
    },
    {
      user: "Charlie",
      text: "John provided me with great legal advice. I'm grateful for his help.",
    },
  ],
  "Emily Smith": [
    {
      user: "David",
      text: "Emily is a fantastic lawyer. She guided me through a difficult legal process.",
    },
    {
      user: "Emma",
      text: "I'm so thankful for Emily's expertise. She resolved my legal issue efficiently.",
    },
    {
      user: "Frank",
      text: "Highly satisfied with Emily's services. She exceeded my expectations.",
    },
  ],
};

const OwnProfileAvis = ({ lawyer }) => {
  const [ratings, setRatings] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const { userData } = useUserData();

  useEffect(() => {
    // Fetch ratings for the lawyer
    const fetchRatings = async () => {
      try {
        const response = await axios.get(
          `http://your-api-endpoint/ratings?lawyerId=${lawyer.id}`
        );
        setRatings(response.data);
      } catch (error) {
        console.error("Error fetching ratings:", error);
      }
    };

    // Fetch pending requests for the lawyer
    const fetchPendingRequests = async () => {
      try {
        const response = await axios.get(
          `http://your-api-endpoint/requests?lawyerId=${lawyer.id}&status=pending`
        );
        setPendingRequests(response.data);
      } catch (error) {
        console.error("Error fetching pending requests:", error);
      }
    };

    fetchRatings();
    fetchPendingRequests();
  }, [lawyer.id]);

  // Function to handle setting availability
  const setAvailability = async () => {
    // Logic to set availability, call API endpoint, etc.
  };

  return (
    <div className="my-[3rem] flex flex-col gap-3">
      <div className="border-t-2 border-t-lightTypo opacity-70 py-2">
        <h3 className="font-semibold tracking-wide text-lightTypo">Vos Avis</h3>
        {ratings.length > 0 ? (
          ratings.map((rating, index) => (
            <div key={index} className="flex justify-between">
              <div>
                <p>{rating.comment}</p>
                <Rating name={`rating-${index}`} value={rating.value} readOnly />
              </div>
              <p>{rating.date}</p>
            </div>
          ))
        ) : (
          <p>Aucun avis disponible pour le moment.</p>
        )}
      </div>
      <div className="border-t-2 border-t-lightTypo opacity-70 py-2">
        <h3 className="font-semibold tracking-wide text-lightTypo">Coordonnées et Informations Personnelles</h3>
        <Coords lawyer={lawyer} />
        <Location lawyer={lawyer} />
        <p>Autres informations personnelles...</p>
      </div>
      <div className="border-t-2 border-t-lightTypo opacity-70 py-2">
        <h3 className="font-semibold tracking-wide text-lightTypo">Disponibilité</h3>
        <button onClick={setAvailability} className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-80">
          Définir la disponibilité
        </button>
      </div>
      <div className="border-t-2 border-t-lightTypo opacity-70 py-2">
        <h3 className="font-semibold tracking-wide text-lightTypo">Demandes en Attente</h3>
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
  );
};

export default OwnProfileAvis;
