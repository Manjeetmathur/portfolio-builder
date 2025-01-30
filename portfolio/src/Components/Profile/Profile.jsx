import React, { useContext, useRef, useState } from "react";
import {
  FaEdit,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfilePost from "./ProfilePost";
import ProfileBlogs from "./ProfileBlogs";
import Header from "../Header/Header";
import { context } from "../../Context/Context";
import { TiTick } from "react-icons/ti";
import Footer from "../Footer/Footer";
import { LuLoaderPinwheel } from "react-icons/lu";

const Profile = () => {
  const { userDetails } = useSelector((st) => st.auth);
  const [editSec, setEditSec] = useState("");
  const ref = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [resume, setResume] = useState("");
  const [title, setTitle] = useState("");
  const [profession, setProfession] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [desc, setDesc] = useState("");
  const [linked, setLinked] = useState("");
  const [git, setGit] = useState("");
  const [insta, setInsta] = useState("");
  const [face, setFace] = useState("");
  const [postImage, setPostImage] = useState('');
  const [posttitle, setpostTitle] = useState('');
  const [postlink, setPostLink] = useState('');
  const [postdesc, setpostDesc] = useState('');
  const [blogtitle, setBlogTitle] = useState("");
  const [blogdesc, setBlogDesc] = useState("");
  const [loading, setloading] = useState(null)
  const [newskills, setnewskills] = useState("");


  const {
    updateName, updateEmail, updatePhone, updateProfile,
    updateTitle, updateDesc, updateResume, updateProfession, updateSkills,
    updateFace, updateGit, updateInsta, updateLinked, uploadPost, uploadBlog, deleteSkills
  } = useContext(context)
  // console.log(name);


  const addskills = async (e) => {
    e.preventDefault()
    console.log(newskills)

    if (newskills) {

      await updateSkills(newskills);
      setnewskills('');

    } else {
      toast.error("Please enter your skills")
    }
  }

  return (
    <div className="">
      <Header />
      <div className="bg-gradient-to-l max-w-full mx-auto p-6 space-y-8 from-gray-950 via-gray-900 to-gray-950 text-gray-100 bg-pattern-checkerboard ">
        {/* Profile Section */}
        <div className="relative flex items-center space-x-6 p-6 bg-gray-800 
        shadow-lg rounded-lg transition-transform transform ">
          <Link to={userDetails?.profile?.imageUrl}>
            <img
              src={userDetails?.profile?.imageUrl}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover border-2"
            />
          </Link>
          
          <div>
            <h2 className="text-sm font-bold">{userDetails?.name}</h2>
            <p className="text-[10px] text-gray-400">{userDetails?.email}</p>
            <p className="text-sm text-gray-400">{userDetails?.phonenumber}</p>
            {/* <p className="text-gray-400">{userDetails?.profession}</p> */}
          </div>
          <div
            className="absolute top-4 right-4 text-2xl text-gray-300 hover:text-blue-400 cursor-pointer"
            onClick={async () => setEditSec("sec1")}

          >
            <FaEdit className='p-1' />
          </div>
        </div>

        {/* Resume Section */}
        <div className="relative flex flex-col md:flex-row items-center 
          gap-6 p-6 bg-gray-800 shadow-lg rounded-lg transition-transform transform">
          {/* <img
            src={userDetails?.resume?.imageUrl}
            alt="Resume"
            className="w-32 h-32 object-cover rounded-lg"
          />
           */}

          <Link to={userDetails?.resume}
            className="px-2 py-1 border-2 rounded-lg bg-blue-800 cursor-pointer md:mr-[50px]"
          >
           <p> Show Resume</p>
           </Link>
          <div>
            <h3 className="text-lg font-semibold">{userDetails?.title} ({userDetails?.profession})</h3>
            <p className="text-gray-400 mb-2">{userDetails?.description}</p>
            <div className="flex gap-4 text-blue-400 text-2xl">
              <Link to={userDetails?.linkedinlink}>
                <FaLinkedin />
              </Link>
              <Link to={userDetails?.githublink}>
                <FaGithub />
              </Link>
              <Link to={userDetails?.instagramlink}>
                <FaInstagram />
              </Link>
              <Link to={userDetails?.facebooklink}>
                <FaFacebook />
              </Link>
            </div>
          </div>
          <div
            className="absolute top-4 right-4 text-2xl text-gray-300 hover:text-blue-400 cursor-pointer"
            onClick={async () => setEditSec("sec2")}
          >

            <FaEdit className='p-1' />
          </div>
        </div >

        {/* Projects Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">My Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userDetails?.posts?.map((post) => (
              <ProfilePost
                post={post}
                setEditSec
                key={post._id}
                className="bg-gray-800 p-4 border rounded-lg shadow-md 
                  transition-transform transform hover:scale-105"
              />

            ))}
          </div>
        </div>

        {/* Add New Post Section */}
        <div className="p-6 bg-gray-800 shadow-lg rounded-lg" >
          <h3 className="text-2xl font-semibold mb-4">Add a New Post</h3>
          <input
            type="text"
            placeholder="Title"
            className="block w-full p-2 border border-gray-600 rounded bg-gray-700 text-gray-100 mb-4"
            onChange={(e) => setpostTitle(e.target.value)}
            value={posttitle}
          />
          <input
            type="file"
            className="block w-full p-2 border border-gray-600 rounded bg-gray-700 text-gray-100 mb-4"
            onChange={(e) => setPostImage(e.target.files?.[0])}
          />
          <textarea
            placeholder="Content"
            className="block w-full p-2 border border-gray-600 rounded bg-gray-700 text-gray-100 mb-4"
            onChange={(e) => setpostDesc(e.target.value)}
            value={postdesc}
          ></textarea>
          <input
            type="text"
            placeholder="Link"
            className="block w-full p-2 border border-gray-600 rounded bg-gray-700 text-gray-100 mb-4"
            onChange={(e) => setPostLink(e.target.value)}
            value={postlink}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={async () => {
              setloading('post')
              await uploadPost(posttitle, postImage, postlink, postdesc)
              setloading(null)
              setpostDesc('')
              setPostImage('')
              setpostTitle('')
              setPostLink('')
            }}>
            {loading === 'post' ? 'Uploading...' : 'Upload Post'}


          </button>
        </div >

        {/* Blogs Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">My Blogs</h3>
          <div className="space-y-4">
            {userDetails?.blogs?.map((blog) => (
              <ProfileBlogs key={blog._id}
                className="p-4 border rounded-lg shadow-md bg-gray-800 transition-transform transform hover:scale-105"
                blog={blog}
              />
            ))}
          </div>
        </div >

        {/* Add New blog Section */}
        <div className="p-6 bg-gray-800 shadow-lg rounded-lg" >
          <h3 className="text-2xl font-semibold mb-4">Add a New Blog</h3>
          <input
            type="text"
            placeholder="Blog Title"
            className="block w-full p-2 border border-gray-600 rounded bg-gray-700 text-gray-100 mb-4"
            value={blogtitle}
            onChange={(e) => setBlogTitle(e.target.value)}
          />

          <textarea
            placeholder="Blog Content"
            className="block w-full p-2 border border-gray-600 rounded bg-gray-700 text-gray-100 mb-4"
            value={blogdesc}
            onChange={(e) => setBlogDesc(e.target.value)}
          ></textarea>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={async () => {
              setloading('blog')
              await uploadBlog(blogtitle, blogdesc)
              setloading(null)
              setBlogDesc('')
              setBlogTitle('')
            }}
          >
            {loading === 'blog' ? 'Uploading...' : 'Upload Blog'}

          </button>
        </div >
        {/* Skills Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">My skills</h3>
          <div className="flex flex-wrap space-x-4 items-center justify-center">
            {userDetails?.skills?.map((skill, index) => (
              <div key={index} className="bg-blue-600 flex items-center justify-center gap-2 text-white py-1 px-3 text-sm rounded-md hover:bg-blue-500 transition-all m-2">
                <p>{skill}</p>
                <GiCancel
                  className="text-lg mt-[1px] text-gray-300 cursor-pointer"
                  onClick={async () => {
                    console.log(index)
                    await deleteSkills(index)
                    window.location.reload()

                  }}

                />

              </div>
            ))}
          </div>
        </div >

        {/* Add New blog Section */}
        <div className="p-6 bg-gray-800 shadow-lg rounded-lg space-y-4 mb-4" >

          <h1 className="text-2xl md:text-3xl font-semibold text-center tracking-wide">
            Skills Title
          </h1>
          <form onSubmit={(e) => addskills(e)} className="flex justify-center items-center space-x-4  pb-4">
            <input
              type="text"
              className="block w-full p-2 border border-gray-600 rounded bg-gray-700 text-gray-100"

              onChange={(e) => setnewskills(e.target.value)}
              value={newskills}
              placeholder="Enter your skills title"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"  >
              +Add
            </button>
          </form>

        </div>
        
        {
          editSec === "sec1" && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg md:w-1/2">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Edit Profile</h2>
                  <GiCancel
                    className="text-2xl text-gray-300 cursor-pointer"
                    onClick={async () => setEditSec("")}

                  />

                </div>
                <div>
                  <div className="mb-4 flex gap-3">
                    {/* <label className="block text-gray-400">Name</label> */}
                    <input
                      type="text"
                      className="block w-[58vw] border rounded-lg px-1 bg-gray-700 text-gray-100"
                      placeholder="Name . . ."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <button onClick={async () => {
                      setloading('name')
                      await updateName(name)
                      setName("")
                      setloading(null)
                    }}>
                      {loading === 'name' ? <LuLoaderPinwheel className="text-lg ml-1 hover:text-gray-400 animate-spin " /> : <TiTick className="text-2xl hover:text-gray-400" />}  </button>
                  </div>
                  <div className="mb-4 flex gap-3">
                    {/* <label className="block text-gray-400">Email</label> */}
                    <input
                      type="email"
                      className="block w-[58vw] px-1 border rounded-lg  bg-gray-700 text-gray-100"
                      placeholder="Email . . ."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={async () => {
                      setloading('email')
                      await updateEmail(email)
                      setloading(null)
                      setEmail('')
                    }}>

                      {loading === 'email' ? <LuLoaderPinwheel className="text-lg ml-1 hover:text-gray-400 animate-spin" /> : <TiTick className="text-2xl hover:text-gray-400" />}
                    </button>
                  </div>
                  <div className="mb-4 flex gap-3">
                    {/* <label className="block text-gray-400">Email</label> */}
                    <input
                      type="email"
                      className="block w-[58vw] px-1 border rounded-lg  bg-gray-700 text-gray-100"
                      placeholder="Phone . . ."
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <button onClick={async () => {
                      setloading('phone')
                      await updatePhone(phoneNumber)
                      setloading(null)
                      setPhoneNumber('')
                    }}>
                      {loading === 'phone' ? <LuLoaderPinwheel className="text-lg ml-1 hover:text-gray-400 animate-spin" /> : <TiTick className="text-2xl hover:text-gray-400" />}
                    </button>
                  </div>
                  <div className="mb-4 flex gap-3" >
                    {/* <label className="block text-gray-400">Profile Picture</label> */}
                    <input
                      type="file"
                      ref={ref}
                      className="hidden"
                      onChange={(e) => setProfile(e.target.files?.[0])}
                    />
                    <button
                      onClick={async () => ref.current.click()}
                      className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 w-[58vw]"
                    >
                      Profile Image
                    </button>
                    <button onClick={async () => {
                      setloading('image')
                      await updateProfile(profile)
                      setloading(null)
                      setProfile('')
                    }}>
                      {loading === 'image' ? <LuLoaderPinwheel className="text-lg ml-1 hover:text-gray-400 animate-spin" /> : <TiTick className="text-2xl hover:text-gray-400" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        <div className={`${editSec == 'sec2' ? 'block' : 'hidden'} `}>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg md:w-1/2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Edit Details</h2>
                <GiCancel
                  className="text-2xl text-gray-300 cursor-pointer"
                  onClick={async () => setEditSec("")}

                />

              </div>
              <div>
                <div className="mb-4 flex gap-3">
                  {/* <label className="block text-gray-400">Title</label> */}
                  <input
                    type="text"
                    className="block w-[50vw] border rounded-lg p- bg-gray-700 text-gray-100 px-1"
                    placeholder="Title . . ."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <button onClick={async () => {
                    setloading('title')
                    await updateTitle(title)
                    setloading(null)
                    setTitle('')
                  }} >
                    {loading === 'title' ? <LuLoaderPinwheel className="text-lg ml-1 hover:text-gray-400 animate-spin" /> : <TiTick className="text-2xl hover:text-gray-400" />}
                  </button>
                </div>
                <div className="mb-4 flex gap-3">
                  {/* <label className="block text-gray-400">Title</label> */}
                  <input
                    type="text"
                    className="block w-[50vw] border rounded-lg p- bg-gray-700 text-gray-100 px-1"
                    placeholder="Profession . . ."
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                  />
                  <button onClick={async () => {
                    setloading('profession')
                    await updateProfession(profession)
                    setloading(null)
                    setProfession('')
                    // window.location.reload()
                  }} >
                    {loading === 'profession' ? <LuLoaderPinwheel className="text-lg ml-1 hover:text-gray-400 animate-spin" /> : <TiTick className="text-2xl hover:text-gray-400" />}
                  </button>
                </div>
                <div className="mb-4 flex gap-3">
                  {/* <label className="block text-gray-400">Project Description</label> */}
                  <textarea
                    type="text"
                    className="block w-[50vw] border rounded-lg p- bg-gray-700 text-gray-100 px-1"
                    placeholder="Description . . ."
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <button onClick={async () => {
                    setloading('desc')
                    await updateDesc(desc)
                    setloading(null)
                    setDesc('')
                  }} >
                    {loading === 'desc' ? <LuLoaderPinwheel className="text-lg ml-1 hover:text-gray-400 animate-spin" /> : <TiTick className="text-2xl hover:text-gray-400" />}
                  </button>

                </div>
                <div className="mb-4 flex gap-3">
                  {/* <label className="block text-gray-400">Resume</label> */}
                  <input
                    // type="file"
                    ref={ref}
                    className="block w-[50vw] border rounded-lg p- bg-gray-700 text-gray-100 px-1"
                    // accept = 'application/pdf'
                    value={resume}
                    placeholder="put your resume link"
                    onChange={(e) => setResume(e.target.value)}
                  />

                  <button onClick={async () => {
                    setloading('resume')
                    await updateResume(resume)
                    setloading(null)
                    setResume('')
                  }} >
                    {loading === 'resume' ? <LuLoaderPinwheel className="text-lg ml-1 hover:text-gray-400 animate-spin" /> : <TiTick className="text-2xl hover:text-gray-400" />}  </button>
                </div>
                <div className="mb-4 flex gap-3">
                  {/* <label className="block text-gray-400">LinkedIn </label> */}
                  <input
                    type="text"
                    className="block border w-[50vw] rounded-lg  bg-gray-700 text-gray-100 px-1"
                    placeholder="LinkedIn . . ."
                    value={linked}
                    onChange={(e) => setLinked(e.target.value)}
                  />
                  <button onClick={async () => {
                    setloading('linkedin')
                    await updateLinked(linked)
                    setloading(null)
                    setLinked('')
                  }} >
                    {loading === 'linkedin' ? <LuLoaderPinwheel className="text-lg ml-1 hover:text-gray-400 animate-spin" /> : <TiTick className="text-2xl hover:text-gray-400" />}
                  </button>
                </div>
                <div className="mb-4 flex gap-3">
                  {/* <label className="block text-gray-400">Project Description</label> */}
                  <input
                    type="text"
                    className="block border w-[50vw] rounded-lg  bg-gray-700 text-gray-100 px-1"
                    placeholder="Github . . ."
                    value={git}
                    onChange={(e) => setGit(e.target.value)}
                  />
                  <button onClick={async () => {
                    setloading('Github')
                    await updateGit(git)
                    setloading(null)
                    setGit('')
                  }} >
                    {loading === 'Github' ? <LuLoaderPinwheel className="text-lg ml-1 hover:text-gray-400 animate-spin" /> : <TiTick className="text-2xl hover:text-gray-400" />} </button>
                </div>
                <div className="mb-4 flex gap-3">
                  {/* <label className="block text-gray-400">Project Description</label> */}
                  <input
                    type="text"
                    className="block border w-[50vw] rounded-lg  bg-gray-700 text-gray-100 px-1"
                    placeholder="Instagram . . ."
                    value={insta}
                    onChange={(e) => setInsta(e.target.value)}

                  />
                  <button onClick={async () => {
                    setloading('Instagram')
                    await updateInsta(insta)
                    setloading(null)
                    setInsta('')
                  }} >
                    {loading === 'Instagram' ? <LuLoaderPinwheel className="text-lg ml-1 hover:text-gray-400 animate-spin" /> : <TiTick className="text-2xl hover:text-gray-400" />}
                  </button>
                </div>
                <div className="mb-4 flex gap-3">
                  {/* <label className="block text-gray-400">Project Description</label> */}
                  <input
                    type="text"
                    className="block border w-[50vw] rounded-lg  bg-gray-700 text-gray-100 px-1"
                    placeholder="Facebook . . ."
                    value={face}
                    onChange={(e) => setFace(e.target.value)}
                  />
                  <button onClick={async () => {
                    setloading('Facebook')
                    await updateFace(face)
                    setloading('')
                    setFace('')
                  }} >
                    {loading === 'Facebook' ? <LuLoaderPinwheel className="text-lg ml-1 hover:text-gray-400 animate-spin" /> : <TiTick className="text-2xl hover:text-gray-400" />}
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div >
      <Footer />
    </div >
  );
};

export default Profile;
