import React from 'react'
import Template3Blogs from '../Template3/Template3Blogs'

const Temp2Blogs = ({blog}) => {
  return (
    <div data-aos='zoom-in'>
      <Template3Blogs blog={blog} cl = {"bg-gradient-to-r from-blue-950 via-gray-900 to-gray-900 flex items-start justify-center border-4 border-blue-700 m-5 rounded-lg shadow-xl w-[300px]  transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500"}/>
    </div>
  )
}

export default Temp2Blogs
