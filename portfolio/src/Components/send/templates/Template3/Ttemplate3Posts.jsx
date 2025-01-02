import React from 'react'
import { Link } from 'react-router-dom'

const Template3Posts = ({ post }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center 
    bg-gradient-to-b md:flex-row
          text-white
          border-gray-700  py-12 px-4 md:gap-10 md:p-20">
      <Link to={`${post.link}`} className=" w-[50%] md:w-[300px] lg:w-[400px]">
        <img
          src={post?.postImage?.imageUrl}
          alt=""
          className="w-full rounded-xl shadow-lg object-cover mb-6 
          transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
        />
      </Link>
      <div className=" w-[80%] lg:w-[60%] text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 
        text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          {post.postTitle}
        </h1>
        <p className="mb-6 text-gray-300 leading-relaxed text-base sm:text-lg md:w-[] ">
          {post.postDescription}
        </p>
        <Link to={`${post.link}`}>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 
          hover:from-blue-600 hover:to-purple-600 text-white font-semibold
           py-2 px-6 rounded-full shadow-lg transition-transform transform 
           hover:-translate-y-1 duration-300 text-sm sm:text-base">
            Read More
          </button>
        </Link>
      </div>
    </div>

  )
}

export default Template3Posts
