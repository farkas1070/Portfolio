import React from 'react';
import Close from "../../../Assets/SVGs/close.svg"
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
          <li className="font-custom font-medium mb-2 text-xl mt-5">About Me</li>
          <li className="font-custom font-medium mb-2 text-xl mt-5">Resume</li>
          <li className="font-custom font-medium mb-2 text-xl mt-5">Technologies</li>
          <li className="font-custom font-medium mb-2 text-xl mt-5">Portfolio</li>
          <li className="font-custom font-medium mb-2 text-xl mt-5">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;