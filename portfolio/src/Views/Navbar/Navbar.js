import React from "react";

const Navbar = () => {
  return (
    <div className="bg-transparent py-4 relative">
      <nav className="container mx-auto flex justify-center mt-2">
        <ul className="flex space-x-8">
          <li>
            <a href="#" className="text-white font-custom text-sm  duration-100 hover:text-orange-500">
              ABOUT ME
            </a>
          </li>

          <li>
            <a href="#" className="text-white font-custom  text-sm duration-100 hover:text-orange-500">
              RESUME
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-custom text-sm duration-100 hover:text-orange-500">
              SERVICES
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-custom text-sm duration-100 hover:text-orange-500">
              MY PROJECTS
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-custom text-sm duration-100 hover:text-orange-500">
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-custom text-sm duration-100 hover:text-orange-500">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
