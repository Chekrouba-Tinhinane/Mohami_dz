import React from "react";
import LawyerCard from "./LawyerCard";

const EvalLawyers = ({ lawyers }) => {
  return (
    <div className="" >
      EvalLawyers
      {lawyers?.map((e, i) => (
        <LawyerCard />
      ))}
    </div>
  );
};

export default EvalLawyers;
