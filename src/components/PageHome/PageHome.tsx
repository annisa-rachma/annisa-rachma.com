import React from "react";
import Title from "../Title/Title";
import Navbar from "../Navbar/Navbar";

export default function PageHome() {
  return (
    <>
      <div className="flex flex-col">
        {/* <div className="fixed top-0 mt-8 left-1/2 transform -translate-x-1/2 w-full  "> */}
          <Navbar />
        {/* </div> */}

        {/* <div> */}
          <Title />
        {/* </div> */}
      </div>
    </>
  );
}
