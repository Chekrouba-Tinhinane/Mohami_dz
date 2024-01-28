import React, { useState } from "react";
import AvailabilityForm from "./AvailabilityForm";

const AvailabilityModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <AvailabilityForm handleClose={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailabilityModal;
