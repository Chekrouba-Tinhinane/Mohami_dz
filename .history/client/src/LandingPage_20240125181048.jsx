import React, { useEffect } from "react";

import header from "./assets/landing/header.jpg";
import hero from "./assets/landing/hero.png";
import section1 from "./assets/landing/section1.jpg";
import section2 from "./assets/landing/section2.jpg";
import footer from "./assets/landing/footer.jpg";
import maria from "./assets/landing/maria.jpg";
import scene from "./assets/landing/scene.png";

import msg from "./assets/icons/contact/msg.svg";

import twitter from "./assets/icons/footer/twitter.svg";
import fb from "./assets/icons/footer/fb.svg";
import linkedin from "./assets/icons/footer/linkedin.svg";

import NavBar from "./components/super/NavBar";

import AOS from "aos";
import "aos/dist/aos.css";

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

      <Achievements />
      <Hero />
      <Appoint />
      <Footer />
    </div>
  );
};

export default LandingPage;

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
    <div className=" flex flex-col w-[80%] items-center mx-auto my-10 gap-8 ">
      <div className="flex items-center my-5 gap-4">
        <span className=" font-semibold select-none text-primary">
          ____________
        </span>
        <h2 className=" recursive tracking-wider">Nos Réalisations</h2>{" "}
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
            Consultations
          </span>
        </div>
        <div className="flex flex-col items-center basis-[33%] gap-4">
          {" "}
          <h4 className=" recursive text-primary text-3xl font-bold">
            12 Mil
          </h4>{" "}
          <span className=" w-[70%] text-center recursive font-semibold text-xl">
            Coûts recouvrés au bénéfice du client
          </span>
        </div>
        <div className="flex flex-col items-center basis-[33%] gap-4">
          {" "}
          <h4 className=" recursive text-primary text-3xl font-bold">
            92%
          </h4>{" "}
          <span className=" w-[70%] text-center recursive font-semibold text-xl">
            Affaires pénales défendues avec succès
          </span>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className=" relative flex w-screen justify-center my-8 ">
      <img
        src={section2}
        className="w-full h-[680px] bg-center object-cover"
        alt=""
      />
      <div className="absolute top-0 text-white">
        <div className=" flex flex-col items-center gap-[6rem]">
          <div className="flex items-center my-5 gap-4">
            <span className=" font-semibold select-none">____________</span>
            <h2 className=" recursive  tracking-wider ">
              Parmi nos meilleurs avocats
            </h2>{" "}
            <span className=" font-semibold select-none">____________</span>
          </div>

          <div className=" flex gap-8 w-[80%] bg-white text-black h-[26rem] px-10 my-4 ">
            <div className="relative basis-[30%]">
              {" "}
              <img
                src={maria}
                alt=""
                className=" absolute -top-12  object-contain"
              />
            </div>
            <div className=" flex flex-col basis-[70%] my-4 gap-6  ">
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
                className="flex w-max recursive text-white bg-primary px-6 py-3 font-semibold hover:bg-opacity-75"
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
    <footer
      id="footer"
      className="h-[300px] relative flex w-full justify-center mt-[10rem] text-white"
    >
      <img src={footer} alt="" className="w-full object-cover" />
      {/* sixth section */}
      <div className="absolute w-[95%] flex justify-center pt-[4rem]">
        <div className="flex items-center justify-between px-16 max-w-6xl w-full">
          <div className="flex flex-col">
            <p>Aide</p>
            <p>Aide</p>
            <p>Aide</p>
            <p>Aide</p>
          </div>

          <div className="flex place-self-start gap-[3rem]">
            <img src={twitter} alt="" />
            <img src={fb} alt="" />
            <img src={linkedin} alt="" />
          </div>

          <div className="border-l border-l-white pl-10 flex flex-col">
            <p>
              CONTACTEZ NOUS
              <span>
                <img src={msg} alt="" />
              </span>
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
    <section
      id="appoint"
      className=" flex flex-col w-full justify-center items-center gap-[3rem] my-10"
    >
      <div className=" flex flex-col items-center">
        <div className="flex items-center my-5 gap-4">
          <span className=" font-semibold select-none text-primary">
            ____________
          </span>
          <h2 className=" recursive  tracking-wider ">Prise de Rendez-Vous</h2>{" "}
          <span className=" font-semibold select-none text-primary">
            ____________
          </span>
        </div>
      </div>

      <div className=" flex w-[80%] items-center justify-between ">
        <div className=" basis-[40%] mb-16 ">
          {" "}
          {/*  */}
          <h2 className=" recursive tracking-wider w-[50%] my-4">DZ-Mouhami</h2>
          <p className=" w-[80%] opacity-60 font-light leading-relaxed mb-7">
            DZMouhami est un annuaire web d'avocats, vous offrant la possibilité
            de trouver rapidement et facilement un professionnel du droit dans
            une région spécifique, spécialisé dans un domaine particulier.
          </p>
          <a
            href=""
            className=" py-3 px-5 text-white bg-primary hover:bg-opacity-65"
          >
            Prendre un rendez-vous{" "}
          </a>
        </div>

        <img src={scene} className="" alt="" />
      </div>
    </section>
  );
}
