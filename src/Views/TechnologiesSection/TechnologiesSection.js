import Card from "./Components/Card";
import ReactSVG from "../../Assets/SVGs/react.svg";
import AngularSVG from "../../Assets/SVGs/angular.svg";
import DotnetSVG from "../../Assets/SVGs/dotnet.svg";
import FirebaseSVG from "../../Assets/SVGs/firebase.svg";
import HtmlSVG from "../../Assets/SVGs/html.svg";
import CssSVG from "../../Assets/SVGs/css.svg";
import JavascriptSVG from "../../Assets/SVGs/javascript.svg";
import CsharpSVG from "../../Assets/SVGs/csharp.svg";
import TailwindSVG from "../../Assets/SVGs/tailwind.svg";
import FigmaSVG from "../../Assets/SVGs/figma.svg";
import MysqlSVG from "../../Assets/SVGs/mysql.svg";
import MongodbSVG from "../../Assets/SVGs/mongodb.svg";
import BootstrapSVG from "../../Assets/SVGs/bootstrap.svg";
import NodejsSVG from "../../Assets/SVGs/nodejs.svg";
import MuiSVG from "../../Assets/SVGs/mui.svg";
import gitSVG from "../../Assets/SVGs/git.svg";
import GraphqlSVG from "../../Assets/SVGs/graphql.svg";
import PythonSVG from "../../Assets/SVGs/python.svg";
import CppSVG from "../../Assets/SVGs/cpp.svg";
import TypescriptSVG from "../../Assets/SVGs/typescript.svg";
import Background from "../../Assets/Photos/background.jpg";
import React, { useState, useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";

const TechnologiesSection = () => {
  const initialCards = [
    { imgSource: ReactSVG, name: "React", expLevel: "Experienced" },
    { imgSource: AngularSVG, name: "Angular", expLevel: "Intermediate" },
    { imgSource: DotnetSVG, name: ".NET", expLevel: "Beginner" },
    { imgSource: FirebaseSVG, name: "Firebase", expLevel: "Experienced" },
    { imgSource: HtmlSVG, name: "HTML5", expLevel: "Experienced" },
    { imgSource: CssSVG, name: "CSS3", expLevel: "Experienced" },
    { imgSource: JavascriptSVG, name: "Javascript", expLevel: "Intermediate" },
    { imgSource: CsharpSVG, name: "C#", expLevel: "Beginner" },
    { imgSource: TailwindSVG, name: "Tailwind", expLevel: "Experienced" },
    { imgSource: NodejsSVG, name: "NodeJS", expLevel: "Experienced" },
  ];
  const allCards = [
    { imgSource: ReactSVG, name: "React", expLevel: "Experienced" },
    { imgSource: AngularSVG, name: "Angular", expLevel: "Intermediate" },
    { imgSource: DotnetSVG, name: ".NET", expLevel: "Beginner" },
    { imgSource: FirebaseSVG, name: "Firebase", expLevel: "Experienced" },
    { imgSource: HtmlSVG, name: "HTML5", expLevel: "Experienced" },
    { imgSource: CssSVG, name: "CSS3", expLevel: "Experienced" },
    { imgSource: JavascriptSVG, name: "Javascript", expLevel: "Intermediate" },
    { imgSource: CsharpSVG, name: "C#", expLevel: "Beginner" },
    { imgSource: TailwindSVG, name: "Tailwind", expLevel: "Experienced" },
    { imgSource: NodejsSVG, name: "NodeJS", expLevel: "Experienced" },
    { imgSource: FigmaSVG, name: "Figma", expLevel: "Experienced" },
    { imgSource: MysqlSVG, name: "MySQL", expLevel: "Intermediate" },
    { imgSource: MongodbSVG, name: "MongoDB", expLevel: "Beginner" },
    { imgSource: BootstrapSVG, name: "Bootstrap", expLevel: "Experienced" },
    { imgSource: MuiSVG, name: "Material UI", expLevel: "Experienced" },
    { imgSource: PythonSVG, name: "Python", expLevel: "Experienced" },
    { imgSource: gitSVG, name: "GIT", expLevel: "Intermediate" },
    { imgSource: CppSVG, name: "C++", expLevel: "Beginner" },
    { imgSource: GraphqlSVG, name: "Graphql", expLevel: "Experienced" },
    { imgSource: TypescriptSVG, name: "TypeSrcipt", expLevel: "Experienced" },
    
  ];
  const [showAll, setShowAll] = useState(false);

  // Use the currentCards array based on showAll state
  const currentCards = showAll ? allCards : initialCards;

  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="technologies-section"
      className="relative bg-cover bg-center "
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div
        className=" inset-0 bg-[#1d1d20] opacity-80"
        style={{
          position: "absolute",
        }}
      ></div>

      <div className="container flex flex-col mx-auto p-8">
      <div className="w-full flex flex-col items-center ">
        <h1
          data-aos="fade-up"
          class="text-5xl text-center lg:text-7xl  lg:pt-0 mt-[50px] lg:mt-[105px] mb-2 text-white font-custom3"
        >
          Technologies I Learned
        </h1>
        <h2 data-aos="fade-up" class="text-lg text-gray-300 mb-[20px] lg:mb-[60px]">
        See All the technologies I have used
        </h2>
      </div>
       
        <div  className="w-full draggable">
          <div className="container flex flex-col items-center gap-16 mx-auto my-10 lg:my-10">
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
          {currentCards.map((card, index) => (
            <div key={index} data-aos='fade-up' className={`transition-opacity duration-500 opacity-${showAll ? '100' : '0'}`}>
              <Card
                imgSource={card.imgSource}
                name={card.name}
                expLevel={card.expLevel}
              />
            </div>
          ))}
        </div>
          </div>

          <div className="flex container justify-center">
            <a
              href="#_"
              onClick={() => setShowAll(!showAll)}
              class="mb-20 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-orange-800 rounded-full shadow-md group"
            >
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-800 group-hover:translate-x-0 ease">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-orange-800 transition-all duration-300 transform group-hover:translate-x-full ease">
              {showAll ? 'Show Less' : 'See All'}
              </span>
              <span class="relative invisible">Button Text</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TechnologiesSection;
