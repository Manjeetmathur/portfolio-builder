import React, { useEffect, useRef } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const FirstCont = () => {
  const targetRef = useRef(null);

  const handleScrollToTarget = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="bg-gray-950 py-24 md:py-28 lg:py-36 flex flex-col items-center justify-center animate-fade-in">

      <div className="absolute w-[2px] h-1 bg-blue-500 rounded-full point"></div>
      <div className="absolute w-[2px] h-1  bg-blue-500 rounded-full point1"></div>

      <div className="text-center w-full">
        <h1 className="text-xl md:text-4xl lg:text-6xl font-semibold text-white animate-slide-up ">
          Make Your Own Portfolio
        </h1>
        <button
          className="bg-green-400 text-sm md:text-2xl font-medium py-1 px-2 rounded-xl my-4 transform hover:scale-105 transition-all animate-fade-in-up"
          onClick={handleScrollToTarget}
        >
          <Link className="flex items-center gap-1">
            Create Now <FaLongArrowAltRight className="mt-[3px]" />
          </Link>
        </button>
      </div>

      {/* Optional Space or Scroll Target */}
      <div ref={targetRef} className="w-full"></div>
    </div>

  )
}

export default FirstCont
