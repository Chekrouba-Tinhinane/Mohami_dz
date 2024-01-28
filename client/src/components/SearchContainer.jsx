import React, { useState, useEffect } from "react";
import Selector from "./Selector";
import axios from "axios";

const SearchContainer = ({ setLawyers }) => {
  // State for selected options
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const [specialities, setSpecialities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/speciality/speciality_list"
        );
        setSpecialities(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleFilterClick = () => {
    const filters = {
      speciality: selectedSpeciality,
      location: selectedLocation,
      language: selectedLanguage,
    };

    console.log(filters);

    // Implement filtering functionality here
    // You can filter the lawyers based on the selected filters
    axios
      .get("http://localhost:8000/avocat/recherche-avec-filtre", {
        params: filters,
      }) // Adjust the URL according to your backend route
      .then((response) => {
        console.log(response.data);
        setLawyers(response.data);
        // Update search results state with filtered data from the backend
        // Reset current page to 1 when applying new filters
      })
      .catch((error) => {
        console.error("Error fetching filtered results:", error);
      });
  };

  const lang = [{ value: "french" }, { value: "arabic" }];

  return (
    <div className="flex flex-col gap-3 pb-4 w-full bg-lightBrown">
      <h3 className="place-self-start text-lightTypo text-opacity-65 font-semibold tracking-wide p-4">
        Recherche Avancée
      </h3>

      <div className="flex justify-center gap-3 text-lightTypo font-semibold ">
        <div className="flex flex-col basis-[30%] gap-3">
          <div>Spécialité</div>
          <Selector
            list={specialities}
            selectCategory="Spécialité"
            selectedOption={selectedSpeciality}
            setSelectedOption={setSelectedSpeciality}
          />
        </div>
        <div className="flex flex-col basis-[30%] gap-3">
          <div>Localisation</div>
          <Selector
            location={true}
            selectedOption={selectedLocation}
            setSelectedOption={setSelectedLocation}
          />
        </div>
        <div className="flex flex-col basis-[30%] gap-3">
          <div>Langue</div>
          <Selector
            list={lang}
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
