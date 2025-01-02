import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { context } from "../../../Context/Context";
const SecondCont = () => {
       const ref = useRef();
       const ref1 = useRef();
       const { updateTitle, updateProfile,updateDesc,updatePhone,updateResume } = useContext(context)
       const [loading1, setLoading1] = useState(false);
       const [loading2, setLoading2] = useState(false);
       const [loading3, setLoading3] = useState(false);
       const [loading4, setLoading4] = useState(false);
       const [loading5, setLoading5] = useState(false);
       const [profile, setProfile] = useState("");
       const [resume, setResume] = useState("");
       const [title, setTitle] = useState("");
       const [profession, setProfession] = useState("");
       const [phoneNumber, setPhoneNumber] = useState("");
       const [desc, setDesc] = useState("");
       const navigate = useNavigate();

       const titleUpdate = () => {
              updateTitle(title)
              setTitle("")
       }
       console.log(profile);

       useEffect(() => {
              // Initialize AOS animation
              AOS.init({
                     duration: 1000, // Animation duration
                     easing: 'ease-in-out', // Easi1ng function for the animation
                     once: false, // Run animation only once
              });
       }, []);
       
  console.log(resume);
  



       return (
              <div className="bg-gradient-to-r from-black via-gray-800 to-black py-10 md:py-20 lg:py-28">
                    
                     <div className="flex justify-center items-center flex-col text-white mx-auto w-full max-w-4xl px-4 md:px-8 lg:px-16">
                            {/* Profile Image Section */}
                            <div className="flex flex-col gap-6 mb-8" data-aos="fade-up">
                                   <h1 className="text-[3vw] md:text-xl lg:text-2xl">Profile Image</h1>
                                   <input
                                          type="file"
                                          ref={ref}
                                          className="hidden"
                                          onChange={(e) => setProfile(e.target.files?.[0])}
                                   />
                                   <div className="flex gap-5">
                                          <button
                                                 className="text-[3vw] md:text-[20px] cursor-pointer font-medium py-2 px-4 
                      w-[60vw] md:w-[350px] rounded-xl items-center justify-center shadow-md shadow-white flex"
                                                 onClick={() => ref.current.click()}
                                          >
                                                 Choose Image
                                          </button>
                                          <button className="text-[10px] md:text-[15px]"
                                                 onClick={() => {
                                                        setLoading1(true)
                                                        updateProfile(profile)
                                                        setLoading1(false)
                                                 }

                                                 }>
                                                 {loading1 ? 'updating . . .' : "Update Image"}
                                          </button>
                                   </div>
                            </div>
                            {/* Work Title Section */}
                            <div className="flex flex-col gap-6 mb-8" data-aos="fade-up">
                                   <h1 className="text-[3vw] md:text-xl lg:text-2xl">Work Title</h1>
                                   <div className="flex gap-5">
                                          <input
                                                 type="text"
                                                 onChange={(e) => setTitle(e.target.value)}
                                                 value={title}
                                                 className="md:h-[8vh] lg:h-[6vh] outline-none border-2 
                        border-white bg-transparent text-[4vw] md:text-[20px]
                        lg:text-[18px] shadow-md shadow-white
                        w-[60vw] md:w-[350px] rounded-lg py-1 px-2 mb-4"
                                          />
                                          <button className="text-[10px] md:text-[15px]" onClick={titleUpdate}>

                                                 {loading3 ? 'Updating...' : 'Update Title'}
                                          </button>
                                   </div>
                            </div>

                            {/* Resume Section */}
                            <div className="flex flex-col gap-6 mb-8" data-aos="fade-up">
                                   <h1 className="text-[3vw] md:text-xl lg:text-2xl">Resume</h1>
                                   <input
                                          type="file"
                                          ref={ref1}
                                          accept="application/pdf"
                                          className="hidden h-[6vw] md:h-[8vh] lg:h-[6vh] outline-none border-2 border-white bg-transparent shadow-md shadow-white text-[4vw] md:text-[20px] lg:text-[18px] w-[60vw] lg:w-[40vw] rounded-lg py-2 px-2 mb-4"
                                          onChange={(e) => setResume(e.target.files?.[0])}
                                   />
                                   <div className="flex gap-5">
                                          <button
                                                 className="text-[3vw] md:text-[20px] cursor-pointer 
                                                        font-medium py-2 px-4 
                                                         w-[60vw] md:w-[350px] rounded-xl items-center 
                                                        justify-center shadow-md shadow-white flex"
                                                 onClick={() => ref1.current.click()}
                                          >
                                                 Choose File
                                          </button>
                                          <button className="text-[10px] md:text-[15px]" onClick={() => {
                                                 updateResume(resume)
                                                 setResume('')
                                          }}>
                                                 {loading2 ? 'Updating...' : 'Update Resume'}
                                          </button>
                                   </div>
                            </div>

                            {/* Phone Number Section */}
                            <div className="flex flex-col gap-6 mb-8" data-aos="fade-up">
                                   <h1 className="text-[3vw] md:text-xl lg:text-2xl">Phone Number</h1>
                                   <div className="flex gap-5">
                                          <input
                                                 type="text"
                                                 onChange={(e) => setPhoneNumber(e.target.value)}
                                                 value={phoneNumber}
                                                 className="md:h-[8vh] lg:h-[6vh] outline-none border-2 
                        border-white bg-transparent text-[4vw] md:text-[20px]
                        lg:text-[18px] shadow-md shadow-white
                        w-[60vw] md:w-[350px] rounded-lg py-1 px-2 mb-4"
                                          />
                                          <button className="text-[10px] md:text-[15px]" onClick={() =>{
                                                  updatePhone(phoneNumber)
                                                  setPhoneNumber('')
                                          }}>
                                                 {loading5 ? 'updating . . .' : "Update Number"}

                                          </button>
                                   </div>
                            </div>

                            {/* Description Section */}
                            <div className="flex flex-col gap-6 mb-8" data-aos="fade-up">
                                   <h1 className="text-[3vw] md:text-xl lg:text-2xl">Description</h1>
                                   <div className="flex gap-5">
                                          <textarea
                                                 onChange={(e) => setDesc(e.target.value)}
                                                 value={desc}
                                                 className="md:h-[8vh] lg:h-[6vh] outline-none border-2 
                        border-white bg-transparent text-[4vw] md:text-[20px]
                        lg:text-[18px] shadow-md shadow-white
                        w-[60vw] md:w-[350px] rounded-lg py-1 px-2 mb-4"
                                                 rows={3}
                                          />
                                          <button className="text-[10px] md:text-[15px]" onClick={() => {
                                                 updateDesc(desc)
                                                 setDesc('')
                                          }}>
                                                 {loading4 ? 'updating . . .' : "Update Desc..."}

                                          </button>
                                   </div>
                            </div>
                     </div>
              </div>

       );
};
export default SecondCont;
