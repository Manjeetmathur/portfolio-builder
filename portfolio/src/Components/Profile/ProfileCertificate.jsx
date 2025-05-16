import React, { useContext, useRef, useState } from 'react'
import { FaEdit, FaHandMiddleFinger } from 'react-icons/fa'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GiCancel } from 'react-icons/gi'
import { context } from '../../Context/Context'
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { LuLoaderPinwheel } from "react-icons/lu";
import { RiExternalLinkFill } from 'react-icons/ri';
const ProfileCerticate = ({ certificate }) => {
  console.log(certificate)
  const [editSec, setEditSec] = useState(false)
  const ref = useRef()
  const { updateCerDesc, updateCerImage, updateCerLink, deleteCer, updateCerTitle } = useContext(context)
  const [certificateImage, setcertificateImage] = useState('');
  const [title, setcertificateTitle] = useState('');
  const [link, setcertificateLink] = useState('');
  const [desc, setcertificateDesc] = useState('');
  const [loading, setloading] = useState(null);
  const id = certificate._id
  // console.log(certificate);

  return (
    <div className='border-y-2 my-3 py-2 p-4 max-w-xs w-full mx-auto  shadow-2xl rounded-xl   '>
      <div className="flex relative  items-center  gap-4">
        <h4 className="text-lg font-bold mb-6 mr-4">{certificate?.certificateTitle}  {<Link className={`${certificate?.link?.length > 5 ? 'block' : "hidden"}`} to={`${certificate?.link}`}>
          <RiExternalLinkFill />
        </Link>}</h4>
        <div
          className="absolute top-0 right-0  text-2xl text-gray-300 hover:text-blue-400 cursor-pointer"
          onClick={() => setEditSec(true)}
        >
          <FaEdit className='p-1 ' />
        </div>
      </div>
      <Link to={`${certificate?.certificateImage?.imageUrl}`}>
        <img
          src={certificate?.certificateImage}
          alt=""
          className="w-full h-32 object-cover rounded-lg mt-2"
        />
      </Link>
      <p className="text-gray-400 m-2 my-3 text-wrap">{certificate?.certificateDescription}</p>
      {editSec && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg md:w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Edit certificate</h2>
              <div className="flex gap-2">
                {loading === 'delete' ? <LuLoaderPinwheel className="text-xl mt-1  hover:text-gray-400" /> :
                  <MdOutlineDeleteOutline className='text-2xl cursor-pointer'
                    onClick={async () => {
                      setloading('delete')
                      await deleteCer(id)
                      window.location.reload()
                      setloading()
                    }} />}
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
                  onChange={(e) => setcertificateTitle(e.target.value)}
                />
                <button onClick={async () => {
                  setloading('title')
                  await updateCerTitle(title, id)
                  setloading()
                  setcertificateTitle('')

                }}>
                  {loading === 'title' ? <LuLoaderPinwheel className="text-lg ml-1 hover:text-gray-400 animate-spin" /> : <TiTick className="text-2xl hover:text-gray-400" />}
                </button>
              </div>
              <div className="mb-4 flex gap-3">
                {/* <label className="block text-gray-400">Email</label> */}
                <input
                  type="email"
                  className="block w-[50vw] px-1 border rounded-lg  bg-gray-700 text-gray-100"
                  placeholder="Project Description . . ."
                  value={desc}
                  onChange={(e) => setcertificateDesc(e.target.value)}
                />
                <button onClick={async () => {
                  setloading('Description')
                  await updateCerDesc(desc, id)
                  setloading()
                  setcertificateDesc('')
                }}>
                  {loading === 'Description' ? <LuLoaderPinwheel className="text-lg ml-1 hover:text-gray-400 animate-spin" /> : <TiTick className="text-2xl hover:text-gray-400" />}

                </button>
              </div>
              <div className="mb-4 flex gap-3">
                {/* <label className="block text-gray-400">Email</label> */}
                <input
                  type="email"
                  className="block w-[50vw] px-1 border rounded-lg  bg-gray-700 text-gray-100"
                  placeholder="Project Link . . ."
                  value={link}
                  onChange={(e) => setcertificateLink(e.target.value)}
                />
                <button onClick={async () => {
                  setloading('Link')
                  await updateCerLink(link, id)
                  setloading()
                  setcertificateLink('')
                }}>
                  {loading === 'Link' ? <LuLoaderPinwheel className="text-lg ml-1 hover:text-gray-400 animate-spin" /> : <TiTick className="text-2xl hover:text-gray-400" />}
                  
                </button>
              </div>
              <div className="mb-4 flex gap-3" >
                {/* <label className="block text-gray-400">Profile Picture</label> */}
                <input
                  type="file"
                  ref={ref}
                  className="hidden"
                  onChange={(e) => setcertificateImage(e.target.files?.[0])}
                />
                <button
                  onClick={() => ref.current.click()}
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 w-[50vw]"
                >
                  Project Image
                </button>
                <button onClick={async () => {
                  setloading('certificateImage')
                  await updateCerImage(certificateImage, id)
                  setloading()
                  setcertificateImage('')
                }}>
                  {loading === 'certificateImage' ? <LuLoaderPinwheel className="text-lg ml-1 hover:text-gray-400 animate-spin" /> : <TiTick className="text-2xl hover:text-gray-400" />}

                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileCerticate
