import React from 'react';
import { Link } from 'react-scroll';

const NavbarLink = ({ to, text }) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-70} // You may need to adjust this value to match your layout
      duration={500}
      
    >
       <li>
            <a href="#" className="text-white font-custom text-md  duration-100 hover:text-orange-500">
              {text}
            </a>
          </li>
    </Link>
  );
};

export default NavbarLink;