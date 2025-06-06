import React from "react";
import { Link } from "react-router-dom";
import { RiExternalLinkFill } from "react-icons/ri";

const Temp2Certificate = ({ certificate }) => {
  return (
    <div 
      className="p-4 w-full mx-auto"
      // data-aos="zoom-in"
    >
      <div 
        className="bg-gray-800 rounded-xl overflow-hidden group 
        transform transition-all duration-300 hover:scale-105 hover:shadow-2xl 
        hover:shadow-indigo-500/30 border border-gray-700 flex flex-col h-[420px] sm:h-[450px] md:h-[410px]"
      >
        {/* Title and Link Section */}
        <div className="flex justify-between items-center p-4">
          <h1 
            className="text-lg sm:text-xl font-semibold text-gray-200 
            group-hover:text-indigo-400 transition-colors duration-300 line-clamp-1"
          >
            {certificate.certificateTitle}
          </h1>
          {certificate?.link?.length > 5 && (
            <Link 
              to={`${certificate?.link}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex-shrink-0"
            >
              <RiExternalLinkFill size={20} />
            </Link>
          )}
        </div>

        {/* Image Section */}
        <Link 
          to={`${certificate?.certificateImage}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block relative flex-shrink-0"
        >
          <img
            src={`${certificate?.certificateImage}`}
            alt={certificate.certificateTitle}
            className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-xl 
            transform transition-transform duration-300 group-hover:scale-105"
          />
          <div 
            className="absolute inset-0 bg-indigo-500/20 rounded-t-xl opacity-0 
            group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </Link>

        {/* Description Section */}
        <div className="p-4 flex-grow flex items-start">
          <p 
            className="text-sm sm:text-base text-gray-400 line-clamp-3"
          >
            {certificate.certificateDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Temp2Certificate;