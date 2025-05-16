import React, { useContext, useRef, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { GiCancel } from 'react-icons/gi'
import { context } from "../../Context/Context"
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { TiTick } from "react-icons/ti";
import { LuLoaderPinwheel } from "react-icons/lu";


const ProfileBlogs = ({ blog }) => {
       const [editSec, setEditSec] = useState(false)
       const [loading, setloading] = useState(null)
       const [title, setBlogTitle] = useState("");
       const [desc, setBlogDesc] = useState("");
       const { updateBlogTitle, updateBlogContent, deleteBlog } = useContext(context)
       const id = blog._id
       return (
              <div className='border-y-2 my-3  max-w-xs w-full mx-auto  shadow-2xl rounded-xl'>
                     <div className="relative flex justify-between">
                            <h4 className="text-lg font-bold">{blog.title}</h4>
                            <div
                                   className="absolute top-2 right-4 text-2xl text-gray-300 hover:text-blue-400 cursor-pointer"
                                   onClick={() => setEditSec(true)}
                            >
                                   <FaEdit className='p-1' />
                            </div>
                     </div>
                     <p>{blog.content}</p>
                     {editSec && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                                   <div className="bg-gray-800 p-6 rounded-lg shadow-lg md:w-1/2">
                                          <div className="flex justify-between items-center mb-4">
                                                 <h2 className="text-xl font-bold">Edit Blog</h2>
                                                 <div className="flex gap-2">
                                                        {loading === 'delete' ? <LuLoaderPinwheel className="text-lg ml-1 hover:text-gray-400 animate-spin" /> :
                                                               <MdOutlineDeleteOutline className='text-2xl cursor-pointer'
                                                                      onClick={async() => {
                                                                             setloading('delete')
                                                                             await deleteBlog(id)
                                                                             setloading()
                                                                             window.location.reload()
                                                                      }} />
                                                                      }


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
                                                               placeholder="Blog Title . . ."
                                                               value={title}
                                                               onChange={(e) => {
                                                                      setBlogTitle(e.target.value)
                                                               }}
                                                        />
                                                        <button onClick={async () => {
                                                               setloading('Title')
                                                               await updateBlogTitle(title, id)
                                                               setloading()
                                                               setBlogTitle('')
                                                        }}>
                                                               {loading === 'Title' ? <LuLoaderPinwheel className="text-lg ml-1 hover:text-gray-400 animate-spin" /> : <TiTick className="text-2xl hover:text-gray-400" />}

                                                        </button>
                                                 </div>
                                                 <div className="mb-4 flex gap-3">
                                                        {/* <label className="block text-gray-400">Email</label> */}
                                                        <input
                                                               type="text"
                                                               className="block w-[50vw] px-1 border rounded-lg  bg-gray-700 text-gray-100"
                                                               placeholder="Blog Content . . ."
                                                               value={desc}
                                                               onChange={(e) => {
                                                                      setBlogDesc(e.target.value)
                                                               }}
                                                        />
                                                        <button onClick={async () => {
                                                               setloading('Content')
                                                               await updateBlogContent(desc, id)
                                                               setloading()
                                                               setBlogDesc('')
                                                        }}>
                                                               {loading === 'Content' ? <LuLoaderPinwheel className="text-lg ml-1 hover:text-gray-400 animate-spin" /> : <TiTick className="text-2xl hover:text-gray-400" />}

                                                        </button>
                                                 </div>

                                          </div>
                                   </div>
                            </div>
                     )}
              </div>
       )
}

export default ProfileBlogs
