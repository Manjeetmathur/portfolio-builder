import React from "react";
import { Link } from "react-router-dom";
import { RiExternalLinkFill } from "react-icons/ri";

const Temp3Certificate = ({ certificate }) => {
  return (
    <div 
      className="p-5"
      // data-aos="zoom-in"
    >
      <div 
        className="bg-white rounded-xl shadow-md overflow-hidden group 
        transform transition-all duration-300 hover:scale-105 hover:shadow-lg 
        hover:shadow-blue-100 border border-blue-200"
      >
        <div className="flex justify-between items-center p-4">
          <h1 
            className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 
            transition-colors duration-300"
          >
            {certificate.certificateTitle}
          </h1>
          {certificate?.link?.length > 5 && (
            <Link 
              to={`${certificate?.link}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
            >
              <RiExternalLinkFill size={20} />
            </Link>
          )}
        </div>

        <Link 
          to={`${certificate?.certificateImage?.imageUrl}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block relative"
        >
          <img
            src={`${certificate?.certificateImage?.imageUrl || certificate?.certificateImage}`}
            alt={certificate.certificateTitle}
            className="w-full h-64 object-cover rounded-t-xl 
            transform transition-transform duration-300 group-hover:scale-105"
          />
          <div 
            className="absolute inset-0 bg-blue-500/10 opacity-0 
            group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl"
          ></div>
        </Link>

        <div className="p-4">
          <p 
            className="text-sm text-gray-600 line-clamp-3"
          >
            {certificate.certificateDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Temp3Certificate;