
import React from "react";
import "aos/dist/aos.css"; // Import AOS CSS

import HistoryCard from "./Components/HistoryCard";
export const HistorySection = () => {
  return (
    <div
      id="resume-section"
      className=" relative bg-cover bg-center bg-[#040304]"
    >
      <div className="w-full flex flex-col items-center">
        <h1
          data-aos="fade-up"
          class="text-7xl pt-8 lg:pt-0 mt-[105px] mb-2 text-white font-custom3"
        >
          My Resume
        </h1>
        <h2 data-aos="fade-up" class="text-lg text-gray-300 mb-[60px]">
          My Education and Prior work experience
        </h2>
      </div>
      <div
        data-aos="fade-up"
        class="container mx-auto flex flex-col sm:grid sm:grid-cols-2 gap-4"
      >
        <div class="flex  justify-center">
        <div className=" relative flex justify-center  mb-20">
      <h3 class="absolute top-0 left-0 text-2xl text-white font-bold z-20 mt-6  font-custom ">
        Education
      </h3>
      <ol className=" mt-20">
        <li class="border-l-2 border-orange-600">
          <HistoryCard cardTitle={"Sopron University"} date={"01 / 07 / 2020 - Now"} description={"I have studied Business Informatics, from 2022 to 2024. This time I learned the most"} />
        </li>
        <li class="border-l-2 border-orange-600">
          <HistoryCard  cardTitle={"Jurisch Miklós Gimnázium és Kollégium"} date={"01 / 07 / 2020 - Now"} description={"In high school I already studied programming and website technologies."} />
        </li>
        <li class="border-l-2 border-orange-600">
          <HistoryCard cardTitle={"Árpád Házi Szent Margit Óvodaés Általános Iskola"} date={"01 / 07 / 2020 - Now"} description={"We moved in 2013, so I spent the last remaining 2 years here"}  />
        </li>
      </ol>
    </div>
        </div>
        <div class="flex  justify-center mt-4 sm:mt-0">
        <div className=" relative flex justify-center  mb-20">
      <h3 class="absolute top-0 left-0 text-2xl text-white font-bold z-20 mt-6  font-custom ">
        Work Experience
      </h3>
      <ol className=" mt-20">
        <li class="border-l-2 border-orange-600">
          <HistoryCard cardTitle={"Effix Marketing"} date={"06 / 06 / 2023 - 30 / 09 / 2023"} description={"This was my first Internship, where I worked as a software engineer. I helped in creating the Sopron Wine Tourism app"} />
        </li>
        <li class="border-l-2 border-orange-600">
          <HistoryCard  cardTitle={"PDW Zustellung"} date={"01 / 11 / 2020 - Now"} description={"While I was studying in university, and also now, I worked as a newspaper deliverer so I could finance myself. My job was to deliver Newspapers in 3 different towns"} />
        </li>
        
      </ol>
    </div>
        </div>
      </div>
    </div>
  );
};
