import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import p13 from "../../image/p13.png";
import p14 from "../../image/p14.png";
import p15 from "../../image/p15.png";

const FrontInterface = () => {
       const {userData} = useSelector(st => st.auth)
       // const dispatch = useDispatch()

       //get userDetails
     

       return (
           <div className="">
              <Header/>
              <div className="from-gray-950 via-gray-800 to-gray-950 bg-gradient-to-tl md:h-[92vh]">
                     <div className=" flex justify-center items-center place-content-center flex-col p-[20px]">
                            <h1 className="mt-10 font-bold text-[20px] text-white ">
                                   Choose Your Favourite Template
                            </h1>
                            <div className="md:grid md:grid-cols-2 lg:grid-cols-3">

                                   {/* //tempplate 1 */}
                                   <Link to={`/template1/${userData?.id}`}>
                                          <img src={p13} className="  h-[200px] w-[270px] md:w-[230px] border-2 m-3 rounded-lg "></img>
                                   </Link>
                                   <Link to={`/template2/${userData?.id}`}>
                                          <img  src={p14} className="  h-[200px] w-[270px] md:w-[230px] border-2 m-3 rounded-lg "></img>
                                   </Link>
                                   <Link to={`/template3/${userData?.id}`}>
                                          <img src={p15} className=" h-[200px] w-[270px] md:w-[230px] border-2 m-3 rounded-lg "></img>
                                   </Link>
                                   <Link to={`/template4/${userData?.id}`}>
                                          <img src={p15} className=" h-[200px] w-[270px] md:w-[230px] border-2 m-3 rounded-lg "></img>
                                   </Link>
                            </div>
                     </div>
              </div>
           </div>
       );
};

export default FrontInterface;
