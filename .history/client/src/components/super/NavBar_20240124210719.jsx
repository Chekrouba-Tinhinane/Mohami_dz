import { motion } from "framer-motion";



const NavBar = ()  => {
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