import React, { useState, useEffect } from "react";
import NavBar from "./super/NavBar";
import pfp from "../assets/profile/pfp.jpg";
import { Rating } from "@mui/material";
import Coords from "./Coords";
import Calendar from "./super/Calendar";
import Location from "./Location";
import Modal from "react-modal";
import close from "../assets/icons/x.svg";
import calendar from "../assets/icons/appoint/calendar.svg";
import Review from "./Review";
import { useParams } from "react-router-dom";

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

const Profile = ({ lawyers }) => {
  const { id } = useParams();
  const [lawyer, setLawyer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const selectedLawyer = lawyers.find(lawyer => {
      console.log("ID from URL:", id);
      console.log("Lawyer's avocat.id:", lawyer.avocat.id.toString());
      return lawyer.avocat.id.toString() === id;
    });
        setLawyer(selectedLawyer);
  }, [id, lawyers]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navLinks = [
    { label: "A propos", id: "about", offset: -50 },
    { label: "Catégories", id: "categories", offset: 0 },
    { label: "Avis", id: "reviews", offset: 50 },
    { label: "Localisation", id: "location", offset: -100 },
  ];

  return (
    <div className="flex flex-col items-center mx-4 py-8 px-12 bg-lightBrown min-h-max relative">
      <CalendarModal isOpen={isModalOpen} onRequestClose={closeModal} />
      <Coords onClick={openModal} />
      <NavBar links={navLinks} landing={false} />
      {lawyer && (
        <>
          <About lawyer={lawyer.avocat} />
          <Categories speciality={lawyer.speciality_name} />
          <Avis profileName={`${lawyer.avocat.first_name} ${lawyer.avocat.last_name}`} />
          <div className="w-full my-8"></div>
          <Location lawyer={lawyer.avocat} />
          <Review />
        </>
      )}
    </div>
  );
};

export default Profile;

function CalendarModal({ isOpen, onRequestClose }) {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleToggleCalendar = () => {
    setShowCalendar((prevShowCalendar) => !prevShowCalendar);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Prendre un rendez-vous"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md z-50 w-[600px] h-[436px]  "
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 backdrop-blur-xs z-40"
    >
      <div className={`flex h-full ${showCalendar ? " flex gap-[2rem]" : ""}`}>
        <div
          className={`  ${
            showCalendar ? "basis-[60%]" : " w-full"
          } flex flex-col justify-center  flex-shrink-0 `}
        >
          <div className="flex w-full justify-between border-b border-b-primary pb-4">
            <h3>Prendre un rendez-vous</h3>
            <button onClick={onRequestClose}>
              <img src={close} className="border border-primary p-2" alt="" />
            </button>
          </div>
          <h3 className="py-5">Choisissez la date et les horaires</h3>
          <div
            className="flex border border-primary py-2 px-2 gap-3 cursor-pointer"
            onClick={handleToggleCalendar}
          >
            <img src={calendar} className="w-4" alt="" />
            <div className="flex flex-col">
              <small>DATE</small>
              <p className="font-medium">Sélectionner une date</p>
            </div>
          </div>
          <div className="flex-grow"></div>
          <div className="flex justify-end">
            <button
              className="bg-primary text-white px-4 py-1"
              onClick={onRequestClose}
            >
              Réserver
            </button>
          </div>
        </div>
        {showCalendar && (
          <div className="w-full place-self-center">
            <Calendar />
          </div>
        )}
      </div>
    </Modal>
  );
}

function About({ lawyer }) {
  return (
    <div
      id="about"
      className=" w-full gap-[2rem] flex flex-col border-t-2 border-t-lightTypo opacity-70  pt-2"
    >
      <div className="w-[90%] flex flex-col gap-[2rem] tracking-wide ">
        <p>
          <strong>Nom: </strong> {lawyer.first_name} {lawyer.last_name}
        </p>
        <p>
          <strong>Email: </strong> {lawyer.email}
        </p>
        <p>
          <strong>Ville: </strong> {lawyer.ville}
        </p>
        <p>
          <strong>Langue: </strong> {lawyer.langue}
        </p>
        <p>
          <strong>Site Web: </strong> <a href={lawyer.siteweb}>{lawyer.siteweb}</a>
        </p>
      </div>
    </div>
  );
}

function Categories({ speciality }) {
  return (
    <div
      id="categories"
      className=" w-full my-[3rem] border-t-2 border-t-lightTypo opacity-70  pt-2"
    >
      <h3 className="font-semibold tracking-wide text-lightTypo">Spécialité</h3>
      <p>{speciality}</p>
    </div>
  );
}

function Avis({ profileName }) {
  const comments = lawyerComments[profileName] || [];

  return (
    <div
      id="reviews"
      className=" w-full my-[3rem] border-t-2 border-t-lightTypo opacity-70  pt-2 flex flex-col gap-3"
    >
      <div className="flex justify-between font-semibold tracking-wide text-lightTypo">
        Avis
        <GiveFeedBack />
      </div>
      {/* Assuming Rating component is imported */}
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}

function GiveFeedBack() {
  return <div className="">Give Feedback</div>;
}

function Comment({ comment }) {
  return (
    <li className="flex justify-between bg-white p-3 rounded-md">
      <div className=" flex flex-col gap-5">
        <strong>
          <div className="flex gap-3 items-center">
            <img src={pfp} alt="" />{" "}
            <div className=" flex flex-col">
              {comment.user}
              <Rating
                className=""
                name="simple-controlled"
                value={comment?.rating}
              />
            </div>
          </div>{" "}
        </strong>{" "}
        <p>{comment.text}</p>
      </div>
      date
    </li>
  );
}
