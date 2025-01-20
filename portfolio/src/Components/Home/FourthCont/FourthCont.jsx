import React, { useContext, useEffect, useRef, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
import { context } from "../../../Context/Context";
const FourthCont = () => {
       const ref = useRef();
       const [loading, setLoading] = useState(false);
       const [title, setpostTitle] = useState("");
       const [desc, setpostDesc] = useState("");
       const { uploadBlog } = useContext(context)
       useEffect(() => {
              AOS.init({
                     duration: 1000, // Animation duration
                     easing: 'ease-in-out', // Easing function for the animation
                     once: false, // Run animation only once
              });
       }, [])
       return (
              <div className="bg-gradient-to-r from-black via-gray-900 to-black min-h-screen flex justify-center items-center px-6 py-12">
                     <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-3xl p-8 md:p-12 space-y-10 relative text-white">

                            {/* Article Title Section */}
                            <div className="space-y-4" data-aos="fade-up">
                                   <h1 className="text-2xl md:text-3xl font-semibold text-center tracking-wide">
                                          Article Title
                                   </h1>
                                   <input
                                          type="text"
                                          className="w-full bg-gray-700 text-white rounded-md py-3 px-4 outline-none focus:ring-2 focus:ring-blue-500 text-base md:text-lg placeholder-gray-400"
                                          onChange={(e) => setpostTitle(e.target.value)}
                                          value={title}
                                          placeholder="Enter your article title"
                                   />
                            </div>

                            {/* Article Description Section */}
                            <div className="space-y-4" data-aos="fade-up">
                                   <h1 className="text-2xl md:text-3xl font-semibold text-center tracking-wide">
                                          Article Description
                                   </h1>
                                   <textarea
                                          rows={6}
                                          className="w-full bg-gray-700 text-white rounded-md py-3 px-4 outline-none focus:ring-2 focus:ring-blue-500 text-base md:text-lg placeholder-gray-400 resize-none"
                                          onChange={(e) => setpostDesc(e.target.value)}
                                          value={desc}
                                          placeholder="Enter your article description"
                                   />
                            </div>

                            {/* Upload Button Section */}
                            <div className="flex justify-center" data-aos="fade-up">
                                   <button
                                          className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-12 rounded-md hover:shadow-lg hover:scale-105 transition-all text-lg font-medium"
                                          onClick={async () => {
                                                 setLoading(true);
                                                 await uploadBlog(title, desc);
                                                 setpostTitle('');
                                                 setpostDesc('');
                                                 setLoading(false);
                                          }}
                                   >
                                          {loading ? 'Uploading...' : 'Upload'}
                                   </button>
                            </div>
                     </div>
              </div>


       );
};

export default FourthCont;
