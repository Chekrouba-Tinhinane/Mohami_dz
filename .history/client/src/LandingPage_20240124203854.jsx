import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import header from "./assets/landing/header.jpg";
import hero from "./assets/landing/hero.png";
import section1 from "./assets/landing/section1.jpg";
import section2 from "./assets/landing/section2.jpg";
import footer from "./assets/landing/footer.jpg";
import maria from "./assets/maria/maria.jpg";

import msg from "./assets/icons/contact/msg.svg";

import twitter from "./assets/icons/footer/twitter.svg";
import fb from "./assets/icons/footer/fb.svg";
import linkedin from "./assets/icons/footer/linkedin.svg";

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
      {/* <Footer /> */}
      {/* <Achievements /> */}
      {/* <Hero /> */}
      <Appoint />
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
      </motion.ul>
      <div className="flex gap-[1rem]">
        <Link
          to={"/SignIn"}
          href=""
          className=" recursive flex items-center font-semibold text-primary border border-primary bg-white text-center text-lg py-1.5 px-3.5 hover:bg-opacity-70 "
        >
          Se connecter
        </Link>
      </div>
    </div>
  );
}

function Header() {
  return (
    <section
      id="header"
      className=" relative flex w-screen justify-center my-3"
    >
      <img src={header} className="w-full h-[600px] object-cover" alt="" />
      <h2 className=" recursive absolute bottom-[7%] left-[10%] text-white w-[60%]">
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
  const userComments = [
    {
      username: "User123",
      comment:
        "Effortlessly found the right lawyer for my needs – the detailed profiles and client reviews streamlined the decision-making process.",
    },
    {
      username: "LegalEagle",
      comment:
        "Incredibly user-friendly directory; comprehensive lawyer profiles and responsive design made my search for legal representation hassle-free.",
    },
    {
      username: "LawSeeker",
      comment:
        "Highly impressed with the intuitive interface and wealth of information – this directory simplified the task of finding a skilled attorney.",
    },
  ];

  // You can now use the userComments array as needed in your code.

  return (
    <section
      id="feedback"
      className=" relative flex w-screen justify-center my-4"
    >
      <img
        src={section1}
        className="w-full h-[640px] bg-center object-cover"
        alt=""
      />
      <div className="absolute top-0 text-white">
        <div className=" flex flex-col items-center">
          <div className="flex items-center my-5 gap-4">
            <span className=" font-semibold select-none">____________</span>
            <h2 className=" recursive  tracking-wider ">
              Nos Témoignages
            </h2>{" "}
            <span className=" font-semibold select-none">____________</span>
          </div>

          <h2 className=" mt-16 mb-8 recursive w-[85%] text-center">
            CE QUE NOS CLIENTS PENSENT DE NOUS
          </h2>
          <div className=" flex gap-10 w-[75%] ">
            {userComments.map((el, i) => {
              return (
                <div className=" flex flex-col justify-between bg-white p-6 rounded-md text-black text-sm h-56 ">
                  {el.comment}
                  <div className=" flex gap-5 items-center">
                    {" "}
                    <div class="w-14 h-14 bg-gray-500 rounded-full"></div>
                    {el.username}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <div className=" flex flex-col w-full items-center">
      <div className="flex items-center my-5 gap-4">
        <span className=" font-semibold select-none text-primary">
          ____________
        </span>
        <h2 className=" recursive tracking-wider">Nos Réalisations</h2>{" "}
        <span className=" font-semibold select-none text-primary">
          ____________
        </span>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col">
          {" "}
          <h4 className=" recursive">879+</h4>{" "}
          <span className=" w-[70%]">Consultations</span>
        </div>
        <div className="flex flex-col">
          {" "}
          <h4 className=" recursive">12 Mil</h4>{" "}
          <span className=" w-[70%]">
            Coûts recouvrés au bénéfice du client
          </span>
        </div>
        <div className="flex flex-col">
          {" "}
          <h4 className=" recursive">92%</h4>{" "}
          <span className=" w-[70%]">
            Affaires pénales défendues avec succès
          </span>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className=" relative flex w-screen justify-center my-4">
      <img
        src={section2}
        className="w-full h-[640px] bg-center object-cover"
        alt=""
      />
      <div className="absolute top-0 text-white">
        <div className=" flex flex-col items-center">
          <div className="flex items-center my-5 gap-4">
            <span className=" font-semibold select-none">____________</span>
            <h2 className=" recursive  tracking-wider ">
              Parmi nos meilleurs avocats
            </h2>{" "}
            <span className=" font-semibold select-none">____________</span>
          </div>

          <div className=" flex gap-8 w-[80%] bg-white text-black h-[26rem] px-10 ">
            <img src={maria} alt="" className=" basis-[30%] object-contain" />
            <div className=" flex flex-col basis-[70%] ">
              {" "}
              <h2 className=" recursive text-primary">Maria Imene</h2>{" "}
              <p className=" w-[70%] flex flex-col gap-5 ">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </span>

                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.
                </span>
              </p>
              <a
                href=""
                className="flex w-max recursive text-white bg-primary  p-4"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className=" relative flex w-full justify-center my-3 ">
      <img src={footer} alt="" className="w-full object-cover" />
      {/* sixth section */}
      <div className="absolute w-full ">
        <div className=" flex justify-between px-16 ">
          <div className=" flex flex-col">
            <p>Aide</p>
            <p>Aide</p>
            <p>Aide</p>
            <p>Aide</p>
          </div>

          <div className=" flex ">
            <img src={twitter} alt="" />
            <img src={fb} alt="" />
            <img src={linkedin} alt="" />
          </div>

          <div className=" border-l border-l-white pl-10 flex flex-col ">
            <p>
              CONTACTEZ NOUS{" "}
              <span>
                {" "}
                <img src={msg} alt="" />
              </span>{" "}
            </p>
            <p>Rue Cheikh Ammar, Béjaia, Algeria</p>
            <p>Tél 1-888-888-888</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Appoint() {
  return (
    <section id="hero" className=" flex w-screen justify-center my-4">
      <div className=" flex flex-col items-center">
        <div className="flex items-center my-5 gap-4">
          <span className=" font-semibold select-none text-primary">____________</span>
          <h2 className=" recursive  tracking-wider ">
            Prise de Rendez-Vous
          </h2>{" "}
          <span className=" font-semibold select-none text-primary">____________</span>
        </div>
      </div>
    </section>
  );
}
