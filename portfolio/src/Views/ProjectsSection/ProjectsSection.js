import { Card } from "./Components/Card";
import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";
import MasonryGrid from "./Components/MasonryGrid";
import Winetour from "../../Assets/ProjectPhotos/borvidek.jpg"
import Food4Me from "../../Assets/ProjectPhotos/food4me.jpg"
import CatsleSearcher from "../../Assets/ProjectPhotos/kastelykereso.jpg"
import Foodemy from "../../Assets/ProjectPhotos/foodemy.jpg"
import Seatwave from "../../Assets/ProjectPhotos/seatwave.jpg"
export const ProjectsSection = () => {
  const items = [
    {
      imageSrc: Winetour,
      name: "Sopron Winetour App",
      description: "description for Image 1",
      href:"https://github.com/farkas1070/Winetour",
      id:'SopronWineTour',
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1699256239941-0b7222476c71?q=80&w=3240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "E-mdecinie",
      description: "description for Image 2",
      href:"https://github.com/farkas1070/ECommerceApp",
      id:'EMedicine',
    },
    {
      imageSrc: Food4Me,
      name: "Food4Me",
      description: "description for Image 2",
      href:"https://github.com/farkas1070/food4me",
      id:'food4Me',
    },
    {
      imageSrc: Seatwave,
      name: "Seatwave",
      description: "description for Image 4",
      href:"https://github.com/farkas1070/MovieSeatTrackerApp",
      id:'Seatwave',
    },
    {
      imageSrc: CatsleSearcher,
      name: "CastleSearcher",
      description: "description for Image 5",
      href:"https://github.com/farkas1070/FamiliyGeoLocator",
      id:'CastleSearcher',
    },
    {
      imageSrc: Foodemy,
      name: "Foodemy",
      description: "description for Image 2",
      href:"https://github.com/farkas1070/MovieSeatTrackerApp",
      id:'Foodemy',
    }
    // Add more items as needed
  ];
  return (
    <div id="portfolio-section" className="flex flex-col w-full items-center bg-[#212024]">
      <div className="w-full flex flex-col items-center">
        <h1
          data-aos="fade-up"
          class="text-7xl pt-8 lg:pt-0 mt-[105px] mb-2 text-white font-custom3"
        >
          My Portfolio
        </h1>
        <h2 data-aos="fade-up" class="text-lg text-gray-300 mb-[60px]">
          See some of the projects I have created over the years
        </h2>
      </div>

      <div data-aos="fade-up" className="container mb-20">
        <MasonryGrid items={items} />
      </div>
    </div>
  );
};
