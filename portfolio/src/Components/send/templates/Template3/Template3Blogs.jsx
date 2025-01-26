import React from 'react'

const Template3Blogs = ({ blog,cl }) => {
       return (
              <div className="flex justify-center items-center py-6" data-aos='fade-up'>
                     <div className={cl}>
                            <div className="text-white flex justify-center items-center flex-col w-full p-6" data-aos='zoom-in'>
                                   <h1 className="text-2xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                                          {blog?.title}
                                   </h1>
                                   <h1 className="text-sm leading-relaxed text-gray-300 mb-3">
                                          {blog?.content}
                                   </h1>
                                  
                            </div>
                     </div>
              </div>
       )
}

export default Template3Blogs
