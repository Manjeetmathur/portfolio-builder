import React, { useEffect, useRef } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import p13 from '../../../image/p13.png'
import p14 from '../../../image/p14.png'
import p15 from '../../../image/p15.png'
const FirstCont = () => {

  return (
    <div className="bg-gradient-to-b from-gray-950 to-gray-900  flex flex-col justify-center items-center py-6">
      <h1 className='text-3xl lg:text-4xl font-bold my-4 text-wrap px-4 text-center' data-aos='fade-up' >Explore Our <span className='text-blue-600'>Portfolio</span> Samples</h1>
      <div className="flex flex-col justify-center items-center lg:flex-row gap-10">

        <div className="grid md:grid-cols-2 md:gap-10 ">

          <div className='border-2 border-gray-500 flex justify-center p-6 rounded-lg my-6 w-[280px]' data-aos='fade-up'>
            <Link to={'https://portfolio-builder-manjeetmathurs-projects.vercel.app/template1/678411a40eca6b4d831c15f5'} data-aos='zoom-in'>
              <img src={p13} alt="" className="w-[250px] h-[180px] rounded-lg hover:scale-110 transition duration-[0.3s]"  />
            </Link>
          </div>

          <div className='border-2 border-gray-500 flex justify-center p-6 rounded-lg my-6 w-[280px]' data-aos='fade-up' >
            <Link to={'https://portfolio-builder-manjeetmathurs-projects.vercel.app/template2/678411a40eca6b4d831c15f5'} data-aos='zoom-in'>

              <img src={p14} alt="" className="w-[250px] h-[180px] rounded-lg hover:scale-110 transition duration-[0.3s]"   />
            </Link>

          </div>
        </div>
        <div className='border-2 border-gray-500 flex justify-center p-6 rounded-lg my-6 w-[280px]' data-aos='fade-up'>
          <Link to={'https://portfolio-builder-manjeetmathurs-projects.vercel.app/template3/678411a40eca6b4d831c15f5'} data-aos='zoom-in'  >

            <img src={p15} alt="" className="w-[250px] h-[180px] rounded-lg hover:scale-110 transition duration-[0.3s]"   />
          </Link>
        </div>

      </div>


    </div>

  )
}

export default FirstCont
