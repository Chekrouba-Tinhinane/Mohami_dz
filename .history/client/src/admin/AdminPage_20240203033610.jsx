import React, { useState, useEffect } from "react";
import Footer from "../components/super/Footer";
import { useUserData } from "../App";
import EvalLawyers from "../components/EvalLawyers";
import axios from "axios";
import { useTranslation } from "react-i18next";

const AdminPage = () => {
  const { userData, setUserData, lawyers, setLawyers } = useUserData();
  const [pendingLawyers, setPendingLawyers] = useState([]);
  /*   const [approvedLawyers, setApprovedLawyers] = useState([]);
   */ const [showPending, setShowPending] = useState(true);

  useEffect(() => {
    const fetchPendingLawyers = async () => {
      try {
        const response = await axios.get(
          "http://192.168.137.210:8000/avocat/avocat_pending"
        );
        console.log(response.data);
        setPendingLawyers(response.data);
      } catch (error) {
        console.error("Error fetching pending lawyers:", error);
      }
    };

    fetchPendingLawyers(); // Call fetchPendingLawyers when the component mounts
    /* fetchApprovedLawyers(); */ // Call fetchApprovedLawyers when the component mounts
  }, []); // Empty dependency array ensures functions are called only once

  const handleDeleteLawyer = (lawyerId) => {
    setPendingLawyers((prevLawyers) =>
      prevLawyers.filter((lawyer) => lawyer.avocat.id !== lawyerId)
    );
    // Remove from approved lawyers as well if deleted from there
    /* setApprovedLawyers((prevLawyers) =>
      prevLawyers.filter((lawyer) => lawyer.avocat.id !== lawyerId)
    ); */
  };
  const handleApproving = async (lawyerId) => {
    try {
      await axios.post(
        `http://192.168.137.210:8000/avocat/avocat_verify`,
        lawyerId
      );
      console.log("Lawyer approved successfully.");
      // Remove the approved lawyer from the pending lawyers list
      setPendingLawyers((prevLawyers) =>
        prevLawyers.filter((lawyer) => lawyer.avocat.id !== lawyerId)
      );
    } catch (error) {
      console.error("Error approving lawyer:", error);
    }
  };

  const toggleView = () => {
    setShowPending((prev) => !prev);
  };
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full min-h-screen ">
      <div className="flex flex-col w-full min-h-screen">
        <div className="flex flex-col mx-[4rem] gap-[5rem]">
          <div className="">
            <h2 onClick={() => console.log(userData)} className="recursive">
              {t("Lawyer List")}
            </h2>
            {/* Toggle button for switching between pending and approved */}
            <button
              onClick={toggleView}
              className="bg-primary text-white font-semibold px-5 py-1.5 rounded-sm"
            >
              {showPending
                ? t("View Approved Lawyers")
                : t("View Pending Lawyers")}
            </button>
            {/* <SearchContainer setLawyers={setLawyers} /> */}
          </div>
          <div className=" ">
            {/* Conditionally render pending or approved lawyers based on state */}
            {showPending ? (
              <EvalLawyers
                all={true}
                onDelete={handleDeleteLawyer}
                onApprove={handleApproving}
                lawyers={pendingLawyers}
              />
            ) : (
              <EvalLawyers all={false} lawyers={lawyers} />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminPage;
