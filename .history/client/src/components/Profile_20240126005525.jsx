import React from "react";
import msg from "../assets/icons/contact/msg.svg";
import phone from "../assets/icons/contact/phone.svg";
import NavBar from "./super/NavBar";
import pfp from "../assets/profile/pfp.jpg";

import { Rating } from "@mui/material";

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
  // Add comments for other lawyers as needed
};

const Profile = () => {
  const navLinks = [
    { label: "A propos", id: "about", offset: -50 },
    { label: "Catégories", id: "categories", offset: 0 },
    { label: "Avis", id: "reviews", offset: 50 },
    { label: "Localisation", id: "location", offset: -100 },
  ];
  return (
    <div className=" mx-4 py-3 px-12 bg-lightBrown min-h-max">
      <Coords />
      <NavBar links={navLinks} landing={false} />
      <About />
      <Categories />
      <Avis profile={{ name: "John Doe" }} />
    </div>
  );
};

export default Profile;

function Coords() {
  return (
    <div className="flex  items-center">
      <div className=" basis-[70%] flex flex-col gap-4 ">
        <div className="flex flex-col gap-2">
          {" "}
          <h2>William King</h2>
          <h4>Region, Ville, 11000</h4>
        </div>
        <div className="flex gap-8 ">
          <div className=" bg-gray-300 h-64 w-56"></div>
          <div className="flex flex-col gap-3">
            Rating here
            <p>
              <span className=" font-semibold">Spécialité:</span>{" "}
              <span className=" font-light">Droits administratifs </span>
              <a href="" className=" text-primary underline">
                Voir plus
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col basis-[30%] border-l border-l-primary gap-6 pl-8">
        <div className=" flex items-center gap-4 ">
          {" "}
          <img src={msg} alt="" />
          Email :email_81194@gmail.com{" "}
        </div>
        <div className=" flex items-center gap-4 ">
          {" "}
          <img src={phone} alt="" />
          Numéro de téléphone : 000-000-000{" "}
        </div>
        <p className="text-primary underline">HP Law, PLLC</p>
        <div className="flex flex-col h-full">
          {" "}
          <button className="bg-primary text-white px-4 py-3 place-self-end">
            Prendre Rendez-Vous
          </button>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div
      id="about"
      className=" w-[95%] gap-[2rem] flex flex-col border-t-2 border-t-lightTypo opacity-70  pt-2"
    >
      <div className="w-[90%] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat
        <p>
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

function Categories() {
  const lawyerCategories = [
    "Personal Injury Law",
    "Criminal Law",
    "Family Law",
    "Employment Law",
    "Real Estate Law",
    "Business Law",
    "Immigration Law",
    "Estate Planning Law",
    "Intellectual Property Law",
    "Bankruptcy Law",
    "Tax Law",
    "Environmental Law",
    "Civil Rights Law",
    "Health Care Law",
    "International Law",
    "Media Law",
    "Entertainment Law",
    "Education Law",
    "Sports Law",
    "Insurance Law",
  ];

  return (
    <div
      id="categories"
      className=" w-[95%] my-[3rem] border-t-2 border-t-lightTypo opacity-70  pt-2"
    >
      <h3 className="font-semibold tracking-wide text-lightTypo">Catégories</h3>
      <ul className=" flex flex-wrap ">
        {lawyerCategories.map((category, index) => (
          <li key={index} className="mr-6 my-5">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Avis({ profile }) {
  // Access comments for the specific lawyer from the lawyerComments constant
  const comments = lawyerComments[profile.name] || []; // Default to an empty array if no comments found

  return (
    <div className="border-t-2 border-t-lightTypo opacity-70  pt-2 flex flex-col gap-3">
      <div className="flex justify-between font-semibold tracking-wide text-lightTypo">
        Reviews
        <GiveFeedBack />
      </div>

      <span className="flex items-center gap-3">
        <h2 className="text-2xl text-gray-500">
          {profile?.rating || "undefined"}
        </h2>
        {/* Assuming Rating component is imported */}
        <Rating className="" name="simple-controlled" value={profile?.rating} />
      </span>

      <ul className="flex flex-col gap-3">
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </ul>
    </div>
  );
}

function GiveFeedBack() {
  return <div className="">Give Feedback</div>;
}

function Comment({ comment }) {
  return (
    <li className="flex bg-white p-3 rounded-md">
      <div className=" flex flex-col gap-5">
        <strong>
          <div className="flex gap-3 items-center">
            <img src={pfp} alt="" />   <div className=" flex flex-col">{comment.user}    </div> 
          </div>{" "}
        </strong>{" "}
        <p>{comment.text}</p>
      </div>
    </li>
  );
}
