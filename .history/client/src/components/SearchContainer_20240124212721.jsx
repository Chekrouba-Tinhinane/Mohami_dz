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

  return (
    <div className="flex flex-col items-center bg-lightBrown">
      <h3 className="place-self-start">Recherche Avancée</h3>
      <div className="flex w-[85%] gap-[3rem] justify-center">
        <div className="flex flex-col gap-3">
          <div>Spécialité</div>
          <Selector
            selectCategory="Spécialité"
            selectedOption={selectedSpeciality}
            setSelectedOption={setSelectedSpeciality}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div>Localisation</div>
          <Selector
            selectCategory="Loca"
            selectedOption={selectedSpeciality}
            setSelectedOption={setSelectedSpeciality}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div>Langue</div>
          <Selector
            selectCategory="Spécialité"
            selectedOption={selectedSpeciality}
            setSelectedOption={setSelectedSpeciality}
          />
          {/* Implement your language selector here */}
        </div>
      </div>

      <button className="bg-primary" onClick={handleFilterClick}>
        Filtrer
      </button>
    </div>
  );
};

export default SearchContainer;
