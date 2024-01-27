import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import LandingPage from "./LandingPage";
import SignIn from "./SignIn";
import Search from "./Search";
import HomeLayout from "./components/super/HomeLayout";
import Profile from "./components/Profile";
import ResultsPage from "./ResultsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />

        <Route path={"/Signin"} element={<SignIn />} />
        <Route
          path={"/Search"}
          element={<HomeLayout pageComponent={<Search />} />}
        />
        <Route
          path={"/Results"}
          element={<HomeLayout pageComponent={<ResultsPage lawyers={} />} />}
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);