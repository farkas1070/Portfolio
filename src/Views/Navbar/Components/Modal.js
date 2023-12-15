import React from 'react';
import Close from "../../../Assets/SVGs/close.svg"
import NavbarLink from './NavbarLink';
const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#24292e] bg-opacity-100 flex items-center justify-center p-5 transition-opacity">
      {/* Your modal content goes here */}
      <div className="bg-white p-4 w-full h-full rounded-lg relative opacity-100 transition-opacity duration-500">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">
          <img src={Close} className="w-10 h-10" alt="logo" />
        </button>
        <ul>
          {/* Menu items */}
          <NavbarLink ></NavbarLink>
          <NavbarLink to="about-me-section" text="ABOUT ME" isInModal={true} onCloseModal={onClose}/>
          <NavbarLink to="resume-section" text="RESUME" isInModal={true} onCloseModal={onClose}/>
          <NavbarLink to="technologies-section" text="TECHNOLOGIES" isInModal={true} onCloseModal={onClose}/>
          <NavbarLink to="portfolio-section" text="PORTFOLIO" isInModal={true} onCloseModal={onClose}/>
          <NavbarLink to="contact-section" text="CONTACT" isInModal={true} onCloseModal={onClose}/>
        </ul>
      </div>
    </div>
  );
};

export default Modal;