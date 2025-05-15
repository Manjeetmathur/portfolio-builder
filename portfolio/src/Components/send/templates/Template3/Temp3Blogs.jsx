import React from 'react'

const Temp2Blogs = ({ blog }) => {
  return (
    <div data-aos="zoom-in">
      <div className="flex justify-center items-center py-6">
        <div 
          className="bg-white flex items-start justify-center border border-blue-200 
          m-5 rounded-xl shadow-md w-full max-w-sm transform transition-all 
          duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-300"
        >
          <div className="text-gray-800 flex justify-center items-center flex-col w-full p-6">
            <h1 
              className="text-xl md:text-2xl font-bold text-center mb-4 
              text-blue-600"
            >
              {blog?.title}
            </h1>
            <p 
              className="text-sm md:text-base text-gray-600 leading-relaxed 
              line-clamp-4"
            >
              {blog?.content}
            </p>
            {blog?.link && (
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium 
                transition-colors duration-300"
              >
                Read More
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Temp2Blogs