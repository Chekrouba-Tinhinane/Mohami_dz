import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import header from "./assets/landing/header.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

AOS.init();

const LandingPage = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden flex flex-col relative mx-auto items-center bg-white z-10">
      <header className=" p-3 recursive border-b border-b-primary w-[90%] text-center font-semibold text-xl">
        {" "}
        DZ Mouhami{" "}
      </header>
      <NavBar />
      <Header />
    </div>
  );
};

export default LandingPage;

function NavBar() {
  return (
    <div
      whileHover={{ scale: 1, originX: 0, color: "#D4AD6B" }}
      transition={{ type: "tween", duration: 0.2 }}
      className=" flex items-center px-20 py-6 w-full justify-between "
    >
      {/*       <img src={logo} alt="" />
       */}{" "}
      <motion.ul className="flex gap-[2rem] text-sm">
        <motion.li
          whileHover={{ scale: 1, originX: 0, color: "#D4AD6B" }}
          transition={{ type: "tween", duration: 0.2 }}
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
          whileHover={{ scale: 1, originX: 0, color: "#D4AD6B" }}
          transition={{ type: "tween", duration: 0.2 }}
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
          whileHover={{ scale: 1, originX: 0, color: "#D4AD6B" }}
          transition={{ type: "tween", duration: 0.2 }}
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
          whileHover={{ scale: 1, originX: 0, color: "#D4AD6B" }}
          transition={{ type: "tween", duration: 0.2 }}
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
          whileHover={{ scale: 1, originX: 0, color: "#D4AD6B" }}
          transition={{ type: "tween", duration: 0.2 }}
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
          Se connecter
        </Link>
      </div>
    </div>
  );
}

function Header() {
  ()
  <section id="hero" className=" relative flex w-screen justify-center ">
    <img src={header} className="w-full h-[600px] object-cover" alt="" />
    <h2 className=" recursive absolute bottom-0 left-[10%] text-white w-[60%]">
      "Legal Solutions, Trusted Advocacy: Your Path to Justice Begins with Us."
    </h2>
  </section>;
}
