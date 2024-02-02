import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useUserData } from "../../App";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Hamburger from "../Hamburger";

const NavBar = ({ links, landing, l }) => {
  const { t } = useTranslation(); // Use useTranslation hook to access translation function
  const location = useLocation();

  const { userData } = useUserData();
  const logged = userData == undefined;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <nav
      whileHover={{ scale: 1, originX: 0, color: "#D4AD6B" }}
      transition={{ type: "tween", duration: 0.2 }}
      className={`  ${
        landing ? "px-10" : ""
      } flex items-center pt-6 mb-3 w-full justify-between `}
    >
      {isMobile ? (
        <div className="relative w-screen flex">
          <div className=" z-20">
            {" "}
            <Hamburger isOpen={isMenuOpen} onClick={handleMenuClick} />
          </div>
          <div
            className={` ${
              isMenuOpen ? " opacity-95 max-h-screen" : "opacity-0 "
            } w-full absolute z-10 shadow-md transition-height transfom duration-200 top-5 -left-0 bg-white py-3`}
          >
            <div>
              <ul className=" gap-4 flex flex-col w-full place-self-center  ">
                <ul className=" ">
                  {links.map((link, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ scale: 1, originX: 0, color: "#D4AD6B" }}
                      transition={{ type: "tween", duration: 0.2 }}
                      className="font-semibold opacity-80 tracking-wider cursor-pointer"
                    >
                      {l ? (
                        <ScrollLink
                          to={link.id}
                          spy={true}
                          smooth={true}
                          offset={link.offset}
                          duration={500}
                          className={`nav-item p-0 m-0 ${
                            link.to === location.pathname
                              ? "active text-primary"
                              : ""
                          }`}
                        >
                          {link.label}
                        </ScrollLink>
                      ) : (
                        <>
                          <Link
                            className={`nav-item ${
                              link.to === location.pathname
                                ? "active text-primary"
                                : ""
                            }`}
                            to={link.to}
                          >
                            {link.label}
                          </Link>
                        </>
                      )}
                    </motion.li>
                  ))}
                </ul>
                <ul>
                  {landing ? (
                    logged ? (
                      <div className=" space-x-6">
                        <div className="flex gap-[1rem]">
                          <Link
                            to={"/SignIn"}
                            href=""
                            className="hover:bg-primary hover:text-white ease-linear transition recursive flex items-center font-semibold text-primary border border-primary bg-white text-center text-lg py-1.5 px-3.5 hover:bg-opacity-70"
                          >
                            {t("connexion")}
                          </Link>
                          <div className="flex gap-[1rem]">
                            <Link
                              to={"/SignUp"}
                              href=""
                              className=" hover:bg-primary hover:text-white ease-linear transition recursive flex items-center font-semibold text-primary border border-primary bg-white text-center text-lg py-1.5 px-3.5 hover:bg-opacity-70"
                            >
                              {t("inscription")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={"/SignIn"}
                        onClick={() => console.log("removeToken")}
                        href=""
                        className=" hover:bg-primary hover:text-white ease-linear transition recursive flex items-center font-semibold text-primary border border-primary bg-white text-center text-lg py-1.5 px-3.5 hover:bg-opacity-70"
                      >
                        {t("déconnexion")}
                      </Link>
                    )
                  ) : null}
                </ul>
              </ul>
              </div>
            </div>
          </div>
      ) : (
        <>
          <motion.ul className="flex gap-[2rem] text-sm">
            {links.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1, originX: 0, color: "#D4AD6B" }}
                transition={{ type: "tween", duration: 0.2 }}
                className="font-semibold opacity-80 tracking-wider cursor-pointer"
              >
                {l ? (
                  <ScrollLink
                    to={link.id}
                    spy={true}
                    smooth={true}
                    offset={link.offset}
                    duration={500}
                    className={`nav-item ${
                      link.to === location.pathname ? "active text-primary" : ""
                    }`}
                  >
                    {link.label}
                  </ScrollLink>
                ) : (
                  <>
                    <Link
                      className={`nav-item ${
                        link.to === location.pathname
                          ? "active text-primary"
                          : ""
                      }`}
                      to={link.to}
                    >
                      {link.label}
                    </Link>
                  </>
                )}
              </motion.li>
            ))}
          </motion.ul>
          {landing ? (
            logged ? (
              <div className=" space-x-6">
                <div className="flex gap-[1rem]">
                  <Link
                    to={"/SignIn"}
                    href=""
                    className="hover:bg-primary hover:text-white ease-linear transition recursive flex items-center font-semibold text-primary border border-primary bg-white text-center text-lg py-1.5 px-3.5 hover:bg-opacity-70"
                  >
                    {t("connexion")}
                  </Link>
                  <div className="flex gap-[1rem]">
                    <Link
                      to={"/SignUp"}
                      href=""
                      className=" hover:bg-primary hover:text-white ease-linear transition recursive flex items-center font-semibold text-primary border border-primary bg-white text-center text-lg py-1.5 px-3.5 hover:bg-opacity-70"
                    >
                      {t("inscription")}
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to={"/SignIn"}
                onClick={() => console.log("removeToken")}
                href=""
                className=" hover:bg-primary hover:text-white ease-linear transition recursive flex items-center font-semibold text-primary border border-primary bg-white text-center text-lg py-1.5 px-3.5 hover:bg-opacity-70"
              >
                {t("déconnexion")}
              </Link>
            )
          ) : null}
        </>
      )}
    </nav>
  );
};

export default NavBar;
