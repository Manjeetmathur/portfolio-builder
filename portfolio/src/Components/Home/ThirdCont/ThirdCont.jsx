import React, { useContext, useEffect, useRef, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { context } from '../../../Context/Context';
const ThirdCont = () => {
       const ref = useRef()
       const [loading, setLoading] = useState(false);
       const [postImage, setPostImage] = useState('');
       const [title, setpostTitle] = useState('');
       const [link, setPostLink] = useState('');
       const [desc, setpostDesc] = useState('');
       const {uploadPost} = useContext(context)
       useEffect(() => {
              // Initialize AOS animation
              AOS.init({
                     duration: 1000, // Animation duration
                     easing: 'ease-in-out', // Easing function for the animation
                     once: false, // Run animation only once
              });
       }, []);

       return (

              <div className="bg-gradient-to-r from-gray-800 via-gray-950 to-gray-800 bg-pattern-checkerboard  flex justify-center items-center py-10 md:py-20 lg:py-28">
                     <div className=" text-white mx-auto w-full max-w-4xl px-6 md:px-12 lg:px-20">

                            {/* Project Image Section */}
                            <div className="flex flex-col items-center gap-6 mb-8 " data-aos="slide-down"> 
                                   <h1 className="text-[3vw] md:text-xl lg:text-2xl font-semibold">Project Image</h1>
                                   <input
                                          type="file"
                                          ref={ref}
                                          className="hidden"
                                          onChange={(e) => setPostImage(e.target.files?.[0])}
                                   />
                                   <button
                                          className="h-[6vw] md:h-[10vh] lg:h-[8vh] text-[3vw] md:text-[20px] lg:text-[18px] 
                     cursor-pointer font-medium py-1 px-6 w-[72vw] md:w-[450px]  rounded-xl 
                     bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition-all shadow-lg"
                                          onClick={() => ref.current.click()}
                                   >
                                          Choose Image
                                   </button>
                            </div>

                            {/* Project Title Section */}
                            <div className="flex flex-col items-center gap-6 mb-8" data-aos="slide-down">
                                   <h1 className="text-[3vw] md:text-xl lg:text-2xl font-semibold">Project Title</h1>
                                   <input
                                          type="text"
                                          className="h-[6vw] md:h-[8vh] lg:h-[6vh] outline-none border-2 border-white bg-transparent text-[4vw] 
                    md:text-[20px] lg:text-[18px] shadow-md shadow-white  w-[72vw] md:w-[450px]  rounded-lg py-3 px-4 mb-4 focus:ring-2 focus:ring-blue-500"
                                          onChange={(e) => setpostTitle(e.target.value)}
                                          value={title}
                                   />
                            </div>

                            {/* Project Link Section */}
                            <div className="flex flex-col items-center gap-6 mb-8" data-aos="slide-down" data-aos-delay = '100'>
                                   <h1 className="text-[3vw] md:text-xl lg:text-2xl font-semibold">Project Link</h1>
                                   <input
                                          type="text"
                                          className="h-[6vw] md:h-[8vh] lg:h-[6vh] outline-none border-2 border-white 
                    bg-transparent text-[4vw] md:text-[20px] lg:text-[18px] shadow-md shadow-white  w-[72vw] md:w-[450px] 
                    rounded-lg py-3 px-4 mb-4 focus:ring-2 focus:ring-blue-500"
                                          onChange={(e) => setPostLink(e.target.value)}
                                          value={link}
                                   />
                            </div>

                            {/* Project Description Section */}
                            <div className="flex flex-col items-center gap-6 mb-8" data-aos="slide-down" >
                                   <h1 className="text-[3vw] md:text-xl lg:text-2xl font-semibold">Project Description</h1>
                                   <textarea
                                          rows={3}
                                          className="h-[6vw] md:h-[10vh] lg:h-[8vh] outline-none border-2 border-white bg-transparent
                     text-[4vw] md:text-[20px] lg:text-[18px] shadow-md shadow-white  w-[72vw] md:w-[450px] 
                      rounded-lg py-3 px-4 mb-4 focus:ring-2 focus:ring-blue-500"
                                          onChange={(e) => setpostDesc(e.target.value)}
                                          value={desc}
                                   />
                            </div>

                            {/* Upload Button */}
                            <div className="flex justify-center" data-aos="slide-down">
                                   <button
                                          className="bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition-all
                     text-[3vw] md:text-[20px] lg:text-[18px] font-medium py-2 px-16 rounded-xl shadow-md shadow-white"
                                          onClick={() =>{
                                                 uploadPost(title,postImage,link,desc)
                                                 setpostDesc('')
                                                 setPostImage('')
                                                 setpostTitle('')
                                                 setPostLink('')
                                          }}
                                   >
                                          {loading ? 'Uploading...' : 'Upload'}
                                   </button>
                            </div>

                     </div>
              </div>

       )
}
export default ThirdCont