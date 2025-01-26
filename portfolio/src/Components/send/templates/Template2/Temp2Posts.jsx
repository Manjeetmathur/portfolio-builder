import React from 'react'
import { Link } from 'react-router-dom'

const Temp2Posts = ({ post, idx }) => {
    return (
        <div className={`w-full flex justify-center flex-col items-center  ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row  '}
        text-white  mt-6 bg-gradient-to-r
        to-gray-800 rounded-lg shadow-lg p-6 `} data-aos='fade-up'>
            {/* Image Section */} 
            <h1 className="text-3xl font-bold text-center md:hidden text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4 lg:text-4xl">
                {idx + 1}. {post.postTitle}
            </h1>
            <Link target='_blank' to={`${post.link}`} className="w-full md:w-[60%] lg:w-[50%]" >
                <div className="flex justify-center mx-auto" data-aos='zoom-in'>
                    <img
                        src={`${post?.postImage?.imageUrl}`}
                        alt="Post Image"
                        className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] object-cover rounded-lg shadow-lg shadow-gray-800 hover:scale-105 transition-all hover:shadow-2xl hover:shadow-gray-700"
                    />
                    {/* <div className="absolute inset-0 bg-black opacity-25 rounded-lg group-hover:opacity-50 transition-opacity"></div> */}
                </div>
            </Link>

            {/* Text Section */}
            <div className="flex flex-col justify-center items-center w-full p-6 lg:w-[50%] mt-4 md:mt-0" >
            <h1 className="text-3xl font-bold text-center md:block hidden text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4 lg:text-4xl">
                {idx + 1}. {post.postTitle}
            </h1>
                <h2 className="text-lg text-center text-gray-300  lg:text-xl">
                    {post.postDescription}
                </h2>
            </div>
        </div>

    )
}

export default Temp2Posts
