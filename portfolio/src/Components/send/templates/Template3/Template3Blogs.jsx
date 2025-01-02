import React from 'react'

const Template3Blogs = ({ blog }) => {
       return (
              <div className="flex justify-center items-center py-6">
                     <div className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 flex items-start justify-center border-4 border-gray-700 m-5 rounded-lg shadow-xl w-[300px]  transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-gray-500">
                            <div className="text-white flex justify-center items-center flex-col w-full p-6">
                                   <h1 className="text-2xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                                          {blog?.title}
                                   </h1>
                                   <h1 className="text-sm leading-relaxed text-gray-300 mb-3">
                                          {blog?.content}
                                   </h1>
                                   <button className="mt-4 text-xs lg:text-sm py-2 px-4 bg-teal-500 text-white font-semibold rounded-full transition-all duration-300 hover:bg-teal-600">
                                          Read More
                                   </button>
                            </div>
                     </div>
              </div>
       )
}

export default Template3Blogs
