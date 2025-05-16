import React from "react";
import { Link } from "react-router-dom";
import { RiExternalLinkFill } from "react-icons/ri";

const Temp1Certificate = ({ certificate }) => {
  console.log(certificate)
  return (
    <div className="p-4 max-w-xs w-full mx-auto  shadow-2xl rounded-xl     ">
      <div className="  rounded-lg overflow-hidden group transform transition-all hover:scale-105 hover:shadow-gray-700 hover:shadow-2xl hover:bg-gradient-to-b hover:from-green-300 hover:to-blue-300 hover:text-white">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-semibold text-gray-800">{certificate.certificateTitle}</h1>
          {certificate?.link?.length > 5 && (
            <Link to={`${certificate?.link}`} className="text-blue-500 hover:text-blue-700">
              <RiExternalLinkFill size={20} />
            </Link>
          )}
        </div>

        <Link to={`${certificate?.certificateImage?.imageUrl}`} className="block">
          <img
            src={`${certificate?.certificateImage}`}
            alt={certificate.certificateTitle}
            className="w-full h-[250px] object-cover rounded-xl transform transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        <div className="p-4">
          <h2 className="text-sm text-gray-600">{certificate.certificateDescription.slice(0, 85)}...</h2>
        </div>
      </div>
    </div>
  );
};

export default Temp1Certificate;
