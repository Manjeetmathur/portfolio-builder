import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";
import Temp1Posts from "./Temp1Posts";
import toast from "react-hot-toast";
import { url } from "../../../../backendUrl/Backendurl";
import axios from "axios";
import Temp1Blogs from "./Temp1Blogs";
import Temp1Header from "../Temp1Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { LuLoaderPinwheel } from "react-icons/lu";
import { context } from "../../../../Context/Context";
import { BackgroundBeamsWithCollision } from "../../../../ui/background-beams-with-collision";
import { Typewriter } from "react-simple-typewriter";
import { BackgroundBeams } from "../../../../ui/background-beams";
import Temp1Certificate from "./Temp1Certificate";


const Template1 = () => {
  const [userDetails, setUser] = useState();
  const [loading, setloading] = useState(true);
  const postRef = useRef();
  const certificateref = useRef();
  const blogRef = useRef();
  const contactRef = useRef();
  const id = useParams();
  // const { getUserDetails } = useContext(context)
  const [MessageName, setMessageName] = useState("")
  const [MessageSubject, setMessageSubject] = useState("")
  const [MessageDesc, setMessageDesc] = useState("")
  const [MessageEmail, setMessageEmail] = useState("")

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

      } finally {
        setloading(false)
      }
    };
    getUserDetails()
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: false,
    });
  }, [id]);



  return (
    <div className="f1 ">

      <Temp1Header postRef={postRef} blogRef={blogRef} certificateref={certificateref} contactRef={contactRef} color="bg-gradient-to-r from-green-200 to-blue-300 text-blue-900 " />

      {loading ? <LuLoaderPinwheel className="absolute top-[45vh] left-[45vw] text-[50px] animate-spin" /> :
        <div className="bg-gradient-to-r from-gray-200 to-blue-400 relative">


          <BackgroundBeamsWithCollision>

            <div className=" p-10 pt-28 md:pt-40 md:flex justify-center items-center flex-row-reverse lg:p-36  ">

              {/* Profile Image Section */}
              <div className=" z-10 flex justify-center items-center " data-aos='zoom-in'>
                <img
                  src={userDetails?.profile?.imageUrl}
                  alt="Profile"
                  className="h-[55vw] w-[50vw] rounded-full object-cover md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] hover:scale-103 transition-all duration-500"
                />
              </div>



              {/* Profile Info Section */}
              <div className=" z-10 flex justify-center items-center md:items-start flex-col md:w-[60%] text-center md:text-left">
                <h2 className="text-xl font-bold font-serif mt-4 lg:text-4xl md:text-3xl sm:text-2xl f1" data-aos="fade-up">
                  Hi, it's {" "}
                  <span className="text-blue-500">
                    <Typewriter
                      words={[userDetails?.name || ""]}
                      loop={false}
                      cursor
                      cursorStyle="|"
                      typeSpeed={200}
                    />
                  </span>
                </h2>

                <h2 className="text-2xl font-bold  mt-4 lg:text-3xl md:text-2xl" data-aos="fade-up">
                  {userDetails?.title}
                </h2>

                <h2 className="text-md font-normal mt-4 md:text-xl" data-aos="fade-up">
                  {userDetails?.description}
                </h2>

                {/* Social Links */}
                <div className="flex flex-col items-center md:items-start mt-6">
                  <div className="flex space-x-4">
                    <a
                      href={userDetails?.linkedinlink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500"
                      data-aos="fade-up"
                    >
                      <FaLinkedinIn className="text-3xl lg:text-4xl border-2 border-white hover:bg-blue-500 hover:text-white p-1 rounded-xl hover:shadow-md" />
                    </a>
                    <a
                      href={userDetails?.githublink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-700"
                      data-aos="fade-up"
                    >
                      <FaGithub className="text-3xl lg:text-4xl border-2 p-1 rounded-xl hover:bg-blue-500 hover:text-white  border-white hover:shadow-md" />
                    </a>
                    <a
                      href={userDetails?.instagramlink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-500"
                      data-aos="fade-up"
                    >
                      <FaInstagram className="text-3xl lg:text-4xl border-2 p-1 rounded-xl hover:bg-blue-500  border-white hover:shadow-md" />
                    </a>
                    <a
                      href={userDetails?.facebooklink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600"
                      data-aos="fade-up"
                    >
                      <FaFacebook className="text-3xl lg:text-4xl border-2 p-1 rounded-xl hover:bg-blue-500 hover:text-white border-white hover:shadow-md" />
                    </a>
                  </div>

                  {/* Resume Button */}
                  <div className="mt-6" data-aos="fade-up">
                    <Link to={`${userDetails?.resume}`}
                    target="_blank" rel="noopener noreferrer"
                      className="text-sm lg:text-xl border-2 px-4 py-2 rounded-xl text-gray-700 border-white font-semibold hover:bg-blue-500 hover:text-white hover:shadow-md"
                    >
                      See My Resume
                    </Link>
                  </div>
                </div>
              </div>

            </div>


          </BackgroundBeamsWithCollision>

          <div className="py-9  bg-gradient-to-t bg-gray-100 ">
            {/* Projects Section */}
            {userDetails?.posts?.length && <section className="mb-12">
              <h1
                className="text-3xl font-extrabold text-center bg-clip-text
                bg-gradient-to-r from-teal-700 to-blue-500 mt-6"
                ref={postRef}
                data-aos="fade-up"
              >
                Projects
              </h1>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userDetails?.posts?.map((item) => (
                  <div
                    key={item._id}
                    className=" py-6 mx-4 "
                    data-aos="zoom-in"
                  >
                    <Temp1Posts post={item} />
                  </div>
                ))}
              </div>
            </section>
            }
            {userDetails?.certificates?.length && <section className="mb-12">
              <h1
                className="text-3xl font-extrabold text-center bg-clip-text
                bg-gradient-to-r from-teal-700 to-blue-500 mt-6"
                ref={certificateref}
                data-aos="fade-up"
              >
                Certificates
              </h1>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userDetails?.certificates?.map((item) => (
                  <div
                    key={item._id}
                    className=" py-6 mx-4 "
                    data-aos="zoom-in"
                  >
                    <Temp1Certificate certificate={item} />
                  </div>
                ))}
              </div>
            </section>
            }
            {/* BlogsSection */}
            {userDetails?.blogs?.length > 0 &&
              <section>
                <h1
                  className="text-3xl font-extrabold text-center bg-clip-text
                bg-gradient-to-r from-teal-700 to-blue-500 mt-6"
                  ref={blogRef}
                  data-aos="fade-up"
                >
                  Blogs
                </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {userDetails?.blogs?.map((item) => (
                    <div
                      key={item._id}
                      className=" p-6 mx-4 "
                      data-aos="fade-up"
                    >
                      <Temp1Blogs blog={item} />
                    </div>
                  ))}
                </div>
              </section>
            }
          </div>
          {userDetails?.skills?.length > 0 &&
            <div className="bg-gradient-to-r from-blue-400 to-gray-300  ">
              <h1 className="bg-gradient-to-r from-blue-400 to-gray-300 px-6 text-2xl font-semibold text-blue-600 pt-4 flex justify-center">Skills</h1>
              <div className="-blue-400 flex flex-wrap justify-center items-center p-6">
                {userDetails?.skills?.map((item, ind) => (
                  <div
                    key={ind}
                    className="px-4 border-2 m-3 rounded-xl border-gray-2 "
                    data-aos="zoom-in"
                  >
                    {item}
                  </div>
                ))}
              </div>

            </div>
          }

          <div className="" ref={contactRef}>
            <div className="my-3 py-12 " data-aos="zoom-in">
              <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-8" >
                  Contact Me
                </h2>
                <div className="grid md:grid-cols-2 gap-10" >
                  {/* Contact Info */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Get in Touch</h3>
                    <p className="text-gray-900">
                      Feel free to reach out via email or phone, or connect with me on
                      social media.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <FaEnvelope className="text-blue-500 text-xl" />
                        <a
                          href={`mailto:${userDetails?.email}`}
                          className="text-gray-900 hover:text-blue-400"
                        >
                          {userDetails?.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-4">
                        <FaPhone className="text-blue-500 text-xl" />
                        <p className="text-gray-900">+91{userDetails?.phonenumber}</p>
                      </div>
                      <div className="flex space-x-4 text-2xl">
                        <a
                          href={userDetails?.linkedinlink}
                          className="hover:text-blue-400"
                        >
                          <FaLinkedin />
                        </a>
                        <a
                          href={userDetails?.githublink}
                          className="hover:text-blue-400"
                        >
                          <FaGithub />
                        </a>
                        <a
                          href={userDetails?.instagramlink}
                          className="hover:text-pink-500"
                        >
                          <FaInstagram />
                        </a>
                        <a
                          href={userDetails?.facebooklink}
                          className="hover:text-blue-600"
                        >
                          <FaFacebook />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border-4 p-6 rounded-lg shadow-xl  " data-aos='zoom-in'>
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={MessageName}
                          onChange={(e => setMessageName(e.target.value))}
                          placeholder="Your Name"
                          className="w-full p-3 border  border-gray-700 rounded bg-gray-00  focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
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
                          value={MessageEmail}
                          onChange={(e => setMessageEmail(e.target.value))}
                          className="w-full p-3 border text-black border-gray-700 rounded bg-gray-00 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                          value={MessageSubject}
                          onChange={(e => setMessageSubject(e.target.value))}
                          className="w-full p-3 border text-black border-gray-700 rounded bg-gray-00  focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                          value={MessageDesc}
                          onChange={(e => setMessageDesc(e.target.value))}
                          className="w-full p-3 border text-black border-gray-700 rounded bg-gray-00 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      }
    </div>
  );
};

export default Template1;
