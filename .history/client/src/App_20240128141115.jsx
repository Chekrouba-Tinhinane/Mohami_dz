import React, { useState, createContext, useContext, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import LandingPage from "./LandingPage";
import SignIn from "./SignIn";
import Search from "./Search";
import HomeLayout from "./components/super/HomeLayout";
import Profile from "./components/Profile";
import ResultsPage from "./ResultsPage";
import SignUp from "./components/SignUp";
import maria from "./assets/maria/maria.jpg";
import ClientSignIn from "./ClientSignIn";
import AvailabilityForm from "./AvailabilityForm";
import axios from "axios";
import OwnProfile from "./OwnProfile";

const UserDataContext = createContext();

const App = () => {
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const response = await axios.get(
          "http://192.168.137.210:8000/avocat/avocat_list"
        );
        console.log(response.data);
        setLawyers(response.data);
      } catch (error) {
        console.error("Error fetching lawyers:", error);
      }
    };

    fetchLawyers(); // Call fetchLawyers when the component mounts
  }, []); // Empty dependency array ensures fetchLawyers is called only onc

  const [userData, setUserData] = useState(null);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
          <Route
            path={"/profile/:id"}
            element={
              <HomeLayout pageComponent={<Profile lawyers={lawyers} />} />
            }
          />
          <Route
            path={"/SelfProfile"}
            element={
              <HomeLayout
                pageComponent={
                  <OwnProfile
                    lawyer={}
                  />
                }
              />
            }
          />


          <Route
            path={"/Search"}
            element={
              <HomeLayout
                pageComponent={
                  <Search lawyers={lawyers} setLawyers={setLawyers} />
                }
              />
            }
          />
          <Route
            path={"/Available"}
            element={<HomeLayout pageComponent={<AvailabilityForm />} />}
          />
          <Route path={"/Signin"} element={<SignIn />} />
          {/*  <Route
          path={"/Schedule"}
          element={<HomeLayout pageComponent={<Schedule />} />}
        />
        
        
        <Route
          path={"/profile/:id"}
          element={<HomeLayout pageComponent={<Profile />} />}
        /> */}
          <Route
            path={"/SignUp"}
            element={<HomeLayout pageComponent={<SignUp />} />}
          />
        </Routes>
      </BrowserRouter>
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
