import React from 'react'

const Card = ({rowSpan, colStart, rowStart, imgSource, title, description}) => {
    const hascolStart = colStart ==null ?  " ":`${colStart}` 
    const hasrowStart = rowStart ==null ?  " ":`${rowStart}` 



  return (
    <div className={`row-span-${rowSpan} col-start-${hascolStart} row-start-${hasrowStart}`} >
          <div class="absolute inset-0 bg-center dark:bg-black" ></div>
          <div class="group relative m-0 flex h-full w-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div class="z-10 h-full w-full overflow-hidden rounded-xl  opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img
                src={imgSource}
                class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                alt=""
              />
            </div>
            <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h1 class="font-serif text-2xl font-bold text-white ">
                {title}
              </h1>
              <h1 class="text-sm font-light text-gray-200 ">
                {description}
              </h1>
            </div>
          </div>
        </div>
  )
}
export default Card