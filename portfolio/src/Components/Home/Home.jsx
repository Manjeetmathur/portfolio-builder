import React from 'react'
import FirstCont from './FirstCont/FirstCont';
import SecondCont from './SecondCont/SecondCont';
import ThirdCont from './ThirdCont/ThirdCont';
import FourthCont from './FourthCont/FourthCont';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <div>
      <div className=" ">
        
        <Header/>
        <FirstCont/>
        <SecondCont/>
        <ThirdCont/>
        <FourthCont/>
        <Footer/>
      </div>
    </div>
  )
}


{/* <div className="mx-10 flex flex-col md:flex-row-reverse 
items-center justify-evenly">
  <div className="">
    <img src={p1} alt="" className=' w-[300px] h-[300px] 
    rounded-full  m-auto my-10 shadow-2xl '/>
  </div>
  <div className="flex flex-col items-center mx-4 md:w-1/2">
    <h1 className='text-[28px] md:text-[35px] font-bold my-2'>Hii I'm Manjeet</h1>
    <h2 className='text-[18px] md:text-[25px] font-semibold my-2'>Full Stack Web Developer</h2>
    <p className='text-sm md:text-[15px]'>Lorem, ipsum dolor sit amet 
      consectetur adipisicing elit. 
      Dolorem aliquid aliquam amet 
      consequatur molestiae excepturi, 
      inventore odit porro repellat 
      adipisci.
    </p>
  </div>
</div> */}
export default Home
