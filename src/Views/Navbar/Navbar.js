import React, { useState, useEffect } from 'react';
import NavbarLink from './Components/NavbarLink';
import Menu from "../../Assets/SVGs/menu.svg"
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  return (
    <div className={`py-4 fixed relative transition-all duration-500 ${
      scrolling ? 'bg-[#0e0e0e]' : 'bg-transparent'
    }`}>

      <nav className="container mx-auto flex justify-center mt-2">
        
      <div className="hidden md:flex space-x-10">
          <NavbarLink to="about-me-section" text="ABOUT ME" />
          <NavbarLink to="resume-section" text="RESUME" />
          <NavbarLink to="technologies-section" text="TECHNOLOGIES" />
          <NavbarLink to="portfolio-section" text="PORTFOLIO" />
          <NavbarLink to="contact-section" text="CONTACT" />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
          <img src={Menu} className="w-6 h-6" alt="logo" />
          </button>

          {isMenuOpen && (
            <div className="absolute top-16 right-4 bg-[#0e0e0e] p-4">
              <ul>
                <li><NavbarLink to="about-me-section" text="ABOUT ME" /></li>
                <li><NavbarLink to="resume-section" text="RESUME" /></li>
                <li><NavbarLink to="technologies-section" text="TECHNOLOGIES" /></li>
                <li><NavbarLink to="portfolio-section" text="PORTFOLIO" /></li>
                <li><NavbarLink to="contact-section" text="CONTACT" /></li>
              </ul>
            </div>
          )}
          </div>
      </nav>
    </div>
  );
};
export default Navbar;
