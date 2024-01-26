import React from "react";
import msg from "../assets/icons/contact/msg.svg";
import footer from "../assets/landing/footer.jpg";

import twitter from "../assets/icons/footer/twitter.svg";
import fb from "../assets/icons/footer/fb.svg";
import linkedin from "../assets/icons/footer/linkedin.svg";
import l from "../"

function Footer() {
  const [language, setLanguage] = useState("fr");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    // You can add logic here to change the language of your website
    // For example, you might reload the page or fetch translated content from a server
  };
  return (
    <footer
      id="footer"
      className="h-[320px] relative flex w-full justify-center mt-[10rem] text-white"
    >
      <img src={footer} alt="" className="w-full object-cover" />
      {/* sixth section */}
      <div className="absolute w-full flex justify-center py-[4rem]">
        <div className="flex items-center justify-between px-16 max-w-[86rem] w-full">
          <div className="flex flex-col gap-6">
            <h3 className=" text-2xl">AIDE?</h3>
            <ul className="flex flex-col font-light gap-2">
              <li>FAQ</li>
              <li>PRIVACY POLICY</li>
              <li>Termes et Conditions</li>
              <li>Contactez nous</li>
            </ul>

            <div className="language-selector font-light">
              <label htmlFor="language-select">Language:</label>
              <select
                id="language-select"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="fr">Français</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>

          <div className="flex place-self-start gap-[3rem]">
            <img src={twitter} alt="" />
            <img src={fb} alt="" />
            <img src={linkedin} alt="" />
          </div>

          <div className="border-l border-l-white pl-10 flex flex-col gap-5 h-[85%] place-self-start">
            <p className="flex gap-2">
              CONTACTEZ NOUS
              <span>
                <img src={msg} alt="" />
              </span>
            </p>
            <div className="flex flex-col gap-2 font-light w-[80%]">
              <p>Rue Cheikh Ammar, Béjaia, Algeria</p>
              <p>Tél 1-888-888-888</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
