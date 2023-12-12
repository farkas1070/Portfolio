import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";
import Landscape from "../../Assets/Photos/me.jpg";
import ProgressiveImage from "./Components/ProgressiveImage";
import Lebenslauf from "../../Assets/Other/Lebenslauf.pdf";
import Önéletrajz from "../../Assets/Other/Önéletrajz.pdf";
const AboutMeSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Only trigger the animation once
    });
  }, []);

  return (
    <div
      id="about-me-section"
      className="relative bg-[#1d1d1d] flex flex-col items-center pb-5 lg:pb-20"
    >
      <div className="w-full flex flex-col items-center">
        <h1
          data-aos="fade-up"
          class="text-6xl lg:text-7xl  lg:pt-0 mt-[50px] lg:mt-[105px] mb-2 text-white font-custom3"
        >
          About Me
        </h1>
        <h2 data-aos="fade-up" class="text-lg text-gray-300 mb-[0px] lg:mb-[60px]">
          Who am I and what I do
        </h2>
      </div>
      <section
        data-aos="fade-up"
        class="mt-12 flex flex-wrap p-8 md:p-14  container justify-center"
      >
        <div class="w-full md:w-4/12 order-last md:order-first">
          <img
            loading="lazy"
            src={Landscape}
            alt="about"
            class="md:pr-14 md:h-[600px]"
          />
        </div>
        <div class="w-full md:w-7/12 md:pl-20 h-full">
          <div class="relative rounded-lg bg-orange-600 inline-block p-2 text-white mb-8">
            <div class="absolute bottom-1 left-0 transform left-2 rotate-45 -mb-2 h-6 w-6 bg-orange-600 z-10"></div>
            <p class="relative  z-20">HALLO</p>
          </div>
          <h1 class="text-4xl text-white">
            I'm <span class="font-bold">Márton Simon</span>
          </h1>
          <h2 class="text-xl text-white">Junior Web Developer</h2>
          <p class="my-4 text-white">
            I have been learning Web development for many years, I also worked
            with IT companies before like Effix marketing Kft.
          </p>
          <hr class="bg-orange-600 my-8" />
          <ul class="flex flex-col">
            <li class="mb-6 flex flex-row">
              <div class="font-bold w-1/12 text-white">Age</div>
              <div class="ml-12 w-2/3 text-white">23</div>
            </li>
            <li class="mb-6 flex flex-row text-white">
              <div class="font-bold w-1/12">Address</div>
              <div class="ml-12 w-2/3">Lutzmannsburg Hofstatt 28</div>
            </li>
            <li class="mb-6 flex flex-row text-white">
              <div class="font-bold w-1/12">Phone</div>
              <div class="ml-12 w-2/3">+43 663 1283288</div>
            </li>
            <li class="mb-6 flex flex-row text-white">
              <div class="font-bold w-1/12">Email</div>
              <div class="ml-12 w-2/3">
                <a href="smarton0614@gmail.com" class="flex items-center">
                  <svg
                    class="h-6 mr-2 text-black inline"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                    ></path>
                  </svg>
                  smarton0614@gmail.com
                </a>
              </div>
            </li>
            <li class="mb-6 flex flex-row text-white">
              <div class="w-1/12">
                <div class="inline-block bg-orange-600 p-1 rounded text-white">
                  Service
                </div>
              </div>
              <div class="ml-12 w-2/3">
                Website Design, Frontend Development, Backend Development
              </div>
            </li>
            <li class="mb-6 flex flex-row text-white">
              <div class="font-bold w-1/12">Resumes</div>
              <div class="ml-12 w-2/3">
                <a
                  href={Önéletrajz}
                  download="Önéletrajz"
                  target="_blank"
                  class="relative px-5 py-2 font-medium text-white group"
                >
                  <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-orange-400 group-hover:bg-orange-600 group-hover:skew-x-12"></span>
                  <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-orange-600 group-hover:bg-orange-400 group-hover:-skew-x-12"></span>
                  <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                  <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                  <span class="relative">Hungarian</span>
                </a>
                <a
                  href={Lebenslauf}
                  download="Lebenslauf"
                  target="_blank"
                  class=" ml-5 relative px-5 py-2 font-medium text-white group"
                >
                  <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-orange-400 group-hover:bg-orange-600 group-hover:skew-x-12"></span>
                  <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-orange-600 group-hover:bg-orange-400 group-hover:-skew-x-12"></span>
                  <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                  <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                  <span class="relative">German</span>
                </a>
              </div>
            </li>
          </ul>
          <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between mt-20">
            <a
              class="link"
              href="https://www.facebook.com/marton.simon.54/"
              data-tippy-content="@facebook_handle"
            >
              <svg
                class="h-10 fill-current text-orange-600 hover:text-white"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook</title>
                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
              </svg>
            </a>

            <a class="link" href="https://github.com/farkas1070" data-tippy-content="@github_handle">
              <svg
                class="h-10 fill-current text-orange-600 hover:text-white"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a class="link" href="https://www.linkedin.com/in/márton-simon-5ba59a263/" data-tippy-content="@unsplash_handle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-11 fill-current text-orange-600 hover:text-white"
                
                viewBox="0 0 50 50"
              >
                <title>LinkedIN</title>
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
            </a>
            
            <a class="link" href="#" data-tippy-content="@instagram_handle">
              <svg
                class="h-10 fill-current text-orange-600 hover:text-white"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>
           
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutMeSection;
