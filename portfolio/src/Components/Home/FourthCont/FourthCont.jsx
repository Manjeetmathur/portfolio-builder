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
              <div className="bg-gradient-to-r from-black via-gray-800 to-black flex justify-center items-center py-10 md:py-20 lg:py-28">
                     <div className="relative text-white mx-auto w-full max-w-4xl px-6 md:px-12 lg:px-20">

                            {/* Article Title Section */}
                            <div className="flex flex-col items-center gap-6 mb-8" data-aos="fade-up">
                                   <h1 className="text-[3vw] md:text-xl lg:text-2xl font-semibold text-center">Article Title</h1>
                                   <input
                                          type="text"
                                          className="h-[6vw] md:h-[8vh] lg:h-[6vh] outline-none border-2 border-white bg-transparent 
                    text-[4vw] md:text-[20px] lg:text-[18px] shadow-md shadow-white w-[72vw] md:w-[450px]  rounded-lg py-3 px-4 mb-4 focus:ring-2 focus:ring-blue-500"
                                          onChange={(e) => setpostTitle(e.target.value)}
                                          value={title}
                                   />
                            </div>

                            {/* Article Description Section */}
                            <div className="flex flex-col items-center gap-6 mb-8" data-aos="fade-up">
                                   <h1 className="text-[3vw] md:text-xl lg:text-2xl font-semibold text-center">Article Description</h1>
                                   <textarea
                                          rows={3}
                                          className="h-[6vw] md:h-[10vh] lg:h-[8vh] outline-none border-2 border-white bg-transparent 
                    text-[4vw] md:text-[20px] lg:text-[18px] shadow-md shadow-white w-[72vw] md:w-[450px] 
                    rounded-lg py-3 px-4 mb-4 focus:ring-2 focus:ring-blue-500"
                                          onChange={(e) => setpostDesc(e.target.value)}
                                          value={desc}
                                   />
                            </div>

                            {/* Upload Button Section */}
                            <div className="flex justify-center" data-aos="fade-up">
                                   <button
                                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition-all 
                     text-[3vw] md:text-[20px] lg:text-[18px] font-medium py-2 px-16 rounded-xl shadow-md shadow-white"
                                          onClick={() => {
                                                 uploadBlog(title, desc)
                                                 setpostTitle('')
                                                 setpostDesc('')
                                          }}
                                   >
                                          {loading ? "Uploading..." : "Upload"}
                                   </button>
                            </div>

                     </div>
              </div>

       );
};

export default FourthCont;
