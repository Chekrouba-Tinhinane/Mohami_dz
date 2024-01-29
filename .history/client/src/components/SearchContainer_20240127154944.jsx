import React, { useState } from "react";
import Selector from "./Selector";

const SearchContainer = () => {
  // State for selected options
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleFilterClick = () => {
    // Implement your filter logic here using selected options
    // You can use selectedSpeciality, selectedLocation, and selectedLanguage states
  };
  const lang = [  {value: "french", "arabic" ]

  return (
    <div className="flex flex-col gap-3 pb-4 w-full bg-lightBrown">
      <h3 className="place-self-start text-lightTypo text-opacity-65 font-semibold tracking-wide p-4">
        Recherche Avancée
      </h3>

      <div className="flex justify-center gap-3 text-lightTypo font-semibold ">
        <div className="flex flex-col basis-[30%] gap-3">
          <div>Spécialité</div>
          <Selector
            list={[{ value: "imed" }]}
            selectCategory="Spécialité"
            selectedOption={selectedSpeciality}
            setSelectedOption={setSelectedSpeciality}
          />
        </div>
        <div className="flex flex-col basis-[30%] gap-3">
          <div>Localisation</div>
          <Selector
            location={true}
            selectCategory="Localisation"
            selectedOption={selectedLocation}
            setSelectedOption={setSelectedLocation}
          />
        </div>
        <div className="flex flex-col basis-[30%] gap-3">
          <div>Langue</div>
          <Selector
            list={}
            selectCategory="Langue"
            selectedOption={selectedLanguage}
            setSelectedOption={setSelectedLanguage}
          />
          {/* Implement your language selector here */}
        </div>
      </div>

      <button
        className="bg-primary text-white px-6 py-2 place-self-center"
        onClick={handleFilterClick}
      >
        Filtrer
      </button>
    </div>
  );
};

export default SearchContainer;
