import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Intro from './Intro/Intro';
const Home = () => {
  return (
    <div>
      <div className=" ">
        <Header />
        <Intro />
        {/* <FirstCont/> */}

        <Footer />
      </div>
    </div>
  )
}



export default Home
