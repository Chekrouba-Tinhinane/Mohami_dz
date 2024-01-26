import React, { useState } from "react";

const HomeLayout = () => {
  return (
    <div className=" flex bg-darkBG min-h-screen ">
      <div className={``}>
        
      </div>

      <div
        className={` ${
          isSidebarOpen ? " basis-[80%] " : " basis-[80%]"
        } h-full w-full my-6 `}
      >
        {pageComponent}
      </div>
    </div>
  );
};

export default HomeLayout;
