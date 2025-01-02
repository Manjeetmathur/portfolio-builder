import React, { useEffect, useRef, useState } from "react";
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
import Temp1Header from "./Temp1Header";
const Template1 = () => {

  const [userDetails, setUser] = useState()
  const postRef = useRef()
  const blogRef = useRef()
  const contactRef = useRef()
  const id = useParams()
  console.log(id);
  useEffect(() => {
    try {
      const getUserDetails = async () => {
        console.log("hii");

        const endpoint = `${url}/user/all-info/id?id=${id.id}`
        console.log(endpoint);

        const data = await axios.get(endpoint)
        const res = data.data
        console.log("res", res);

        if (res.success) {
          setUser(res.user)
        }
      }
      getUserDetails()
    } catch (error) {
      console.log(error);

    }
  }, [])
  console.log(userDetails);

  // const link = window.location.href

  const showPdf = () => {
    window.open(`${url}/f/${userDetails?.resume}`)
  }
  return (
    <div className="">
      <Temp1Header postRef={postRef} blogRef={blogRef} contactRef={contactRef} />
      <div className="relative p-10 pt-28 md:pt-40 md:flex justify-center items-center flex-row-reverse lg:p-36">
        {/* Animated Background Circles */}
       

        {/* Profile Image Section */}
        <div className="relative z-10 flex justify-center items-center">
          <img
            src={userDetails?.profile?.imageUrl}
            alt="Profile"
            className="h-[55vw] w-[50vw] border-4 border-gray-300 rounded-full
              object-contain md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]"
          />
        </div>

        {/* Profile Info Section */}
        <div className="relative z-10 flex justify-center items-center md:items-start flex-col md:w-[60%] text-center md:text-left">
          <h2 className="text-[29px] font-bold font-mono mt-4 lg:text-4xl md:text-3xl">
            Hi, I'm {userDetails?.name}
          </h2>
          <h2 className="text-2xl font-bold font-mono mt-4 lg:text-3xl md:text-2xl">
            {userDetails?.title}
          </h2>
          <h2 className="text-md font-semibold mt-4 md:text-xl">
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
              >
                <FaLinkedinIn className="text-3xl lg:text-4xl border-2 p-1 rounded-xl hover:shadow-md" />
              </a>
              <a
                href={userDetails?.githublink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700"
              >
                <FaGithub className="text-3xl lg:text-4xl border-2 p-1 rounded-xl hover:shadow-md" />
              </a>
              <a
                href={userDetails?.instagramlink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <FaInstagram className="text-3xl lg:text-4xl border-2 p-1 rounded-xl hover:shadow-md" />
              </a>
              <a
                href={userDetails?.facebooklink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebook className="text-3xl lg:text-4xl border-2 p-1 rounded-xl hover:shadow-md" />
              </a>
            </div>

            {/* Resume Button */}
            <div className="mt-6">
              <button
                onClick={() => showPdf(userDetails?.resume)} 
                className="text-sm lg:text-xl border-2 px-4 py-2 rounded-xl text-gray-700 font-semibold hover:bg-gray-100 hover:shadow-md"
              >
                See My Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-9 border-t-4 bg-gray-100">
        {/* Projects Section */}
        <section className="mb-12">
          <h1
            className="text-3xl text-gray-800 font-bold font-mono flex justify-center mb-8"
            ref={postRef}
          >
            Projects
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {userDetails?.posts?.map((item) => (
              <div
                key={item._id}
                className="border border-gray-300 rounded-lg shadow-md 
                  bg-white py-6 mx-4 hover:shadow-lg transition-shadow"
       
              >
                <Temp1Posts post={item} />
              </div>
            ))}
          </div>
        </section>

        {/* Blogs Section */}
        <section>
          <h1
            className="text-3xl text-gray-800 font-bold font-mono flex justify-center mb-8  border-t-4 pt-3"
            ref={blogRef}
          >
            Blogs
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-">
            {userDetails?.blogs?.map((item) => (
              <div
                key={item._id}
                className="border border-gray-300 rounded-lg shadow-md 
                  bg-white p-6 mx-4 hover:shadow-lg transition-shadow "
              >
                <Temp1Blogs blog={item} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="border-t-4" ref={contactRef}>
        <div className=" my-3 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
            <div className="grid md:grid-cols-2 gap-10">
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
              <div className="border-4 p-6 rounded-lg shadow-xl">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
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
                      className="w-full p-3 border border-gray-700 rounded bg-gray-00 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full p-3 border border-gray-700 rounded bg-gray-00 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <a
                  href={`mailto:${userDetails?.email}`}
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

export default Template1;
