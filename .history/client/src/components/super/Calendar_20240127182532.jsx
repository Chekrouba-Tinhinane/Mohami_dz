import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactCalendar from "react-calendar";
import { FixedSizeList } from "react-window";
import { add, format, isAfter, differenceInMinutes } from "date-fns";
import { getDaysArray, INTERVAL } from "../../config";
import "../../Calendar.css";
import axios from "axios";

const handleBooking = async () => {
  // Define the booking data
  const bookingData = {
    id_client: 1, // Replace with the actual client ID
    id_avocat: 1, // Replace with the actual lawyer ID
    id_free_time_slot: 1, // Replace with the actual free time slot ID
  };

  try {
    // Make a POST request to book the appointment
    const response = await axios.post(
      "http://192.168.137.210:8000/rdv/prendre_rdv",
      bookingData,
      {
        headers: {
          // Include the authorization token in the request headers
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsInJvbGUiOiJjbGllbnQifQ.83gClcAqtKAETOwBYOtLfj0qhi8ZoCcD9ycq3q-IbK4`,
        },
      }
    );
    // Log the response data and a success message
    console.log(response.data);
    console.log("Appointment booked!");
  } catch (error) {
    // Log any errors
    console.error("Error booking appointment:", error);
  }
};
const handleBooking = async () => {
    // Define the booking data
    const bookingData = {
      id_client: 1, // Replace with the actual client ID
      id_avocat: 1, // Replace with the actual lawyer ID
      id_free_time_slot: 1, // Replace with the actual free time slot ID
    };
  
    try {
      // Make a POST request to book the appointment
      const response = await axios.post(
        "http://192.168.137.210:8000/rdv/prendre_rdv",
        bookingData,
        {
          headers: {
            // Include the authorization token in the request headers
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsInJvbGUiOiJjbGllbnQifQ.83gClcAqtKAETOwBYOtLfj0qhi8ZoCcD9ycq3q-IbK4`,
          },
        }
      );
      // Log the response data and a success message
      console.log(response.data);
      console.log("Appointment booked!");
    } catch (error) {
      // Log any errors
      console.error("Error booking appointment:", error);
    }
  };