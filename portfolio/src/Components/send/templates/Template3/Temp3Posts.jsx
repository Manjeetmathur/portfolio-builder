import React from 'react'
import { Link } from 'react-router-dom'

const Temp2Posts = ({ post, idx }) => {
    return (
        <div 
            className={`w-full flex flex-col  ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} 
            items-center justify-center py-8 bg-white rounded-xl shadow-md hover:shadow-lg 
            transition-all duration-300 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-5`} 
            data-aos="fade-up"
        >
            {/* Image Section */}
            <h1 
                className="text-2xl md:hidden font-bold text-center text-gray-800 mb-6 
                md:text-3xl lg:text-4xl"
            >
                {idx + 1}. {post.postTitle}
            </h1>
            <Link 
                target='_blank' 
                to={`${post.link}`} 
                className="w-full md:w-1/2 flex justify-center" 
                data-aos="zoom-in"
            >
                <div className="relative group">
                    <img
                        src={`${post?.postImage?.imageUrl}`}
                        alt="Post Image"
                        className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover 
                        rounded-lg shadow-md hover:scale-105 transition-all duration-300"
                    />
                    <div 
                        className="absolute inset-0 bg-blue-500/20 rounded-lg opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300"
                    ></div>
                </div>
            </Link>

            {/* Text Section */}
            <div 
                className="w-full md:w-1/2 flex flex-col justify-center items-center 
                md:items-start text-center md:text-left p-6" 
                data-aos="fade-up" 
                data-aos-delay="100"
            >
                <h1 
                    className="hidden md:block text-2xl md:text-3xl lg:text-4xl 
                    font-bold text-gray-800 mb-4"
                >
                    {idx + 1}. {post.postTitle}
                </h1>
                <p 
                    className="text-lg text-gray-600 lg:text-xl leading-relaxed"
                >
                    {post.postDescription}
                </p>
            </div>
        </div>
    )
}

export default Temp2Posts