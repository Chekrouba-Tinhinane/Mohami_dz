import React from "react";

const SearchContainer = () => {
  return (
    <div className="  flex flex-col items-center bg-lightBrown">
      <h3 className=" place-self-start">Recherche Avancée</h3>
      <div className="flex w-[85%] gap-[3rem] justify-center">
        <div className=" flex flex-col gap-3">
          <div>2</div> <div>1</div>
        </div>
        <div className=" flex flex-col gap-3">
          <div>2</div> <div>1</div>
        </div>
        <div className=" flex flex-col gap-3">
          <div>2</div> <div>1</div>
        </div>
      </div>

      <button className=" bg-primary">Filtrer </button>
    </div>
  );
};

export default SearchContainer;
