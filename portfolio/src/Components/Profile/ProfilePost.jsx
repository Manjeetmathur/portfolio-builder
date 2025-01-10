import React, { useContext, useRef, useState } from 'react'
import { FaEdit, FaHandMiddleFinger } from 'react-icons/fa'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GiCancel } from 'react-icons/gi'
import { context } from '../../Context/Context'
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { FaLink } from "react-icons/fa";
import { RiExternalLinkFill } from 'react-icons/ri';
const ProfilePost = ({ post }) => {
  const [editSec, setEditSec] = useState(false)
  const ref = useRef()

  const { updatePostDesc, updatePostImage, updatePostLink, deletePost, updatePostTitle } = useContext(context)
  const [postImage, setPostImage] = useState('');
  const [title, setpostTitle] = useState('');
  const [link, setPostLink] = useState('');
  const [desc, setpostDesc] = useState('');
  const id = post._id
  // console.log(post);

  return (
    <div className='border-y-2 my-3 py-2'>
      <div className="flex relative  items-center  gap-4">
        <h4 className="text-lg font-bold mb-2 mr-4">{post.postTitle}  {<Link className={`${post?.link?.length > 5 ? 'block' : "hidden"}`} to={`${post?.link}`}>
            <RiExternalLinkFill />
          </Link>}</h4>
          <div
            className="absolute top-0 right-0  text-2xl text-gray-300 hover:text-blue-400 cursor-pointer"
            onClick={() => setEditSec(true)}
          >
            <FaEdit className='p-1'/>         
        </div>
      </div>
      <Link to={`${post?.postImage?.imageUrl}`}>
        <img
          src={post?.postImage?.imageUrl}
          alt=""
          className="w-full h-32 object-cover rounded-lg mt-2"
        />
      </Link>
      <p className="text-gray-400 m-2 my-3">{post.postDescription}</p>
      {editSec && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg md:w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Edit Profile</h2>
              <div className="flex gap-2">
                <MdOutlineDeleteOutline className='text-2xl cursor-pointer' onClick={() => deletePost(id)} />
                <GiCancel
                  className="text-2xl text-gray-300 cursor-pointer"
                  onClick={() => setEditSec(false)}
                />
              </div>
            </div>
            <div>
              <div className="mb-4 flex gap-3">
                {/* <label className="block text-gray-400">Name</label> */}
                <input
                  type="text"
                  className="block w-[50vw] border rounded-lg px-1 bg-gray-700 text-gray-100"
                  placeholder="Project Title . . ."
                  value={title}
                  onChange={(e) => setpostTitle(e.target.value)}
                />
                <button onClick={() => {
                  updatePostTitle(title, id)
                  setpostTitle('')
                }}><TiTick className='text-2xl hover:text-gray-400' /></button>
              </div>
              <div className="mb-4 flex gap-3">
                {/* <label className="block text-gray-400">Email</label> */}
                <input
                  type="email"
                  className="block w-[50vw] px-1 border rounded-lg  bg-gray-700 text-gray-100"
                  placeholder="Project Description . . ."
                  value={desc}
                  onChange={(e) => setpostDesc(e.target.value)}
                />
                <button onClick={() => {
                  updatePostDesc(desc, id)
                  setpostDesc('')
                }}><TiTick className='text-2xl hover:text-gray-400' /></button>
              </div>
              <div className="mb-4 flex gap-3">
                {/* <label className="block text-gray-400">Email</label> */}
                <input
                  type="email"
                  className="block w-[50vw] px-1 border rounded-lg  bg-gray-700 text-gray-100"
                  placeholder="Project Link . . ."
                  value={link}
                  onChange={(e) => setPostLink(e.target.value)}
                />
                <button onClick={() => {
                  updatePostLink(link, id)
                  setPostLink('')
                }}><TiTick className='text-2xl hover:text-gray-400' /></button>
              </div>
              <div className="mb-4 flex gap-3" >
                {/* <label className="block text-gray-400">Profile Picture</label> */}
                <input
                  type="file"
                  ref={ref}
                  className="hidden"
                  onChange={(e) => setPostImage(e.target.files?.[0])}
                />
                <button
                  onClick={() => ref.current.click()}
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 w-[50vw]"
                >
                  Project Image
                </button>
                <button onClick={() => {
                  updatePostImage(postImage, id)
                  setPostImage('')
                }}><TiTick className='text-2xl hover:text-gray-400' /></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfilePost
