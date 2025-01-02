import React from 'react'
import { Link } from 'react-router-dom'

const Temp2Posts = ({ post }) => {
    return (
        <div className="w-full flex justify-center flex-col items-center md:flex-row 
        text-white  mt-6 bg-gradient-to-r
        to-gray-800 rounded-lg shadow-lg p-6">
            {/* Image Section */}
            <Link target='_blank' to={`${post.link}`} className="w-full md:w-[60%] lg:w-[50%]">
                <div className="flex justify-center mx-auto">
                    <img
                        src={`${post?.postImage?.imageUrl}`}
                        alt="Post Image"
                        className="w-[60vw] object-cover rounded-lg"
                    />
                    {/* <div className="absolute inset-0 bg-black opacity-25 rounded-lg group-hover:opacity-50 transition-opacity"></div> */}
                </div>
            </Link>

            {/* Text Section */}
            <div className="flex flex-col justify-center items-center w-full p-6 lg:w-[50%] mt-4 md:mt-0">
                <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4 lg:text-4xl">
                    {post.postTitle}
                </h1>
                <h2 className="text-lg text-center text-gray-300  lg:text-xl">
                    {post.postDescription}
                </h2>
            </div>
        </div>

    )
}

export default Temp2Posts
