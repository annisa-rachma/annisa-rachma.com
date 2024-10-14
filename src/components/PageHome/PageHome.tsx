import React from "react";
import Title from "../Title/Title";
import Navbar from "../Navbar/Navbar";

export default function PageHome() {
  return (
    <>
      <div className=" mx-auto  ">
        <div className="">
          <Navbar />
        </div>

        <div className="h-[100vh] flex items-center justify-center ">
          <Title />
        </div>
      </div>
    </>
  );
}
