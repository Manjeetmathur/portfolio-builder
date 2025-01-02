import axios from 'axios';
import React, { useState } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { url } from '../../backendUrl/Backendurl';
import toast from 'react-hot-toast';
import { logout } from '../../store/authSlice';
import { postsData } from '../../store/postSlice';
const Header = () => {
  const [toggle,setToggle] = useState(false)
  const {status} = useSelector(st => st.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userLogout = async() => {
   try {
     const data = await axios.get(`${url}/user/logout`,
       {
         withXSRFToken : true ,withCredentials : true
       }
     )
     const res = data.data
     console.log(res);
     if(res.success){
      toast.success(res.message)
      dispatch(postsData())
      dispatch(logout())
      navigate("/login")
     }else{
      toast.error(res.message)
     }
     
   } catch (error) {
    toast.error(error.message)
   }
  }

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 shadow-lg">
    <nav className="text-white flex justify-between items-center px-4 py-3 md:px-10">
      {/* Toggle Button for Mobile View (Optional) */}
      {/* <div className="md:hidden" onClick={() => setToggle(prev => !prev)}>
        <IoReorderThreeOutline className="text-2xl" />
      </div> */}
  
      <div className="flex space-x-6 md:space-x-10 text-sm md:text-lg font-semibold">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `group hover:text-blue-400 transition-colors duration-300 ${isActive ? "text-blue-400" : ""}`
          }
        >
          Home
          <span className="block h-[2px] bg-blue-400 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        </NavLink>
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            `group hover:text-blue-400 transition-colors duration-300 ${isActive ? "text-blue-400" : ""}`
          }
        >
          Profile
          <span className="block h-[2px] bg-blue-400 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        </NavLink>
        <NavLink
          to={"/send"}
          className={({ isActive }) =>
            `group hover:text-blue-400 transition-colors duration-300 ${isActive ? "text-blue-400" : ""}`
          }
        >
          Send
          <span className="block h-[2px] bg-blue-400 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        </NavLink>
        {status ? (
          <div
            className="group hover:text-blue-400 cursor-pointer transition-colors duration-300"
            onClick={userLogout}
          >
            Logout
            <span className="block h-[2px] bg-blue-400 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </div>
        ) : (
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              `group hover:text-blue-400 transition-colors duration-300 ${isActive ? "text-blue-400" : ""}`
            }
          >
            Login
            <span className="block h-[2px] bg-blue-400 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </NavLink>
        )}
      </div>
    </nav>
  </div>
  
  

  )
}

export default Header
