import React, { useState } from "react";
import msg from "../../assets/icons/contact/msg.svg";
import footer from "../../assets/landing/footer.jpg";
import { useTranslation } from 'react-i18next';
import i18n from "../../../Translation/i18n";

import twitter from "../../assets/icons/footer/twitter.svg";
import fb from "../../assets/icons/footer/fb.svg";
import linkedin from "../../assets/icons/footer/linkedin.svg";

function Footer() {
  const { t, i18n } = useTranslation(); // Use useTranslation hook to access translation function

  const [language, setLanguage] = useState(i18n.language);

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
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
      <div className="absolute w-full flex justify-center pt-[4rem]">
        <div className="flex items-center justify-between  px-16 w-full">
          <div className="flex flex-col gap-6">
            <h3 className=" text-2xl recursive">{t("help")}</h3>
            <ul className="flex flex-col font-light gap-2">
              <li>{t("faq")}</li>
              <li>{t("privacyPolicy")}</li>
              <li>{t("termsAndConditions")}</li>
              <li>{t("contactUs")}</li>
            </ul>

            <div className="language-selector flex gap-2 items-center">
              <label htmlFor="language-select">{t("language")}:</label>
              <select 
                className="bg-transparent font-semibold"
                id="language-select"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="fr" className=" text-black">{t("french")}</option>
                <option value="ar" className=" text-black">{t("arabic")}</option>
              </select>
            </div>
          </div>

          <div className="flex place-self-start gap-[3rem]">
            <img src={twitter} className=" w-7 cursor-pointer" alt="" />
            <img src={fb} className=" w-4.5 cursor-pointer" alt="" />
            <img src={linkedin} className=" w-7 cursor-pointer" alt="" />
          </div>

          <div className="border-l border-l-white pl-10 flex flex-col gap-5 h-[85%] place-self-start">
            <p className="flex gap-2">
              {t("contactUs")}
              <span>
                <img src={msg} alt="" />
              </span>
              <p onClick={handleDelete}>Imed</p>
            </p>
            <div className="flex flex-col gap-2 font-light w-[80%]">
              <p>{t("address")}</p>
              <p>{t("phone")}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
