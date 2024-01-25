import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import header from "./assets/landing/header.jpg";
import hero from "./assets/landing/hero.png";
import section1 from "./assets/landing/section1.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

AOS.init();

const LandingPage = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-hidden flex flex-col relative mx-auto items-center bg-white z-10">
      <header className=" p-3 recursive border-b border-b-primary w-[90%] text-center font-semibold text-xl">
        {" "}
        DZ Mouhami{" "}
      </header>
      <NavBar />
      <Header />
      <About />
      <Feedback />
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
  return (
    <section id="hero" className=" relative flex w-screen justify-center my-3">
      <img src={header} className="w-full h-[600px] object-cover" alt="" />
      <h2 className=" recursive absolute bottom-0 left-[10%] text-white w-[60%]">
        "Legal Solutions, Trusted Advocacy: Your Path to Justice Begins with
        Us."
      </h2>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      data-aos="fade-right"
      data-aos-duration="1000"
      className="mx-3 my-10 flex gap-[6rem] justify-center items-center"
    >
      {/* fifth section */}
      <div className=" flex flex-col w-[40%] ">
        <h2 className=" recursive w-[40%] place-self-end">
          A propos de DZ Mouhami
        </h2>
        <img src={hero} className="" alt="" />
      </div>

      <div className=" basis-[40%] mb-16 ">
        {" "}
        {/*  */}
        <h2 className=" recursive tracking-wider w-[50%] my-4">DZ-Mouhami</h2>
        <p className=" w-[80%] opacity-60 font-light leading-relaxed mb-7">
          DZMouhami est un annuaire web d'avocats, vous offrant la possibilité
          de trouver rapidement et facilement un professionnel du droit dans une
          région spécifique, spécialisé dans un domaine particulier.
        </p>
        <a
          href=""
          className=" py-2 px-5 text-white bg-primary hover:bg-opacity-65"
        >
          Trouver un avocat
        </a>
      </div>
    </section>
  );
}

function Feedback() {
  return (
    <section
      id="feedback"
      className=" relative flex w-screen justify-center my-4"
    >
      <img src={section1} className="w-full h-[640px] bg-center object-cover" alt="" />
      <div className="absolute top-0" > 
      Nos témoignages
       </div>  
    </section>
  );
}
