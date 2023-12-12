
import React from "react";
import "aos/dist/aos.css"; // Import AOS CSS

import HistoryCard from "./Components/HistoryCard";
export const HistorySection = () => {
  return (
    <div
      id="resume-section"
      className=" relative bg-cover bg-center bg-[#040304] p-8"
    >
      <div className="w-full flex flex-col items-center">
        <h1
          data-aos="fade-up"
          class="text-6xl lg:text-7xl  lg:pt-0 mt-[50px] lg:mt-[105px] mb-2 text-white font-custom3"
        >
          My Resume
        </h1>
        <h2 data-aos="fade-up" class="text-lg text-gray-300 mb-[20px] lg:mb-[60px]">
        My Education and Prior work experience
        </h2>
      </div>
      
      <div
        data-aos="fade-up"
        class="container mx-auto flex flex-col lg:grid sm:grid-cols-2 gap-4"
      >
        <div class="flex  justify-center">
        <div className=" relative flex justify-center  mb-20">
      <h3 class="absolute top-0 left-0 text-2xl text-white font-bold z-20 mt-6  font-custom ">
        Education
      </h3>
      <ol className=" mt-20">
        <li class="border-l-2 border-orange-600">
          <HistoryCard cardTitle={"Sopron University"} date={"01 / 07 / 2020 - Now"} description={"I have studied Business Informatics, from 2020 to 2024. This time I have worked on many small projects on my own, also this was the time when I worked my first Intership at Effix marketing"} />
        </li>
        <li class="border-l-2 border-orange-600">
          <HistoryCard  cardTitle={"Jurisch Miklós Gimnázium és Kollégium"} date={"01 / 07 / 2020 - Now"} description={"This was the time when I first started to learn programming, and get into the world of website development. Although I have learned the most in university, I got a good fundation here."} />
        </li>
        <li class="border-l-2 border-orange-600">
          <HistoryCard cardTitle={"Árpád Házi Szent Margit Óvoda és Általános Iskola"} date={"01 / 07 / 2020 - Now"} description={"In 2013 we moved from my hometown to Kőszeg in Hungary so I had to change schools. Back then I didn't know what I want to b when I grow up, so I just focsed on learning everything the best I could"}  />
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
          <HistoryCard cardTitle={"Effix Marketing"} date={"06 / 06 / 2023 - 30 / 09 / 2023"} description={"This was my first Internship, where I worked as a software engineer. I helped in creating the Sopron Wine Tourism app which was built using React Native, and the data for it was provided by an already built Wordpress website's api. During This Time I worked with very talented people and I'm looking forward to my next positions."} />
        </li>
        <li class="border-l-2 border-orange-600">
          <HistoryCard  cardTitle={"PDW Zustellung"} date={"01 / 11 / 2020 - Now"} description={"While I was studying I had to work to be able to finance myself, so I worked as a newspaper deliverer in 3 different towns in Austria. I still do this job to this day, until I finish University, and find a new job in IT.The job included the delivery of several Newspapers like Krone ad Kurier, and mainly had to be done very early in the morning"} />
        </li>
        
      </ol>
    </div>
        </div>
      </div>
    </div>
  );
};
