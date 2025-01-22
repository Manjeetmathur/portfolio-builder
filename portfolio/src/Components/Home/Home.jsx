import React from 'react'
import FirstCont from './FirstCont/FirstCont';
import SecondCont from './SecondCont/SecondCont';
import ThirdCont from './ThirdCont/ThirdCont';
import FourthCont from './FourthCont/FourthCont';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
const Home = () => {
  return (
    <div>
      <div className=" ">
        <Header/>
        <Intro/>
        {/* <FirstCont/> */}
        
        <Footer/>
      </div>
    </div>
  )
}



export default Home
