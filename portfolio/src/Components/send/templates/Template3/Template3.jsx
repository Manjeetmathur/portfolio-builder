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
import Temp3Posts from "./Temp3Posts";
import toast from "react-hot-toast";
import { url } from "../../../../backendUrl/Backendurl";
import axios from "axios";
import Temp3Blogs from "./Temp3Blogs";
import Temp1Header from "../Temp1Header";
import aos from 'aos';
import 'aos/dist/aos.css';
import { LuLoaderPinwheel } from "react-icons/lu";
import { Typewriter } from "react-simple-typewriter";
import { BackgroundBeams } from "../../../../ui/background-beams";
import Temp3Certificate from "./Temp3Certificate";

const Template3 = () => {
       const [userDetails, setUser] = useState();
       const postRef = useRef();
       const blogRef = useRef();
       const contactRef = useRef();
       const certificateref = useRef();
       const id = useParams();
       const [MessageName, setMessageName] = useState("");
       const [MessageSubject, setMessageSubject] = useState("");
       const [MessageDesc, setMessageDesc] = useState("");
       const [MessageEmail, setMessageEmail] = useState("");
       const [loading, setloading] = useState(true);

       useEffect(() => {
              const getUserDetails = async () => {
                     try {
                            const endpoint = `${url}/user/all-info/id?id=${id.id}`;
                            const data = await axios.get(endpoint);
                            const res = data.data;
                            if (res.success) {
                                   setUser(res.user);
                            }
                     } catch (error) {
                            console.error(error);
                     } finally {
                            setloading(false);
                     }
              };
              getUserDetails();
       }, [id]);

       useEffect(() => {
              aos.init({
                     duration: 2000,
                     once: false,
                     easing: "ease-in",
              });
       }, []);

       return (
              <div className="min-h-screen  relative overflow-hidden">
                     {/* Subtle Gradient Background */}
                    
                     <Temp1Header 
                            postRef={postRef} 
                            blogRef={blogRef} 
                            contactRef={contactRef} 
                            certificateref={certificateref}
                            color="bg-gradient-to-r to-blue-500 from-teal-500 from-green-500 text-white text-white" 
                     />
                     {loading ? (
                            <LuLoaderPinwheel className="absolute top-[40%] left-[45%] text-6xl text-blue-600 animate-spin " />
                     ) : (
                            <div className="relative z-10 bg-gradient-to-r ">
                                   {/* Profile Section */}
                                   <div className="relative pt-32 pb-20 md:flex md:items-center md:justify-center md:gap-12 lg:pt-40 lg:pb-28 px-6 bg-gradient-to-r from-blue-100 to-teal-100 ">
                                          {/* Profile Image */}
                                          <div className="flex justify-center mb-8 md:mb-0" data-aos="fade-up">
                                                 <img
                                                        src={userDetails?.profile?.imageUrl}
                                                        alt="Profile"
                                                        className="h-[200px] w-[200px] md:h-60 md:w-60 lg:h-80 lg:w-80 object-cover shadow-2xl rounded-lg shadow-blue-400 transform hover:scale-105 transition-all duration-500"
                                                        data-aos="zoom-in"
                                                 />
                                          </div>

                                          {/* Profile Details */}
                                          <div className="flex flex-col items-center md:items-start text-center md:text-left md:max-w-lg" data-aos="fade-up">
                                                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">
                                                        Hii it's <span className="text-blue-600">
                                                               <Typewriter
                                                                      words={[userDetails?.name || ""]}
                                                                      loop={false}
                                                                      cursor
                                                                      cursorStyle="_"
                                                                      typeSpeed={200}
                                                               />
                                                        </span>
                                                 </h2>
                                                 <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 mb-6">
                                                        {userDetails?.title}
                                                 </h3>

                                                 {/* Social Media Icons */}
                                                 <div className="flex flex-col items-center md:items-start" data-aos="zoom-in">
                                                        <div className="flex gap-4 mb-8">
                                                               <a
                                                                      href={userDetails?.linkedinlink}
                                                                      target="_blank"
                                                                      className="transform hover:scale-125 transition-all duration-300"
                                                               >
                                                                      <FaLinkedinIn className="text-4xl p-2 bg-white rounded-xl text-blue-600 hover:bg-blue-100 hover:text-blue-700 shadow-md shadow-blue-200" />
                                                               </a>
                                                               <a
                                                                      href={userDetails?.githublink}
                                                                      target="_blank"
                                                                      className="transform hover:scale-125 transition-all duration-300"
                                                               >
                                                                      <FaGithub className="text-4xl p-2 bg-white rounded-xl text-gray-800 hover:bg-gray-100 hover:text-gray-900 shadow-md shadow-blue-200" />
                                                               </a>
                                                               <a
                                                                      href={userDetails?.instagramlink}
                                                                      target="_blank"
                                                                      className="transform hover:scale-125 transition-all duration-300"
                                                               >
                                                                      <FaInstagram className="text-4xl p-2 bg-white rounded-xl text-pink-500 hover:bg-pink-100 hover:text-pink-600 shadow-md shadow-blue-200" />
                                                               </a>
                                                               <a
                                                                      href={userDetails?.facebooklink}
                                                                      target="_blank"
                                                                      className="transform hover:scale-125 transition-all duration-300"
                                                               >
                                                                      <FaFacebook className="text-4xl p-2 bg-white rounded-xl text-blue-600 hover:bg-blue-100 hover:text-blue-700 shadow-md shadow-blue-200" />
                                                               </a>
                                                        </div>

                                                        {/* Resume Link */}
                                                        <Link
                                                               to={userDetails?.resume}
                                                              target="_blank" rel="noopener noreferrer"
                                                               className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold px-6 py-3 rounded-xl hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-200"
                                                               data-aos="zoom-in"
                                                        >
                                                               See My Resume
                                                        </Link>
                                                 </div>
                                          </div>
                                   </div>

                                   {/* About Me Section */}
                                   <div className=" from-blue-500 to-teal-500 py-16 border-y-2 border-blue-100">
                                          <h2 
                                                 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r  mb-8" 
                                                 data-aos="fade-up"
                                          >
                                                 About Me
                                          </h2>
                                          <p 
                                                 className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed" 
                                                 data-aos="fade-up"
                                          >
                                                 {userDetails?.description}
                                          </p>
                                   </div>

                                   {/* Contact Info Section */}
                                   <div className="bg-gradient-to-r from-blue-100 to-teal-100 py-16 border-b-2 border-blue-100">
                                          <h2 
                                                 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 mb-8" 
                                                 data-aos="fade-up"
                                          >
                                                 Contact Info
                                          </h2>
                                          <p 
                                                 className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-4" 
                                                 data-aos="fade-up"
                                          >
                                                 <span className="font-bold text-gray-800">Phone Number: </span>
                                                 {userDetails?.phonenumber}
                                          </p>
                                          <p 
                                                 className="text-lg text-gray-600 text-center max-w-3xl mx-auto" 
                                                 data-aos="fade-up"
                                          >
                                                 <span className="font-bold text-gray-800">Email: </span>
                                                 {userDetails?.email}
                                          </p>
                                   </div>

                                   {/* Projects Section */}
                                   {userDetails?.posts?.length > 0 && (
                                          <div 
                                                 className="bg-gray-50 py-16 bg-gradient-to-r from-blue-100 to-teal-100 " 
                                                 ref={postRef}

                                          >
                                                 <h2 
                                                        className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 mb-12" 
                                                        data-aos="fade-up"
                                                 >
                                                        My Projects
                                                 </h2>
                                                 <div className="max-w-6xl mx-auto px-6">
                                                        {userDetails?.posts?.map((item, idx) => (
                                                               <Temp3Posts post={item} idx={idx} key={idx} />
                                                        ))}
                                                 </div>
                                          </div>
                                   )}
                                   {userDetails?.certificates?.length > 0 && (
                                          <div 
                                                 className="bg-gray-50 py-16 bg-gradient-to-r from-blue-100 to-teal-100 " 
                                                 ref={certificateref}

                                          >
                                                 <h2 
                                                        className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 mb-12" 
                                                        data-aos="fade-up"
                                                 >
                                                        My Certificates
                                                 </h2>
                                                 <div className="max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 ">
                                                        {userDetails?.certificates?.map((item, idx) => (
                                                               <Temp3Certificate certificate={item} idx={idx} key={idx} />
                                                        ))}
                                                 </div>
                                          </div>
                                   )}

                                   {/* Blogs Section */}
                                   {userDetails?.blogs?.length > 0 && (
                                          <div className="bg-gradient-to-r from-blue-100 to-teal-100 py-16" ref={blogRef}>
                                                 <h2 
                                                        className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 mb-12" 
                                                        data-aos="fade-up"
                                                 >
                                                        My Blogs
                                                 </h2>
                                                 <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                                        {userDetails?.blogs?.map((item) => (
                                                               <Temp3Blogs blog={item} key={idx} />
                                                        ))}
                                                 </div>
                                          </div>
                                   )}

                                   {/* Skills Section */}
                                   <div className="bg-gradient-to-r from-blue-100 to-teal-100 py-16">
                                          <h2 
                                                 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 mb-12" 
                                                 data-aos="fade-up"
                                          >
                                                 Skills
                                          </h2>
                                          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-6">
                                                 {userDetails?.skills?.map((item,idx) => (
                                                        <div
                                                               key={idx}
                                                               className="px-6 py-3 bg-white text-gray-800 rounded-xl border border-blue-200 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-200 transform hover:scale-105 transition-all duration-300"
                                                               data-aos="zoom-in"
                                                        >
                                                               {item}
                                                        </div>
                                                 ))}
                                          </div>
                                   </div>

                                   {/* Contact Section */}
                                   <div className="bg-gradient-to-bl from-white via-gray-50 to-blue-100 py-16" ref={contactRef}>
                                          <div className="max-w-6xl mx-auto px-6">
                                                 <h2 
                                                        className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 mb-12" 
                                                        data-aos="fade-up"
                                                 >
                                                        Connect With Me
                                                 </h2>
                                                 <div className="grid md:grid-cols-2 gap-12">
                                                        {/* Contact Info */}
                                                        <div className="space-y-6" data-aos="fade-up">
                                                               <h3 className="text-3xl font-semibold text-gray-800">Get in Touch</h3>
                                                               <p className="text-gray-600">
                                                                      Feel free to reach out via email or phone, or connect with me on social media.
                                                               </p>
                                                               <div className="space-y-4">
                                                                      <div className="flex items-center gap-4">
                                                                             <FaEnvelope className="text-blue-500 text-2xl" />
                                                                             <a
                                                                                    href={`mailto:${userDetails?.email}`}
                                                                                    className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                                                                             >
                                                                                    {userDetails?.email}
                                                                             </a>
                                                                      </div>
                                                                      <div className="flex items-center gap-4">
                                                                             <FaPhone className="text-blue-500 text-2xl" />
                                                                             <p className="text-gray-600">+91{userDetails?.phonenumber}</p>
                                                                      </div>
                                                                      <div className="flex gap-4 text-3xl">
                                                                             <a
                                                                                    href={userDetails?.linkedinlink}
                                                                                    className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                                                                             >
                                                                                    <FaLinkedin />
                                                                             </a>
                                                                             <a
                                                                                    href={userDetails?.githublink}
                                                                                    className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                                                                             >
                                                                                    <FaGithub />
                                                                             </a>
                                                                             <a
                                                                                    href={userDetails?.instagramlink}
                                                                                    className="text-gray-600 hover:text-pink-500 transition-colors duration-300"
                                                                             >
                                                                                    <FaInstagram />
                                                                             </a>
                                                                             <a
                                                                                    href={userDetails?.facebooklink}
                                                                                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                                                                             >
                                                                                    <FaFacebook />
                                                                             </a>
                                                                      </div>
                                                               </div>
                                                        </div>

                                                        {/* Contact Form */}
                                                        <div 
                                                               className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg shadow-blue-100" 
                                                               data-aos="zoom-in"
                                                        >
                                                               <form className="space-y-6">
                                                                      <div>
                                                                             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                                                    Name
                                                                             </label>
                                                                             <input
                                                                                    type="text"
                                                                                    id="name"
                                                                                    value={MessageName}
                                                                                    onChange={(e) => setMessageName(e.target.value)}
                                                                                    placeholder="Your Name"
                                                                                    className="w-full p-3 bg-gray-50 text-gray-800 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                                                                                    required
                                                                             />
                                                                      </div>
                                                                      <div>
                                                                             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                                                    Email
                                                                             </label>
                                                                             <input
                                                                                    type="email"
                                                                                    id="email"
                                                                                    value={MessageEmail}
                                                                                    onChange={(e) => setMessageEmail(e.target.value)}
                                                                                    placeholder="Your Email"
                                                                                    className="w-full p-3 bg-gray-50 text-gray-800 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                                                                                    required
                                                                             />
                                                                      </div>
                                                                      <div>
                                                                             <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                                                                    Subject
                                                                             </label>
                                                                             <input
                                                                                    type="text"
                                                                                    id="subject"
                                                                                    value={MessageSubject}
                                                                                    onChange={(e) => setMessageSubject(e.target.value)}
                                                                                    placeholder="Subject"
                                                                                    className="w-full p-3 bg-gray-50 text-gray-800 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                                                                                    required
                                                                             />
                                                                      </div>
                                                                      <div>
                                                                             <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                                                                    Message
                                                                             </label>
                                                                             <textarea
                                                                                    id="message"
                                                                                    rows="4"
                                                                                    value={MessageDesc}
                                                                                    onChange={(e) => setMessageDesc(e.target.value)}
                                                                                    placeholder="Your Message"
                                                                                    className="w-full p-3 bg-gray-50 text-gray-800 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                                                                                    required
                                                                             ></textarea>
                                                                      </div>
                                                                      <a
                                                                             href={`mailto:${userDetails?.email}?subject=${encodeURIComponent(MessageSubject)}&body=${encodeURIComponent(MessageDesc)}`}
                                                                             className="flex justify-center w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                                                                             onClick={() => {
                                                                                    if (!MessageName || !MessageEmail || !MessageSubject || !MessageDesc) {
                                                                                           toast.error("Please fill all fields");
                                                                                           return;
                                                                                    }
                                                                             }}
                                                                      >
                                                                             Send Message
                                                                      </a>
                                                               </form>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     )}
              </div>
       );
};

export default Template3;