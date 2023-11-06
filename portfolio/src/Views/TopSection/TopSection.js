import React from "react";
import Navbar from "../Navbar/Navbar";
import Video from "../../Assets/Videos/video2.mp4";
import Pic from "../../Assets/Photos/pic.jpg";
const TopSection = () => {
  return (
    <>
      <div className="relative min-h-screen">
        <video
          className="absolute inset-0 object-cover w-full h-full z-0"
          autoPlay
          muted
          loop
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="fixed top-0 w-full">
            <Navbar />
          </div>
          <div className="text-center">
            <img
              src={Pic}
              alt="Your Image"
              className="mx-auto w-80 h-80 rounded-full border-4 border-[#f07a00]"
            />

            <h1 className="text-3xl text-white mt-4  font-custom ">
              Márton Simon
            </h1>
            <p className="text-xl text-[#f07a00] mt-2 font-custom2">
              I'm a Web Developer from Hungary
            </p>
          </div>
        </div>
      </div>
      
      
    </>
  );
};
export default TopSection;
