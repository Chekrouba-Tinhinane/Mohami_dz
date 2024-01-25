import React, { useState } from "react";

const HomeLayout = ({ pageComponent }) => {
  return (
    <div className=" flex bg-darkBG min-h-screen ">
      <div className={``}></div>

      <div className={`  `}>{pageComponent}</div>
    </div>
  );
};

export default HomeLayout;
