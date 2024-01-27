import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom

const NavBar = ({ links, landing }) => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation(); // Use useLocation hook here

  useEffect(() => {
    const currentPath = location.pathname;
    const active = links.find((link) => `/${link.id}` === currentPath);
    if (active) {
      setActiveLink(active.id);
    }
  }, [location, links]);

  return (
    <div
      whileHover={{ scale: 1, originX: 0, color: "#D4AD6B" }}
      transition={{ type: "tween", duration: 0.2 }}
      className={`  ${
        landing ? "px-20" : ""
      } flex items-center pt-6 mb-3 w-full justify-between `}
    >
      <motion.ul className="flex gap-[2rem] text-sm">
        {links.map((link, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1, originX: 0, color: "#D4AD6B" }}
            transition={{ type: "tween", duration: 0.2 }}
            className={`font-semibold opacity-80 tracking-wider cursor-pointer ${
              activeLink === link.id ? "text-primary" : ""
            }`}
          >
            <Link // Use Link component here
              to={link.id}
              className="nav-item" // Remove ScrollLink and add className
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      {landing && (
        <div className="flex gap-[1rem]">
          <Link // Use Link component here
            to={"/SignIn"}
            href=""
            className="recursive flex items-center font-semibold text-primary border border-primary bg-white text-center text-lg py-1.5 px-3.5 hover:bg-opacity-70"
          >
            Se connecter
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
