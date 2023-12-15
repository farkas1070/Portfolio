import React from 'react';
import Close from "../../../Assets/SVGs/close.svg"
import NavbarLink from './NavbarLink';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
const Modal = ({onClose,isOpen,handleOpen }) => {
  return (
    <Dialog open={isOpen} handler={handleOpen}>
    
    <DialogBody>
    
        
        <ul>
          {/* Menu items */}
          <li className="mb-5 mt-5">
          <NavbarLink to="about-me-section" text="ABOUT ME" isInModal={true} onCloseModal={onClose}/>
          </li>
          <li className="mb-5">
          <NavbarLink to="resume-section" text="RESUME" isInModal={true} onCloseModal={onClose}/>
          </li>
          <li className="mb-5">
          <NavbarLink to="technologies-section" text="TECHNOLOGIES" isInModal={true} onCloseModal={onClose}/>
          </li>
          <li className="mb-5">
          <NavbarLink to="portfolio-section" text="PORTFOLIO" isInModal={true} onCloseModal={onClose}/>
          </li>
          <li className="mb-5">
          <NavbarLink to="contact-section" text="CONTACT" isInModal={true} onCloseModal={onClose}/>
          </li>
        </ul>
     
    </DialogBody>
    <DialogFooter>
      <Button
        variant="text"
        color="red"
        onClick={handleOpen}
        className="mr-1"
      >
        <span>Close</span>
      </Button>
      
    </DialogFooter>
  </Dialog>
  );
};

export default Modal;