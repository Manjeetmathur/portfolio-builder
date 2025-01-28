import React, { useContext, useEffect, useRef, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
import { context } from "../../../Context/Context";
import toast from "react-hot-toast"
const FifthCont = () => {
       const ref = useRef();
       const [loading, setLoading] = useState(false);
       const [newskills, setnewskills] = useState("");
       // const [desc, setpostDesc] = useState("");
       const { updateSkills } = useContext(context)
       useEffect(() => {
              AOS.init({
                     duration: 1000, // Animation duration
                     easing: 'ease-in-out', // Easing function for the animation
                     once: false, // Run animation only once
              });
       }, [])

       const addskills = async(e) => {
              e.preventDefault()
              console.log(newskills)

              if(newskills){
                            setLoading(true);
                            
                            await updateSkills(newskills);
                            setnewskills('');
                            setLoading(false);
                     
              }else{
                     toast.error("Please enter your skills")
              }
       }
       return (
              <div className="bg-gray-900  flex flex-col justify-center items-center px-6 py-6">
                     <h1 className="text-4xl font-extrabold mb-8 text-white tracking-wide">Write Skills</h1>

                     <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-3xl p-8 md:p-12 space-y-10 relative text-white">

                            {/* Article Title Section */}
                            <div className="">
                                   <div className="space-y-4 mb-4" data-aos="fade-up">

                                          <h1 className="text-2xl md:text-3xl font-semibold text-center tracking-wide">
                                                 Skills Title
                                          </h1>
                                          <form onSubmit={(e) =>addskills(e)} className="flex space-x-4 pb-4">
                                                 <input
                                                        type="text"
                                                        className="w-full bg-gray-700 text-white rounded-md py-3 px-4 outline-none focus:ring-2 focus:ring-blue-500 text-base md:text-lg placeholder-gray-400"
                                                        onChange={(e) => setnewskills(e.target.value)}
                                                        value={newskills}
                                                        placeholder="Enter your skills title"
                                                 />
                                                 <button type="submit" className="flex justify-center items-center bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-500 transition-all text-sm"  >
                                                        +Add 
                                                 </button>
                                          </form>

                                   </div>
                                
                            </div>


                     </div>
              </div>


       );
};

export default FifthCont;
