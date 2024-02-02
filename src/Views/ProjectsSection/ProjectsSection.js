import { Card } from "./Components/Card";
import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";
import MasonryGrid from "./Components/MasonryGrid";
import Winetour from "../../Assets/ProjectPhotos/borvidek.jpg";
import Food4Me from "../../Assets/ProjectPhotos/food4me.jpg";
import CatsleSearcher from "../../Assets/ProjectPhotos/kastelykereso.jpg";
import Foodemy from "../../Assets/ProjectPhotos/foodemy.jpg";
import Seatwave from "../../Assets/ProjectPhotos/seatwave.jpg";
import Ecommerce from "../../Assets/ProjectPhotos/ecommerce.jpg";
import WorkWave from "../../Assets/ProjectPhotos/workWave.jpg"
export const ProjectsSection = () => {
  const items = [
    {
      imageSrc: Ecommerce,
      name: "Shuuz",
      description: "An Online Shoe E-commrce platform, Made with React and .NET CORE",
      href: "https://github.com/farkas1070/EcommerceProject",
      id: "EMedicine",
    },
    {
      imageSrc: Winetour,
      name: "Sopron Winetour App",
      description:
        "An application made for the Sopron Wine Region Group in Sopron, Made with React Native and Strapi",
      href: "https://github.com/farkas1070/Winetour",
      id: "SopronWineTour",
    },
    {
      imageSrc: Food4Me,
      name: "Food4Me",
      description:
        "A Fitness, Social Media, And short vide-viewing application, Made with React Native and Firebase",
      href: "https://github.com/farkas1070/food4me",
      id: "food4Me",
    },
    {
      imageSrc: Seatwave,
      name: "Seatwave",
      description: "A Cinema Booking Website Made with React and Firebase",
      href: "https://github.com/farkas1070/MovieSeatTrackerApp",
      id: "Seatwave",
    },
    {
      imageSrc: CatsleSearcher,
      name: "CastleSearcher",
      description:
        "A website dedicated to storing images taken in past vacations, made with React and Firebase",
      href: "https://github.com/farkas1070/FamiliyGeoLocator",
      id: "CastleSearcher",
    },

    {
      imageSrc: Foodemy,
      name: "Foodemy",
      description:
        "An Online Food delivery platform made with Angular and Nodejs",
      href: "https://github.com/farkas1070/MovieSeatTrackerApp",
      id: "Foodemy",
    },
    {
      imageSrc: WorkWave,
      name: "WorkWave",
      description: "A job listing website made with Laravel and Angular",
      href: "https://github.com/farkas1070/TailwindComponents",
      id: "WorkWave",
    },
    // Add more items as needed
  ];
  return (
    <div
      id="portfolio-section"
      className="flex flex-col w-full items-center bg-[#212024] p-8"
    >
      <div className="w-full flex flex-col items-center ">
        <h1
          data-aos="fade-up"
          class="text-5xl text-center lg:text-7xl  lg:pt-0 mt-[50px] lg:mt-[105px] mb-2 text-white font-custom3"
        >
          My Portfolio
        </h1>
        <h2
          data-aos="fade-up"
          class="text-lg text-gray-300 mb-[20px] lg:mb-[60px] text-center"
        >
          See some of the projects I have created over the years
        </h2>
      </div>

      <div data-aos="fade-up" className="container mb-20">
        <MasonryGrid items={items} />
      </div>
    </div>
  );
};
