import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
       FaEnvelope,
       FaFacebook,
       FaGit,
       FaGithub,
       FaInstagram,
       FaLinkedin,
       FaLinkedinIn,
       FaPhone,
} from "react-icons/fa";
import Temp2Posts from "./Temp2Posts";
import toast from "react-hot-toast";
import { url } from "../../../../backendUrl/Backendurl";
import axios from "axios";
import Temp2Blogs from "./Temp2Blogs";
import Temp1Header from "../Template1/Temp1Header";
const Template2 = () => {
       const [userDetails, setUser] = useState();

       const postRef = useRef()
       const blogRef = useRef()
       const contactRef = useRef()
       const id = useParams();
       console.log(id);
       const [MessageName,setMessageName] = useState("")
       const [MessageSubject,setMessageSubject] = useState("")
       const [MessageDesc,setMessageDesc] = useState("")
       const [MessageEmail,setMessageEmail] = useState("")
       useEffect(() => {
              try {
                     const getUserDetails = async () => {

                            const endpoint = `${url}/user/all-info/id?id=${id.id}`;
                            console.log(endpoint);

                            const data = await axios.get(endpoint);
                            const res = data.data;
                            console.log("res", res);

                            if (res.success) {
                                   setUser(res.user);
                            }
                     };
                     getUserDetails();
              } catch (error) {
                     console.log(error);
              }
       }, []);
       console.log(userDetails);

       const link = window.location.href;

       const Openlink = async () => {
              await navigator.clipboard.writeText(link);
              toast("link copied");
              const shareData = {
                     title: "sharing your portfolio",
                     text: "share",
                     url: link,
              };
              if (navigator.share) {
                     navigator.share(shareData);
              }
       };
       const showPdf = () => {
              window.open(`${url}/f/${userDetails?.resume}`)
       }
       return (
              <div className="">
                     <Temp1Header postRef={postRef} blogRef={blogRef} contactRef={contactRef} color="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-950 text-white" />
                     <div className="bg-gradient-to-r from-gray-900 to-blue-950 
                     p-1 pt-28 md:pb-20 md:flex justify-center items-center flex-row-reverse lg:p-36 relative">
                            {/* Send Link */}
                            {/* <a
                                   to={`${link}`}
                                   className="absolute top-16 right-9 text-white 
                                   text-lg font-semibold bg-blue-600 hover:bg-blue-700 px-6 py-3 
                                   rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl
                                    transform hover:scale-105"
                                   onClick={Openlink}
                            >
                                   Send
                            </a> */}

                            {/* Profile Image */}
                            <div className="flex justify-center items-center mb-6 md:mb-0">
                                   <img
                                          src={userDetails?.profile?.imageUrl}
                                          alt="Profile"
                                          className="h-[50vw] w-[50vw] border-4 border-blue-900 
                                          border-gradient-to-r from-teal-400 to-blue-500 
                                          rounded-tl-[80px] rounded-br-[80px] md:w-[300px] md:h-[300px] 
                                          lg:w-[350px] lg:h-[350px] 
                                          object-contain shadow-lg transform hover:scale-105 
                                          transition-all duration-300"
                                   />
                            </div>

                            {/* Profile Details */}
                            <div className="flex flex-col justify-center items-center md:items-start
                             md:w-[40%] text-center md:text-left">
                                   <h2 className="text-2xl text-white font-bold mt-4 lg:text-4xl md:text-3xl">
                                          Hii I'm {userDetails?.name}

                                   </h2>
                                   <h2 className="text-xl text-white font-semibold mt-2 lg:text-3xl
                                    md:text-2xl">
                                          {userDetails?.title}
                                   </h2>

                                   {/* Social Media Icons */}
                                   <div className="flex flex-col items-center justify-center mt-6 md:mt-4">
                                          <div className="flex space-x-4 mb-6">
                                                 <a
                                                        href={userDetails?.linkedinlink}
                                                        target="_blank"
                                                        // rel="noopener noreferrer"
                                                        className="transform hover:scale-110 transition-all 
                                                        duration-300"
                                                 >
                                                        <FaLinkedinIn className="text-3xl lg:text-4xl border-2 
                                                        p-2 bg-white m-2 rounded-xl text-blue-700
                                                         hover:bg-blue-600 hover:text-white shadow-md" />

                                                 </a>
                                                 <a
                                                        href={userDetails?.githublink} target="_blank"
                                                        className="transform hover:scale-110 transition-all 
                                                        duration-300"
                                                 >

                                                        <FaGithub className="text-3xl lg:text-4xl border-2 p-2
                                                         bg-white m-2 rounded-xl text-gray-800 
                                                         hover:bg-gray-700 hover:text-white shadow-md" />
                                                 </a>

                                                 <a
                                                        href={userDetails?.instagramlink} target="_blank"
                                                        className="transform hover:scale-110 transition-all 
                                                        duration-300"
                                                 >
                                                        <FaInstagram className="text-3xl lg:text-4xl border-2 
                                                        p-2 bg-white m-2 rounded-xl text-pink-500
                                                         hover:bg-pink-600 hover:text-white shadow-md" />
                                                 </a>

                                                 <a
                                                        href={userDetails?.facebooklink} target="_blank"
                                                        className="transform hover:scale-110 transition-all
                                                         duration-300"
                                                 >
                                                        <FaFacebook className="text-3xl lg:text-4xl border-2 
                                                        p-2 bg-white m-2 rounded-xl text-blue-600
                                                         hover:bg-blue-700 hover:text-white shadow-md" />
                                                 </a>
                                          </div>

                                          {/* Resume Link */}
                                          <div className="m-2 mb-10 ">
                                                 <button
                                                        onClick={() => showPdf(userDetails?.resume)}
                                                        className="text-sm lg:text-xl border-2 bg-gradient-to-r 
                                                        from-teal-400 to-blue-500 text-white 
                                                        rounded-xl px-5 py-2 transform hover:scale-105
                                                         transition-all duration-300 shadow-lg hover:shadow-2xl"
                                                 >
                                                        See My Resume
                                                 </button>
                                          </div>
                                   </div>
                            </div>
                     </div>

                     <div className="text-white w-full bg-gradient-to-r from-gray-800 via-gray-900
                      to-black flex flex-col justify-center items-center py-16 border-y-2">
                            {/* About Me Section */}
                            <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text
                             bg-gradient-to-r from-teal-400 to-blue-500 mb-6">
                                   About Me
                            </h2>
                            <p className="text-md font-semibold text-center w-[90%] md:text-xl pb-6 
                            text-gray-300 leading-relaxed">
                                   {userDetails?.description}
                            </p>
                     </div>

                     <div className="text-white w-full bg-gradient-to-r from-gray-800 via-gray-900
                      to-black flex flex-col justify-center items-center py-16 border-b-2">
                            {/* Connect With Me Section */}

                            <p className="text-md font-semibold text-center w-[90%] md:text-xl pb-6
                             text-gray-300">
                                   <span className="font-bold text-white">Phone Number:</span>
                                   {userDetails?.phonenumber}
                            </p>
                            <p className="text-md font-semibold text-center w-[90%] md:text-xl 
                            pb-6 text-gray-300">
                                   <span className="font-bold text-white">Email:</span>
                                   {userDetails?.email}
                            </p>
                     </div>

                     <div className="bg-gray-800 flex flex-col justify-center items-center" ref={postRef}>
                            <h2 className="text-2xl font-semibold text-white pt-8">My Projects</h2>
                            <div className="">
                                   {userDetails?.posts?.map((item) => {
                                          return <Temp2Posts post={item} key={item._id}></Temp2Posts>;
                                   })}
                            </div>
                     </div>
                     <div className="bg-gray-800 md:grid md:grid-cols-2 lg:grid-cols-3 p-2" ref={blogRef}>
                            {userDetails?.blogs?.map((item) => {
                                   return <Temp2Blogs blog={item} key={item._id}></Temp2Blogs>;
                            })}
                     </div>
                     <div className="border-t-4" >
                            <div className=" from-gray-800 via-gray-900
                      to-black bg-gradient-to-bl py-6 text-white" ref={contactRef}>
                                   <div className="max-w-6xl mx-auto px-6 ">
                                          <h2 className="text-3xl font-extrabold text-center text-transparent 
                            bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-6">
                                                 Connect With Me
                                          </h2> <div className="grid md:grid-cols-2 gap-10 ">
                                                 {/* Contact Info */}
                                                 <div className="space-y-6">
                                                        <h3 className="text-2xl font-semibold">Get in Touch</h3>
                                                        <p className="">
                                                               Feel free to reach out via email or phone, or connect with me on
                                                               social media.
                                                        </p>
                                                        <div className="space-y-4">
                                                               <div className="flex items-center space-x-4">
                                                                      <FaEnvelope className="text-blue-500 text-xl" />
                                                                      <a
                                                                             href={`mailto:${userDetails?.email}`}
                                                                             className=" hover:text-blue-400"
                                                                      >
                                                                             {userDetails?.email}
                                                                      </a>
                                                               </div>
                                                               <div className="flex items-center space-x-4">
                                                                      <FaPhone className="text-blue-500 text-xl" />
                                                                      <p className="">+91{userDetails?.phonenumber}</p>
                                                               </div>
                                                               <div className="flex space-x-4 text-2xl">
                                                                      <a
                                                                             href={userDetails?.linkedinlink}
                                                                             className=" hover:text-blue-400"
                                                                      >
                                                                             <FaLinkedin />
                                                                      </a>
                                                                      <a
                                                                             href={userDetails?.githublink}
                                                                             className=" hover:text-blue-400"
                                                                      >
                                                                             <FaGithub />
                                                                      </a>
                                                                      <a
                                                                             href={userDetails?.instalink}
                                                                             className=" hover:text-pink-500"
                                                                      >
                                                                             <FaInstagram />
                                                                      </a>
                                                                      <a
                                                                             href={userDetails?.facebooklink}
                                                                             className=" hover:text-blue-600"
                                                                      >
                                                                             <FaFacebook />
                                                                      </a>
                                                               </div>
                                                        </div>
                                                 </div>

                                                 {/* Contact Form */}
                                                 <div className="border-4 p-6 rounded-lg shadow-xl text-black">
                                                        <form className="space-y-6">
                                                               <div>
                                                                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                                                                             Name
                                                                      </label>
                                                                      <input
                                                                             type="text"
                                                                             id="name"
                                                                             value={MessageName}

                                                                             default
                                                                             Value={MessageName}
                                                                             onChange={(e=>setMessageName(e.target.value))}
                                                                             placeholder="Your Name"
                                                                             className="w-full p-3 border border-gray-700 rounded bg-gray-00 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                      />
                                                               </div>
                                                               <div>
                                                                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                                                                             Email
                                                                      </label>
                                                                      <input
                                                                             type="email"
                                                                             id="email"
                                                                             placeholder="Your Email"
                                                                             default
                                                                             Value={MessageEmail}
                                                                             onChange={(e=>setMessageEmail(e.target.value))}
                                                                             className="w-full p-3 border border-gray-700 rounded bg-gray-00 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                      />
                                                               </div>
                                                               <div>
                                                                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                                                             Subject
                                                                      </label>
                                                                      <input
                                                                             type="text"
                                                                             id="subject"
                                                                             placeholder="Subject"
                                                                             default
                                                                             Value={MessageSubject}
                                                                             onChange={(e=>setMessageSubject(e.target.value))}
                                                                             className="w-full p-3 border border-gray-700 rounded bg-gray-00  focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                      />
                                                               </div>
                                                               <div>
                                                                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                                                                             Message
                                                                      </label>
                                                                      <textarea
                                                                             id="message"
                                                                             rows="4"
                                                                             placeholder="Your Message"
                                                                             default
                                                                             Value={MessageDesc}
                                                                             onChange={(e=>setMessageDesc(e.target.value))}
                                                                             className="w-full p-3 border border-gray-700 rounded bg-gray-00 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                      ></textarea>
                                                               </div>
                                                               <a
                                                                      href={`mailto:${userDetails?.email}?subject=${MessageSubject}&body=${MessageDesc}`}
                                                                      className="flex justify-center w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-900 transition"
                                                               >
                                                                      Send Message
                                                               </a>
                                                        </form>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       );
};

export default Template2;
