import React, { useState, useEffect } from "react";
import SearchContainer from "./components/SearchContainer";
import Footer from "./components/super/Footer";
import { useUserData } from "./App";
import EvalLawyers from "./components/EvalLawyers";
import axios from "axios";
import LawyerCard from "./components/LawyerCard"; // Import LawyerCard component

const AdminPage = () => {
  const { userData, setUserData, lawyers, setLawyers } = useUserData();
  const [pendingLawyers, setPendingLawyers] = useState([]);
/*   const [approvedLawyers, setApprovedLawyers] = useState([]);
 */  const [showPending, setShowPending] = useState(true);

  useEffect(() => {
    const fetchPendingLawyers = async () => {
      try {
        const response = await axios.get("http://192.168.137.210:8000/avocat/avocat_pending");
        console.log(response.data);
        setPendingLawyers(response.data);
      } catch (error) {
        console.error("Error fetching pending lawyers:", error);
      }
    };

   /*  const fetchApprovedLawyers = async () => {
      try {
        const response = await axios.get("http://192.168.137.210:8000/avocat/avocat_approved");
        console.log(response.data);
        setApprovedLawyers(response.data);
      } catch (error) {
        console.error("Error fetching approved lawyers:", error);
      }
    };
 */
    fetchPendingLawyers(); // Call fetchPendingLawyers when the component mounts
    /* fetchApprovedLawyers(); */ // Call fetchApprovedLawyers when the component mounts
  }, []); // Empty dependency array ensures functions are called only once

  const handleDeleteLawyer = (lawyerId) => {
    setPendingLawyers(prevLawyers => prevLawyers.filter(lawyer => lawyer.avocat.id !== lawyerId));
    // Remove from approved lawyers as well if deleted from there
    setApprovedLawyers(prevLawyers => prevLawyers.filter(lawyer => lawyer.avocat.id !== lawyerId));
  };

  const toggleView = () => {
    setShowPending(prev => !prev);
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col w-full">
        <div className="flex flex-col mx-[4rem] gap-[5rem]">
          <div className="">
            <h2 onClick={() => console.log(userData)} className="recursive">
              Trouver Un Avocat
            </h2>
            {/* Toggle button for switching between pending and approved */}
            <button onClick={toggleView}>
              {showPending ? "Voir les avocats approuvés" : "Voir les avocats en attente"}
            </button>
            {/* <SearchContainer setLawyers={setLawyers} /> */}
          </div>
          <div className=" ">
            {/* Conditionally render pending or approved lawyers based on state */}
            {showPending ? (
              <EvalLawyers onDelete={handleDeleteLawyer} lawyers={pendingLawyers} />
            ) : (
              <EvalLawyers onDelete={handleDeleteLawyer} lawyers={approvedLawyers} />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminPage;
