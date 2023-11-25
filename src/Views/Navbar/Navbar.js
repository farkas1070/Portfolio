import React, { useState, useEffect } from 'react';
import NavbarLink from './Components/NavbarLink';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

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
        <ul className="flex space-x-10">
          <NavbarLink to="about-me-section" text="ABOUT ME"></NavbarLink>
          <NavbarLink to="resume-section" text="RESUME"></NavbarLink>
          <NavbarLink to="technologies-section" text="TECHNOLOGIES"></NavbarLink>
          <NavbarLink to="portfolio-section" text="PORTFOLIO"></NavbarLink>
          
          <NavbarLink to="contact-section" text="CONTACT"></NavbarLink>
          
         
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
