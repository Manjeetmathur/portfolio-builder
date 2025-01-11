import React from 'react'

const Temp1Blogs = ({ blog }) => {

       return (
              <div className="flex items-start justify-center m- rounded-lg font-bold hover:scale-105 transition-all hover:shadow-2xl hover:shadow-gray-600">
                     <div className='  flex justify-center items-center flex-col w-[90%]' data-aos='zoom-in'>
                            <h1 className=' px-6 text-2xl font-semibold'>{blog?.title}</h1>
                            <h1 className=' py-2 '>{blog?.content}</h1>
                     </div>
              </div>

       )
}

export default Temp1Blogs
