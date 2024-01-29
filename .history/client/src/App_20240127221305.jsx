import React, { useState, createContext, useContext } from "react";
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

const UserDataContext = createContext();


const App = () => {
  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>

    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />

        <Route path={"/Signin"} element={<SignIn />} />
        <Route path={"/ClientSignin"} element={<ClientSignIn />} />

        <Route
          path={"/Search"}
          element={<HomeLayout pageComponent={<Search />} />}
        />
        <Route
          path={"/Available"}
          element={<HomeLayout pageComponent={<AvailabilityForm />} />}
        />
        <Route
          path={"/Results"}
          element={
            <HomeLayout pageComponent={<ResultsPage lawyers={lawyers} />} />
          }
        />
        {/* <Route path={"/Signin"} element={<SignIn />} />
        <Route
          path={"/Schedule"}
          element={<HomeLayout pageComponent={<Schedule />} />}
        />
        
        
        <Route
          path={"/profile/:id"}
          element={<HomeLayout pageComponent={<Profile />} />}
        /> */}
        <Route
          path={"/profile"}
          element={<HomeLayout pageComponent={<Profile />} />}
        />
        <Route
          path={"/SignUp"}
          element={<HomeLayout pageComponent={<SignUp />} />}
        />
      </Routes>
    </BrowserRouter>
    </UserDataContext.Provider >
  );
};

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
