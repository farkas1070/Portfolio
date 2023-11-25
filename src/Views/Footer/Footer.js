import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="relative bg-[#212024] pt-10 pb-10 ">
        
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
              <div class="text-sm text-white font-semibold py-1">
                Copyright © <span id="get-current-year">2023</span>
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  class="text-white hover:text-gray-800"
                  target="_blank"
                />{" "}
                Portfolio by {" "}
                <a
                  href="https://www.creative-tim.com?ref=njs-profile"
                  class="text-white hover:text-blueGray-800"
                >
                  Márton Simon
                </a>
                .
              </div>
            </div>
          </div>
        
      </footer>
    </>
  );
};
export default Footer;
