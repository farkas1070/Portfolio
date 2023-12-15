import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Card from "./Card";
import "./Masonry.css";

const MasonryGrid = ({ items }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
      {items.map((item, index) => (
        <a
        href={item.href}
        >
        <div className="custom-masonry-item">
          <div className="group relative m-0 flex h-full w-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-60 dark:border-gray-700 dark:opacity-70">
              <img
                src={item.imageSrc}
                className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                alt=""
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-20 m-0  transition duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <div className="text-center">
                <h1 className="font-custom2 text-4xl font-bold text-white shadow-xl">
                  {item.name}
                </h1>
                <h1 className="text-sm font-light text-gray-200 shadow-xl">
                  {item.description}
                </h1>
              </div>
            </div>
          </div>
        </div>
        </a>
      ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryGrid;
