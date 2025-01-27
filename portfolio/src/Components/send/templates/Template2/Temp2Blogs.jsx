import React from 'react'

const Temp2Blogs = ({blog}) => {
  return (
    <div data-aos='zoom-in'>
       <div className="flex justify-center items-center py-6">
                     <div className="bg-gradient-to-r from-blue-950 via-gray-900 to-gray-900 flex items-start justify-center border-4 border-blue-700 m-5 rounded-lg shadow-xl w-[300px]  transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500">
                            <div className="text-white flex justify-center items-center flex-col w-full p-6">
                                   <h1 className="text-2xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                                          {blog?.title}
                                   </h1>
                                   <h1 className="text-sm leading-relaxed text-gray-300 mb-3">
                                          {blog?.content}
                                   </h1>
                                  
                            </div>
                     </div>
              </div>
    </div>
  )
}

export default Temp2Blogs
