import React from 'react';
import { Link } from 'react-scroll';

const NavbarLink = ({ to, text, isInModal,onCloseModal }) => {
  const linkStyle = isInModal
    ? 'text-black font-custom text-xl font-medium  duration-100 hover:text-orange-500 mb-5'
    : 'text-white font-custom text-md duration-100 hover:text-orange-500';

    const handleClick = () => {
      // Close the modal before navigating
      onCloseModal();
    };
  return (
    <Link to={to} spy={true} smooth={true} offset={-70} duration={500} onClick={handleClick} >
      <li>
        <a href="#" className={linkStyle}>
          {text}
        </a>
      </li>
    </Link>
  );
};

export default NavbarLink;