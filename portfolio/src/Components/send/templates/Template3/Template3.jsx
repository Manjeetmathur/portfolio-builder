import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
       FaFacebook,
       FaGit,
       FaGithub,
       FaInstagram,
       FaLinkedinIn,
} from "react-icons/fa";
// import Temp2Posts from './Temp2Posts'
import toast from "react-hot-toast";
import { url } from "../../../../backendUrl/Backendurl";
import axios from "axios";
import Template3Posts from "./Ttemplate3Posts";
import Template3Blogs from "./Template3Blogs";
import Temp1Header from "../Template1/Temp1Header";
// import Temp2Blogs from "./Temp2Blogs";
const Template3 = () => {
       const [userDetails, setUser] = useState();

       const postRef = useRef()
       const blogRef = useRef()
       const contactRef = useRef()
       const id = useParams();
       console.log(id);
       useEffect(() => {
              try {
                     const getUserDetails = async () => {
                            console.log("hii");

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
       const openWhatsapp = () => {
              window.open(`https://wa.me/${userDetails?.phonenumber}`)
       }
       const showPdf = () => {
              window.open(`${url}/f/${userDetails?.resume}`)
       }
       return (
              <div className="">

                     <Temp1Header postRef={postRef} blogRef={blogRef} contactRef={contactRef}
                            color="bg-gradient-to-r from-gray-900 via-blue-950  to-gray-800 text-white" />

                     <div
                            className="bg-gray-950   md:pb-20 md:flex
       justify-center items-center flex-row-reverse lg:p-36"
                     >
                            <a
                                   to={`${link}`}
                                   className="absolute top-16 right-9 "
                                   onClick={Openlink}
                            >
                                   send
                            </a>
                            <div className="flex justify-center items-center p-8">
                                   <img
                                          src={userDetails?.profile?.imageUrl}
                                          alt="Profile"
                                          className="h-[70vw] w-[70vw] max-w-[300px] max-h-[300px]
                                           md:max-w-[350px]
                                           md:max-h-[350px] border- border-gray-500 shadow-lg 
                                           object-contain transition-transform duration-500 hover:scale-105 
                                           rounded-full"
                                   />
                            </div>

                            <div className="flex justify-center items-center flex-col py-6 bg-gradient-to-b from-gray-900 to-gray-950 text-white md:w-[60%] rounded-lg shadow-lg md:bg-none">
                                   <div className="flex justify-center items-center flex-col text-center mb-6">
                                          <h2 className="text-3xl font-extrabold mt-2 lg:text-4xl md:text-3xl">
                                                 Hi, I'm {userDetails?.name}
                                          </h2>
                                          <h3 className="text-lg font-semibold mt-2 lg:text-2xl md:text-xl text-gray-300">
                                                 {userDetails?.title}
                                          </h3>
                                          <div className="mt-6">
                                                 <button
                                                        onClick={() => showPdf(userDetails?.resume)}
                                                        className="text-sm lg:text-lg px-4 py-2 border-2 border-blue-500 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 hover:border-blue-600 transition-colors duration-300"
                                                 >
                                                        See My Resume
                                                 </button>
                                          </div>
                                   </div>

                                   <div className="flex flex-col items-center justify-center">
                                          <div className="flex gap-4">
                                                 <Link to={`${userDetails?.linkedinlink}`} className="hover:scale-110 transition-transform duration-300">
                                                        <FaLinkedinIn className="text-3xl lg:text-4xl border-2 border-gray-300 p-2 bg-white text-gray-700 rounded-full shadow-lg" />
                                                 </Link>
                                                 <Link to={`${userDetails?.githublink}`} className="hover:scale-110 transition-transform duration-300">
                                                        <FaGithub className="text-3xl lg:text-4xl border-2 border-gray-300 p-2 bg-white text-gray-700 rounded-full shadow-lg" />
                                                 </Link>
                                                 <Link to={`${userDetails?.instalink}`} className="hover:scale-110 transition-transform duration-300">
                                                        <FaInstagram className="text-3xl lg:text-4xl border-2 border-gray-300 p-2 bg-white text-pink-600 rounded-full shadow-lg" />
                                                 </Link>
                                                 <Link to={`${userDetails?.facebooklink}`} className="hover:scale-110 transition-transform duration-300">
                                                        <FaFacebook className="text-3xl lg:text-4xl border-2 border-gray-300 p-2 bg-white text-blue-600 rounded-full shadow-lg" />
                                                 </Link>
                                          </div>
                                   </div>
                            </div>

                     </div>
                     <div
                            className="text-white w-full bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col 
  justify-center items-center md:items-start md:px-16 lg:px-32 py-8 shadow-lg"
                     >
                            <h2 className="text-4xl font-bold py-4 text-center md:text-left">
                                   About Me
                            </h2>
                            <p className="text-base font-medium w-[90%] md:text-lg lg:text-xl md:w-[80%] lg:w-[70%] text-gray-300 text-center md:text-left leading-relaxed">
                                   {userDetails?.description}
                            </p>
                     </div>

                     <div className="text-white w-full bg-gradient-to-b from-gray-700 
                            to-gray-800 flex flex-col items-center md:items-end md:px-16 
                            lg:px-32 py-8 rounded- shadow-lg" ref={contactRef} >
                            <h2 className="text-4xl font-bold py-4 text-center md:text-right">
                                   Connect With Me
                            </h2>
                            <div className="text-center md:text-right">
                                   <h3 className="text-base md:text-lg lg:text-xl font-medium mb-2">
                                          Phone Number: <span className="text-green-400">{userDetails?.phonenumber}</span>
                                   </h3>
                                   <h3 className="text-base md:text-lg lg:text-xl font-medium mb-4">
                                          Email: <span className="text-blue-400">{userDetails?.email}</span>
                                   </h3>
                                   <button
                                          className="text-sm lg:text-lg px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-md transition-transform duration-300 transform hover:scale-105"
                                          onClick={openWhatsapp}
                                   >
                                          WhatsApp Now
                                   </button>
                                   <a
                                          href={`mailto:${userDetails?.email}`}
                                          className="flex justify-center bg-blue-700 text-white py-3 rounded hover:bg-blue-900 transition"
                                   >
                                          Send Message
                                   </a>

                            </div>
                     </div>

                     <div className="bg-gray-900 flex flex-col justify-center items-center border-b-" ref={postRef}>
                            <h2 className="text-4xl font-bold text-white py-4 text-center md:text-right">My Projects</h2>
                            <div className="">

                                   {userDetails?.posts?.map((item) => {
                                          return <Template3Posts post={item} key={item._id}></Template3Posts>;
                                   })}
                            </div>
                     </div>
                     <div className="bg-gray-800 md:grid md:grid-cols-2 lg:grid-cols-3 p-2" ref={blogRef}>
                            {userDetails?.blogs?.map((item) => {
                                   return <Template3Blogs blog={item} key={item._id}></Template3Blogs>;
                            })}
                     </div>
              </div>
       );
};

export default Template3;
