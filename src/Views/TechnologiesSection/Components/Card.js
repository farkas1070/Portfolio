import React from "react";

export default function Card({imgSource,name,expLevel}) {
  return (
    <div class="flex hover:bg-[#3a3a3f] transition-all duration-300 ease-in-out flex-col items-center gap-3 px-8 py-10 bg-[#2e2e33] rounded-3xl shadow-main shadow-white z-20 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <span>
      <img src={imgSource} className="w-20 h-20" alt="logo" />
    </span>
    <p class="text-2xl font-extrabold text-[#e5e8ed]">{name}</p>
    <p class="text-base leading-7 text-[#e5e8ed] font-custom">{expLevel}</p>
  </div>
  );
}
