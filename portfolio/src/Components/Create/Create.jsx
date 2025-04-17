import React from 'react'
import SecondCont from './SecondCont/SecondCont'
import ThirdCont from './ThirdCont/ThirdCont'
import FourthCont from './FourthCont/FourthCont'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FifthCont from './fifthCont/FifthCont'
import SixthCont from './sixthCont/SixthCont'

const Create = () => {
       return (
              <div>
                     <Header/>
                     <SecondCont />
                     <ThirdCont />
                     {/* <SixthCont/> */}
                     <FourthCont />
                     <FifthCont />
                     <Footer/>
              </div>
       )
}

export default Create
