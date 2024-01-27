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
import maria from "./assets/maria/maria.jpg";

const lawyers = [
  {
    id: 1,
    name: "Lawyer 1",
    email: "email_1@example.com",
    phoneNumber: "000-000-01",
    imageUrl: maria,
  },
  {
    id: 2,
    name: "Lawyer 2",
    email: "email_2@example.com",
    phoneNumber: "000-000-02",
    imageUrl: maria,
  },
  {
    id: 3,
    name: "Lawyer 3",
    email: "email_3@example.com",
    phoneNumber: "000-000-03",
    imageUrl: maria,
  },
  {
    id: 4,
    name: "Lawyer 4",
    email: "email_4@example.com",
    phoneNumber: "000-000-04",
    imageUrl: maria,
  },
  {
    id: 5,
    name: "Lawyer 5",
    email: "email_5@example.com",
    phoneNumber: "000-000-05",
    imageUrl: maria,
  },
  {
    id: 6,
    name: "Lawyer 6",
    email: "email_6@example.com",
    phoneNumber: "000-000-06",
    imageUrl: maria,
  },
  {
    id: 7,
    name: "Lawyer 7",
    email: "email_7@example.com",
    phoneNumber: "000-000-07",
    imageUrl: maria,
  },
  {
    id: 8,
    name: "Lawyer 8",
    email: "email_8@example.com",
    phoneNumber: "000-000-08",
    imageUrl: maria,
  },
  {
    id: 9,
    name: "Lawyer 9",
    email: "email_9@example.com",
    phoneNumber: "000-000-09",
    imageUrl: maria,
  },
  {
    id: 10,
    name: "Lawyer 10",
    email: "email_10@example.com",
    phoneNumber: "000-000-10",
    imageUrl: maria,
  },
  {
    id: 11,
    name: "Lawyer 11",
    email: "email_11@example.com",
    phoneNumber: "000-000-11",
    imageUrl: maria,
  },
  {
    id: 12,
    name: "Lawyer 12",
    email: "email_12@example.com",
    phoneNumber: "000-000-12",
    imageUrl: maria,
  },
  {
    id: 13,
    name: "Lawyer 13",
    email: "email_13@example.com",
    phoneNumber: "000-000-13",
    imageUrl: maria,
  },
  {
    id: 14,
    name: "Lawyer 14",
    email: "email_14@example.com",
    phoneNumber: "000-000-14",
    imageUrl: maria,
  },
  {
    id: 15,
    name: "Lawyer 15",
    email: "email_15@example.com",
    phoneNumber: "000-000-15",
    imageUrl: maria,
  },
];

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
          element={<HomeLayout pageComponent={<ResultsPage lawyers={lawyers} />} />}
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
          path={"/Sign"}
          element={<HomeLayout pageComponent={<SignUp />} />}
        />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
