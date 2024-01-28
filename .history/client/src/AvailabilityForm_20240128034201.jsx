import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import AvailabilityForm from "./AvailabilityForm"; // Import the AvailabilityForm component

const SetAvailabilityModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <AvailabilityForm />
      </div>
    </div>
  );
};

const SetAvailabilityButton = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-80"
      >
        Définir la disponibilité
      </button>
      {showModal && <SetAvailabilityModal onClose={closeModal} />}
    </div>
  );
};

export default SetAvailabilityButton;
