import Navbar from "../Navbar/Navbar";
import Video from "../../Assets/Videos/test.mp4";
import Pic from "../../Assets/Photos/portrait.png";
import { TypeAnimation } from "react-type-animation";
import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";

const TopSection = () => {
  return (
    <>
      <div className="relative min-h-screen ">
        <video
          className="absolute inset-0 object-cover w-full h-full z-0"
          autoPlay
          muted
          loading="lazy"
          loop
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex bg-black opacity-40"></div>
        <div className="absolute inset-0 flex flex-col  justify-center flex  ">
          <div className="text-center">
            <section class="">
              <div class="gap-16 items-center py-8 px-4 mx-auto  lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 container">
                <div
                  data-aos="fade-right"
                  class="  text-white flex flex-col items-start"
                >
                  <h1 class=" mb-4 text-5xl font-custom3 flex md:text-6xl xl:text-7xl dark:text-white text-white ">
                    Hi I'm Márton
                  </h1>
                  <div className="flex items-center justify-start text-orange-500 mt-12 mb-5">
                    <h1 className="text-2em  text-white">I Love{"   "}</h1>
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        ` Frontend Development`,
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        " Backend Development",
                        1000,
                        " Designing Beautiful Websites",
                        1000,
                        " Learning New Things",
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{
                        fontSize: "2em",
                        display: "inline-block",
                        alignItems: "center",
                        marginLeft: 8,
                      }}
                      repeat={Infinity}
                    />
                  </div>
                  <div>
                    <a
                      href="#_"
                      class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-orange-600 group"
                    >
                      <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-white group-hover:h-full"></span>
                      <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg
                          class="w-5 h-5 text-white"
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
                      <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg
                          class="w-5 h-5 text-orange-600"
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
                      <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-orange-600">
                        About Me
                      </span>
                    </a>
                    <a
                      href="#_"
                      class="ml-5 relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-orange-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                    >
                      <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-orange-600 group-hover:h-full"></span>
                      <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg
                          class="w-5 h-5 text-orange-600"
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
                      <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg
                          class="w-5 h-5 text-white"
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
                      <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                        My Projects
                      </span>
                    </a>
                  </div>
                </div>
                <div data-aos="fade-left" class="">
                  <img
                    src={Pic}
                    alt="Your Image"
                    className="mx-auto w-4/5 h-4/5  "
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopSection;
