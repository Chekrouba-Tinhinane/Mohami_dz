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
    <div className="flex flex-col gap-3 pb-4 w-full bg-lightBrown">
      <h3 className="place-self-start text-opacity-65 font-semibold tracking-wide p-4">
        Recherche Avancée
      </h3>

      <div className="flex gap-3 ">

        <div className="flex flex-col w-[150%] gap-3">
          <div>Spécialité</div>
          <Selector
            selectCategory="Spécialité"
            selectedOption={selectedSpeciality}
            setSelectedOption={setSelectedSpeciality}
          />
        </div>

       
      </div>

      <button className="bg-primary text-white px-6 py-2" onClick={handleFilterClick}>
        Filtrer
      </button>
    </div>
  );
};

export default SearchContainer;
