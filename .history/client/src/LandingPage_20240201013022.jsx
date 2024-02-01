// Import necessary dependencies
import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';

// Import your translation files
import header from "./assets/landing/header.jpg";
import hero from "./assets/landing/hero.png";
import section1 from "./assets/landing/section1.jpg";
import section2 from "./assets/landing/section2.jpg";
import maria from "./assets/landing/maria.jpg";
import scene from "./assets/landing/scene.png";

// Import your components
import Footer from "./components/super/Footer";
import NavBar from "./components/super/NavBar";

// Import AOS and its styles
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();

// Define the LandingPage component
const LandingPage = () => {
  // Extract translation function from i18n
  const { t } = useTranslation();

  // Define navigation links
  const navLinks = [
    { label: t("home"), id: "about", offset: -50 },
    { label: t("findLawyer"), id: "hero", offset: 0 },
    { label: t("makeAppointment"), id: "appoint", offset: 50 },
    { label: t("contactUs"), id: "footer", offset: -100 }
  ];

  // Refresh AOS on component mount
  useEffect(() => {
    AOS.refresh();
  }, []);

  // Render the LandingPage component
  return (
    <div className="overflow-hidden flex flex-col relative mx-auto items-center bg-white z-10">
      <header className=" p-3 recursive border-b border-b-primary w-[90%] text-center font-semibold text-xl">
        {t("dzMouhami")}
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

// Define Header component
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

// Define About component
function About() {
  // Extract translation function from i18n
  const { t } = useTranslation();

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
          {t("aboutDzMouhami")}
        </h2>
        <img src={hero} className="" alt="" />
      </div>

      <div className=" basis-[40%] mb-16 ">
        {" "}
        {/*  */}
        <h2 className=" recursive tracking-wider w-[50%] my-4">{t("dzMouhami")}</h2>
        <p className=" w-[80%] opacity-60 font-light leading-relaxed mb-7">
          {t("aboutText")}
        </p>
        <a
          href=""
          className=" py-2 px-5 text-white bg-primary hover:bg-opacity-65"
        >
          {t("findLawyer")}
        </a>
      </div>
    </section>
  );
}

// Define Feedback component
function Feedback() {
  // Extract translation function from i18n
  const { t } = useTranslation();

  // Define user comments
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

  // Render the Feedback component
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
              {t("feedbackTitle")}
            </h2>{" "}
            <span className=" font-semibold select-none">____________</span>
          </div>

          <h2 className=" mt-16 mb-8 recursive w-[85%] text-center">
            {t("feedbackSubtitle")}
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

// Define Achievements component
function Achievements() {
  // Extract translation function from i18n
  const { t } = useTranslation();

  // Render the Achievements component
  return (
    <div className=" flex flex-col w-[80%] items-center mx-auto my-10 gap-8 ">
      <div className="flex items-center my-5 gap-4">
        <span className=" font-semibold select-none text-primary">
          ____________
        </span>
        <h2 className=" recursive tracking-wider">{t("achievementsTitle")}</h2>{" "}
        <span className=" font-semibold select-none text-primary">
          ____________
        </span>
      </div>

      <div className="flex w-full justify-between  ">
        <div className="flex flex-col items-center basis-[33%] gap-4">
          {" "}
          <h4 className=" recursive text-primary text-3xl font-bold">
            879+
          </h4>{" "}
          <span className=" w-[70%] text-center recursive font-semibold text-xl">
            {t("consultations")}
          </span>
        </div>
        <div className="flex flex-col items-center basis-[33%] gap-4">
          {" "}
          <h4 className=" recursive text-primary text-3xl font-bold">
            12 Mil
          </h4>{" "}
          <span className=" w-[70%] text-center recursive font-semibold text-xl">
            {t("recoveredCosts")}
          </span>
        </div>
        <div className="flex flex-col items-center basis-[33%] gap-4">
          {" "}
          <h4 className=" recursive text-primary text-3xl font-bold">
            92%
          </h4>{" "}
          <span className=" w-[70%] text-center recursive font-semibold text-xl">
            {t("successfulCases")}
          </span>
        </div>
      </div>
    </div>
  );
}

// Define Hero component
function Hero() {
  // Extract translation function from i18n
  const { t } = useTranslation();

  // Render the Hero component
  return (
    <section id="hero" className=" relative flex w-screen justify-center my-8 ">
      <img
        src={section2}
        className="w-full h-[730px] bg-center object-cover"
        alt=""
      />
      <div className="absolute top-0 text-white">
        <div className=" flex flex-col items-center gap-[6rem]">
          <div className="flex items-center my-5 gap-4">
            <span className=" font-semibold select-none">____________</span>
            <h2 className=" recursive  tracking-wider ">
              {t("heroSubtitle")}
            </h2>{" "}
            <span className=" font-semibold select-none">____________</span>
          </div>

          <div className=" flex gap-8 w-[80%] bg-white text-black h-[28rem] px-10 my-4 ">
            <div className="relative basis-[30%]">
              {" "}
              <img
                src={maria}
                alt=""
                className=" absolute -top-5  object-contain"
              />
            </div>
            <div className=" flex flex-col basis-[70%] my-4 gap-6  ">
              {" "}
              <h2 className=" recursive text-primary">Maria Imene</h2>{" "}
              <p className=" w-[70%] flex flex-col gap-5 ">
                <span>
                  {t("mariaBio1")}
                </span>

                <span>
                  {t("mariaBio2")}
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

// Define Appoint component
function Appoint() {
  // Extract translation function from i18n
  const { t } = useTranslation();

  // Render the Appoint component
  return (
    <section
      id="appoint"
      className=" flex flex-col w-full justify-center items-center gap-[3rem] my-10"
    >
      <div className=" flex flex-col items-center">
        <div className="flex items-center my-5 gap-4">
          <span className=" font-semibold select-none text-primary">
            ____________
          </span>
          <h2 className=" recursive  tracking-wider ">
            {t("appointTitle")}
          </h2>{" "}
          <span className=" font-semibold select-none text-primary">
            ____________
          </span>
        </div>
      </div>

      <div className=" flex w-[80%] items-center justify-between ">
        <div className=" basis-[40%] mb-16 ">
          {" "}
          {/*  */}
          <h2 className=" recursive tracking-wider w-[50%] my-4">{t("dzMouhami")}</h2>
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

// Export LandingPage component
export default LandingPage;
