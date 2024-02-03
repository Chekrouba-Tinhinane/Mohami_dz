import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";

import header from "./assets/landing/header.jpg";
import hero from "./assets/landing/hero.png";
import section1 from "./assets/landing/section1.jpg";
import section2 from "./assets/landing/section2.jpg";
import maria from "./assets/landing/maria.jpg";
import scene from "./assets/landing/scene.png";

import Footer from "./components/super/Footer";
import NavBar from "./components/super/NavBar";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const LandingPage = () => {
  const { t } = useTranslation();

  const navLinks = [
    { label: t("home"), id: "about", offset: -50 },
    { label: t("findLawyer"), id: "hero", offset: 0 },
    { label: t("makeAppointment"), id: "appoint", offset: 50 },
    { label: t("contactUs"), id: "footer", offset: -100 },
  ];
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-hidden flex flex-col relative mx-auto items-center justify-center bg-white z-10">
      <header className=" p-3 recursive border-b border-b-primary w-[90%] text-center font-semibold text-xl">
        {t("DZ-Mouhami")}
      </header>
      <NavBar links={navLinks} landing={true} l={true} />
      <Header />
      <About />
      <Feedback />
      <Achievements />
      <Hero />
      <Appoint />
      <Footer />
    </div>
  );
};

export default LandingPage;

function Header() {
  const { t } = useTranslation(); // Use useTranslation hook to access translation function

  return (
    <section
      id="header"
      className=" relative flex w-screen justify-center my-3 phone:max-tablet:line-height-5"
    >
      <img src={header} className="w-full h-[600px] object-cover" alt="" />
      <h2 className=" recursive absolute bottom-[7%] left-[10%] text-white ">
        {t("slogan")}
      </h2>
    </section>
  );
}

function About() {
  const { t } = useTranslation(); // Use useTranslation hook to access translation function

  return (
    <section
      id="about"
      data-aos="fade-right"
      data-aos-duration="1000"
      className=" phone:max-lg:flex-col my-10 flex gap-[6rem] mx-10 justify-center items-center"
    >
      <div className=" flex flex-col basis-[60%] ">
        <h2 className=" recursive w-[70%] place-self-end">{t("aboutTitle")}</h2>
        <img src={hero} className="" alt="" />
      </div>

      <div className=" flex flex-col align-middle basis-[40%] mx-[4rem] mb-16 ">
        <h2 className=" recursive tracking-wider w-[50%] my-4">
          {t("DZ-Mouhami")}
        </h2>
        <p className=" w-[80%] opacity-60 font-light leading-relaxed mb-7">
          {t("aboutText")}
        </p>
        <a
          href=""
          className=" py-2 px-5 w-max text-white bg-primary hover:bg-opacity-65"
        >
          {t("findLawyerBtn")}
        </a>
      </div>
    </section>
  );
}

