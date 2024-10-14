import React from "react";
import Title from "../Title/Title";
import Navbar from "../Navbar/Navbar";

export default function PageHome() {
  return (
    <>
      <div className="flex flex-col justify-center relative">
        <div className="">
          <Navbar />
        </div>

        <div className="h-[100vh] flex items-center ">
          <Title />
        </div>
      </div>
    </>
  );
}
