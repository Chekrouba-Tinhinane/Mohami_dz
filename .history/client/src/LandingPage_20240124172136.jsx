import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const LandingPage = () => {
  return <div className="overflow-x-hidden flex flex-col relative mx-auto items-center bg-white z-10">
    <header> DZ</header>
  </div>;
};

export default LandingPage;

function NavBar() {
  return (
    <div
      whileHover={{ scale: 1.2, originX: 0, color: "#ffd241" }}
      transition={{ type: "spring", stiffness: 300 }}
      className=" flex items-center px-20 py-12 w-full justify-between"
    >
      <img src={logo} alt="" />
      <motion.ul className="flex gap-[3rem]">
        <motion.li
          whileHover={{ scale: 1.2, originX: 0, color: "#1ABBED" }}
          transition={{ type: "spring", stiffness: 300 }}
          className=" font-semibold opacity-80 tracking-wider cursor-pointer"
        >
          <ScrollLink
            to={"about"}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="nav-item"
          >
            Accueil
          </ScrollLink>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, originX: 0, color: "#1ABBED" }}
          transition={{ type: "spring", stiffness: 300 }}
          className=" font-semibold opacity-80 tracking-wider cursor-pointer"
        >
          <ScrollLink
            to="events"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="nav-item"
          >
            Trouver un avocat
          </ScrollLink>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, originX: 0, color: "#1ABBED" }}
          transition={{ type: "spring", stiffness: 300 }}
          className=" font-semibold opacity-80 tracking-wider cursor-pointer"
        >
          <ScrollLink
            to="hero"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="nav-item"
          >
            Prendre un rendez-vous
          </ScrollLink>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, originX: 0, color: "#1ABBED" }}
          transition={{ type: "spring", stiffness: 300 }}
          className=" font-semibold opacity-80 tracking-wider cursor-pointer"
        >
          <ScrollLink
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="nav-item"
          >
            Contactez nous
          </ScrollLink>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, originX: 0, color: "#1ABBED" }}
          transition={{ type: "spring", stiffness: 300 }}
          className=" font-semibold opacity-80 tracking-wider cursor-pointer"
        >
          <ScrollLink
            to="upcoming"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="nav-item"
          >
            Upcoming event
          </ScrollLink>
        </motion.li>
      </motion.ul>
      <div className="flex gap-[1rem]">
        <Link
          to={"/SignIn"}
          href=""
          className="sign-btn flex items-center font-semibold text-primaryBG bg-white text-center py-1.5 px-3.5 rounded-3xl hover:bg-opacity-70 "
        >
          Log In
        </Link>
        <Link
          to={"/SignUp"}
          href=""
          className=" sign-btn flex items-center font-semibold border-4 py-1.5 px-3.5 rounded-3xl hover:bg-white hover:bg-opacity-60 hover:text-primaryBG"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
