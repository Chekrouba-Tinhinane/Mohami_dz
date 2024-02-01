import React, { useState, createContext, useContext, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import LandingPage from "./LandingPage";
import SignIn from "./SignIn";
import Search from "./client/Search";
import HomeLayout from "./components/super/HomeLayout";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import axios from "axios";
import OwnProfile from "./OwnProfile";
import AdminPage from "./admin/AdminPage";

import { I18nextProvider } from "react-i18next";
import i18n from "../Translation/i18n";
import Specialty from "./admin/Specialty";

const UserDataContext = createContext();

const App = () => {
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const response = await axios.get("http://backend:8000/avocat/avocats");
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
    <UserDataContext.Provider
      value={{ userData, setUserData, lawyers, setLawyers }}
    >
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
              <HomeLayout pageComponent={<OwnProfile lawyer={userData} />} />
            }
          />
          <Route
            path={"/AdminPage"}
            element={
              <HomeLayout
                admin={true}
                pageComponent={
                  <AdminPage lawyers={lawyers} setLawyers={setLawyers} />
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
            path={"/Specialty"}
            element={<HomeLayout admin={true} pageComponent={<Specialty />} />}
          />

          <Route path={"/Signin"} element={<SignIn />} />

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
root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);
