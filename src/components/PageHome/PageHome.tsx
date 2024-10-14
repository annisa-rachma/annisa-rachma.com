import React from "react";
import Title from "../Title/Title";
import Navbar from "../Navbar/Navbar";

export default function PageHome() {
  return (
    <>
      <div className=" mx-auto  ">
        
          <Navbar />
       

        <div className="h-[100vh] flex items-center justify-center  px-44 w-full">
          <Title />
        </div>
      </div>
    </>
  );
}
