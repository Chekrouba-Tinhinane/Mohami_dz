import React from "react";
import LawyerCard from "./LawyerCard";

const EvalLawyers = ({ lawyers }) => {
  return (
    <div className="" >
      EvalLawyers
      {lawyers?.map((e, i) => (
        <LawyerCard lawyer={lawyer} key={i} />
      ))}
    </div>
  );
};

export default EvalLawyers;
