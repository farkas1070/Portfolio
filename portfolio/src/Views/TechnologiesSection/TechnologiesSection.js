import React from "react";

import Card from "./Components/Card";
const TechnologiesSection = () => {
  return (
    <div className=" relative bg-black">
      <div class="container flex flex-col mx-auto ">
        <p className="text-white flex justify-center mt-11 text-2xl font-custom">
          Technologies I used So Far
        </p>
        <div class="w-full draggable">
          <div class="container flex flex-col items-center gap-16 mx-auto my-32">
            <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TechnologiesSection;
