import React from 'react'

const Temp1Blogs = ({ blog }) => {
       console.log(blog);

       return (
              <div className="flex items-start justify-center border-2 m- rounded-lg font-bold ">
                     <div className='  flex justify-center items-center flex-col w-[90%]'>
                            <h1 className=' px-6 text-2xl font-semibold'>{blog?.title}</h1>
                            <h1 className=' py-2 '>{blog?.content}</h1>
                     </div>
              </div>

       )
}

export default Temp1Blogs
