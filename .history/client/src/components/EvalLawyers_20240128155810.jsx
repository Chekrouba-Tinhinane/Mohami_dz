import React from "react";

const EvalLawyers = ({ lawyers }) => {
  return (
    <div className="" >
      EvalLawyers
      {lawyers?.map((e, i) => (
        <p onClick={() => console.log(e)}>{i}</p>
      ))}
    </div>
  );
};

export default EvalLawyers;
