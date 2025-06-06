import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Header from "../Header/Header";
import p13 from "../../image/p13.png";
import p14 from "../../image/p14.png";
import p1 from "../../image/p1.png";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";

const FrontInterface = () => {
       const { userData } = useSelector(st => st?.auth)
       const dispatch = useDispatch()
       
       return (
              <div className="min-h-screen flex flex-col bg-gray-900">
                     <Header />
                     <main className="flex-grow from-gray-950 via-gray-800 to-gray-950 bg-gradient-to-tl">
                            <div className="container mx-auto px-4 py-12 flex flex-col items-center">
                                   <h1 className="mt-10 text-3xl md:text-4xl font-extrabold text-white text-center mb-12 tracking-tight">
                                          Choose Your Favourite Template
                                   </h1>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
                                          {/* Template 1 */}
                                          <Link to={`/template4/${userData?.id}`} className="group">
                                                 <div className="relative overflow-hidden rounded-xl border-2 border-gray-700 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg">
                                                        <img 
                                                               src={p13} 
                                                               alt="Template 1 Preview"
                                                               className="h-[200px] w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                                                        />
                                                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                                                               <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                      View Template
                                                               </span>
                                                        </div>
                                                 </div>
                                          </Link>
                                          <Link to={`/template1/${userData?.id}`} className="group">
                                                 <div className="relative overflow-hidden rounded-xl border-2 border-gray-700 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg">
                                                        <img 
                                                               src={p13} 
                                                               alt="Template 1 Preview"
                                                               className="h-[200px] w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                                                        />
                                                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                                                               <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                      View Template
                                                               </span>
                                                        </div>
                                                 </div>
                                          </Link>
                                          {/* Template 2 */}
                                          <Link to={`/template2/${userData?.id}`} className="group">
                                                 <div className="relative overflow-hidden rounded-xl border-2 border-gray-700 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg">
                                                        <img 
                                                               src={p14} 
                                                               alt="Template 2 Preview"
                                                               className="h-[200px] w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                                                        />
                                                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                                                               <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                      View Template
                                                               </span>
                                                        </div>
                                                 </div>
                                          </Link>
                                          <Link to={`/template3/${userData?.id}`} className="group">
                                                 <div className="relative overflow-hidden rounded-xl border-2 border-gray-700 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg">
                                                        <img 
                                                               src={p1} 
                                                               alt="Template 2 Preview"
                                                               className="h-[200px] w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                                                        />
                                                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                                                               <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                      View Template
                                                               </span>
                                                        </div>
                                                 </div>
                                          </Link>
                                   </div>
                            </div>
                     </main>
                     <Footer />
              </div>
       );
};

export default FrontInterface;