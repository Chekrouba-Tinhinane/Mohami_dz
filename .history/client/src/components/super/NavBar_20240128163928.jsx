import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useUserData } from "../../App";

const NavBar = ({ links, landing }) => {
  const { userData } = useUserData();
  const logged = userData == undefined;
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
            className="font-semibold opacity-80 tracking-wider cursor-pointer"
          >
            <ScrollLink
              to={link.id}
              spy={true}
              smooth={true}
              offset={link.offset}
              duration={500}
              className="nav-item"
            >
              {link.label}
            </ScrollLink>
          </motion.li>
        ))}
      </motion.ul>
      {logged landing? (
           ? (
          <div className="flex gap-[1rem]">
            <Link
              to={"/SignIn"}
              href=""
              className="recursive flex items-center font-semibold text-primary border border-primary bg-white text-center text-lg py-1.5 px-3.5 hover:bg-opacity-70"
            >
              Se connecter
            </Link>
          </div>
        ) : null
      ) : (
        <Link
          to={"/SignIn"}
          onClick={() => console.log("removeToken")}
          href=""
          className="recursive flex items-center font-semibold text-primary border border-primary bg-white text-center text-lg py-1.5 px-3.5 hover:bg-opacity-70"
        >
          Se déconnecter
        </Link>
      )}
    </div>
  );
};

export default NavBar;
