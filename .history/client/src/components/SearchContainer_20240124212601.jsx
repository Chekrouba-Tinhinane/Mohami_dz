import React from "react";
import Selector from "./Selector";

const SearchContainer = () => {
  return (
    <div className="  flex flex-col items-center bg-lightBrown">
      <h3 className=" place-self-start">Recherche Avancée</h3>
      <div className="flex w-[85%] gap-[3rem] justify-center">
        <div className=" flex flex-col gap-3">
          <div>Spécialité</div> <Selector selectCategory={"Spéccialité"} />
        </div>
        <div className=" flex flex-col gap-3">
          <div>Localisation</div> <div></div>
        </div>
        <div className=" flex flex-col gap-3">
          <div>Langue</div> <div></div>
        </div>
      </div>

      <button className=" bg-primary">Filtrer </button>
    </div>
  );
};

export default SearchContainer;
