import React from 'react'
import { Link } from 'react-router-dom'

const Template3Posts = ({ post }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center 
    bg-gradient-to-b md:flex-row
          text-white
          border-gray-700  py-12 px-4 md:gap-10 md:p-20 hover:scale-110 border-b-2" data-aos='fade-up'>
      <Link to={`${post.link}`} className=" w-[50%] md:w-[300px] lg:w-[400px]" data-aos='zoom-in'>
        <img
          src={post?.postImage?.imageUrl}
          alt=""
          className="w-full rounded-xl shadow-lg object-cover mb-6 
          transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
        />
      </Link>
      <div className=" w-[80%] lg:w-[60%] text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 
        text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600" data-aos='fade-up'>
          {post.postTitle}
        </h1>
        <p className="mb-6 text-gray-300 leading-relaxed text-base sm:text-lg md:w-[] " data-aos='fade-up'>
          {post.postDescription}
        </p>
       
      </div>
    </div>

  )
}

export default Template3Posts
