import React from "react";
import ReactSVG from "../../../Assets/SVGs/react.svg"
export default function Card({imgSource,name,expLevel,numProjecs}) {
  return (
    <div class="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
      <span>
      <img src={ReactSVG} className=" w-20 h-20" alt="logo" />
      </span>
      <p class="text-2xl font-extrabold text-dark-grey-900">React</p>
      <p class="text-base leading-7 text-dark-grey-600">Experienced</p>
      <a
        class="text-lg font-bold text-purple-blue-500"
        href="mailto: hello@loopple.com"
      >
        8 projects created
      </a>
    </div>
  );
}
