import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Resume = () => {
       const { userDetails } = useSelector((st) => st.auth);
  return (
    <div className='bg-black p-20 h-full flex justify-center'>
      <Link to={`${userDetails.resume.imageUrl}`}>
      <img src={`${userDetails.resume.imageUrl}`} alt=""  className='w-[80vw] md:w-[600px] h-full '/>
      </Link>
    </div>
  )
}

export default Resume
