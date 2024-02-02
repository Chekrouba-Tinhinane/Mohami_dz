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
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../Translation/i18n";
import Specialty from "./admin/Specialty";
import { toast, Toaster } from "react-hot-toast";

const UserDataContext = createContext();

const App = () => {
  const [language, setLanguage] = useState(i18n.language);
  const [lawyers, setLawyers] = useState([]);
  const { t } = useTranslation();
  const languageCode = t("languageCode");

  useEffect(() => {
    document.documentElement.lang = languageCode;
  }, [languageCode]);

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
      value={{
        userData,
        setUserData,
        lawyers,
        setLawyers,
        language,
        setLanguage,
      }}
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
          <Route
            path={"/imed"}
            element={
              <HomeLayout
                pageComponent={
                  <>
                  <div
                    onClick={() => {
                      toast.success("Rendez-vous pris");
                      console.log("ok");
                    }}
                  >
                    Click here to activate toast success{" "}
                  </div>
                  <div
                    onClick={() => {
                      toast.custom((t) => (
                        <div
                          className={`${
                            t.visible ? 'animate-enter' : 'animate-leave'
                          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                        >
                          <div className="flex-1 w-0 p-4">
                            <div className="flex items-start">
                              <div className="flex-shrink-0 pt-0.5">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                  alt=""
                                />
                              </div>
                              <div className="ml-3 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                  Emilia Gates
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  Sure! 8:30pm works great!
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex border-l border-gray-200">
                            <button
                              onClick={() => toast.dismiss(t.id)}
                              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      ));
                      console.log("ok");
                    }}
                  >
                    Click here to activate toast error{" "}
                  </div></>
                }
              />
            }
          />
        </Routes>{" "}
        <Toaster
          richColors
          position="top-right"
          
        />
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