function Feedback() {
  const { t } = useTranslation(); // Use useTranslation hook to access translation function

  const userComments = [
    {
      username: "User123",
      comment: t("testimonial1"),
    },
    {
      username: "LegalEagle",
      comment: t("testimonial2"),
    },
    {
      username: "LawSeeker",
      comment: t("testimonial3"),
    },
  ];

  return (
    <section
      id="feedback"
      className=" relative flex w-screen justify-center my-4 "
    >
      <img
        src={section1}
        className="w-full h-[640px] phone:max-tablet:h-[920px] bg-center object-cover"
        alt=""
      />
      <div className="absolute top-0 text-white">
        <div className=" flex flex-col items-center">
          <div className="flex items-center my-5 gap-4 ">
            <span className=" font-semibold select-none">____________</span>
            <h2 className=" recursive phone:max-tablet:text-3xl  tracking-wider min-w-max ">
              {t("feedbackTitle")}
            </h2>{" "}
            <span className=" font-semibold select-none">____________</span>
          </div>

          <h2 className=" mt-16 mb-8 recursive w-[85%] phone:max-tablet:text-xl text-center">
            {t("feedbackSubtitle")}
          </h2>
          <div className=" flex gap-10 w-full px-[3rem] phone:max-tablet:flex-col phone:max-tablet:gap-3 phone:max-tablet:mx-[1rem] ">
            {userComments.map((el, i) => {
              return (
                <div className=" flex flex-col phone:max-tablet:mx-8 justify-between bg-white p-6 gap-2 rounded-md text-black text-sm min-h-fit ">
                  {el.comment}
                  <div className=" flex gap-3 items-center">
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
  const { t } = useTranslation(); // Use useTranslation hook to access translation function

  return (
    <div className=" flex flex-col items-center phone:max-tablet:mx-8 my-10 gap-8 ">
      <div className="flex items-center my-5 gap-4 phone:max-tablet:mx-4">
        <span className=" font-semibold select-none text-primary">
          ____________
        </span>
        <h2 className=" recursive tracking-wider  phone:max-tablet:text-3xl">{t("achievementsTitle")}</h2>{" "}
        <span className=" font-semibold select-none text-primary">
          ____________
        </span>
      </div>

      <div className="flex w-full gap-[6rem] phone:max-tablet:flex-col">
        <div className="flex flex-col items-center basis-[33%] gap-4">
          {" "}
          <h4 className=" recursive text-primary text-3xl font-bold ">
            879+
          </h4>{" "}
          <span className=" w-[70%] text-center recursive font-semibold text-xl tablet:max-lg:text-base">
            {t("consultations")}
          </span>
        </div>
        <div className="flex flex-col items-center basis-[33%] gap-4">
          {" "}
          <h4 className=" recursive text-primary text-3xl font-bold">
            12 Mil
          </h4>{" "}
          <span className=" w-[70%] text-center recursive font-semibold text-xl tablet:max-lg:text-base">
            {t("recoveredCosts")}
          </span>
        </div>
        <div className="flex flex-col items-center basis-[33%] gap-4">
          {" "}
          <h4 className=" recursive text-primary text-3xl font-bold">
            92%
          </h4>{" "}
          <span className=" w-[70%] text-center recursive font-semibold text-xl tablet:max-lg:text-base">
            {t("successfulCases")}
          </span>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const { t } = useTranslation(); // Use useTranslation hook to access translation function

  return (
    <section id="hero" className="phone:max-tablet:hidden relative flex w-screen justify-center my-8 ">
      <img
        src={section2}
        className="w-full h-[730px] bg-center object-cover"
        alt=""
      />
      <div className="absolute top-0 text-white">
        <div className=" flex flex-col items-center gap-[6rem]">
          <div className="flex items-center my-5 px-10 gap-4">
            <span className=" font-semibold select-none">____________</span>
            <h2 className=" recursive tracking-wider tablet:max-lg:text-[1.6rem] ">
              {t("heroSubtitle")}
            </h2>{" "}
            <span className=" font-semibold select-none">____________</span>
          </div>

          <div className=" flex gap-8 w-[80%] bg-white text-black min-h-fit px-10 ">
            <div className="relative basis-[30%]">
              <img
                src={maria}
                alt=""
                className=" absolute -top-5  object-contain"
              />
            </div>
            <div className=" flex flex-col basis-[70%] my-4 gap-6  ">
              {" "}
              <h2 className=" recursive text-primary">Maria Imene</h2>{" "}
              <p className=" flex flex-col gap-5 ">
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
                className="flex w-max recursive text-white bg-primary px-6 py-3 font-semibold hover:bg-opacity-75"
              >
                {t("viewProfileBtn")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Appoint() {
  const { t } = useTranslation(); // Use useTranslation hook to access translation function

  return (
    <section
      id="appoint"
      className="flex flex-col w-full justify-center items-center gap-[3rem] my-10"
    >
      <div className=" flex flex-col items-center">
        <div className="flex items-center my-5 gap-4">
          <span className=" font-semibold select-none text-primary">
            ____________
          </span>
          <h2 className=" recursive  tracking-wider ">{t("appointTitle")}</h2>{" "}
          <span className=" font-semibold select-none text-primary">
            ____________
          </span>
        </div>
      </div>

      <div className=" flex phone:max-lg:flex-col w-[80%] items-center justify-between ">
        <div className=" basis-[40%] mb-16 ">
          {" "}
          <h2 className=" recursive tracking-wider w-[50%] my-4">
            {t("DZMouhami")}
          </h2>
          <p className=" w-[80%] opacity-60 font-light leading-relaxed mb-7">
            {t("appointText")}
          </p>
          <a
            href=""
            className=" py-3 px-5 text-white bg-primary hover:bg-opacity-65"
          >
            {t("makeAppointmentBtn")}
          </a>
        </div>

        <img src={scene} className="" alt="" />
      </div>
    </section>
  );
}