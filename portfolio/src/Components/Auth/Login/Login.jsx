import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios';
import { url } from '../../../backendUrl/Backendurl';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/authSlice';
import Header from '../../Header/Header';
const Login = () => {

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userlogin = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const data = await axios.post(
        `${url}/user/login`,
        { email, password },
        {
          headers: { "Content-Type": "application/json" }, withCredentials: "true"
        }
      );
      const res = data.data;
      console.log(res);
      if (res.success) {
        toast.success(res.message);
        dispatch(login(res.data))
        navigate("/")
      } else {
        toast.error(res.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="">

      <Header />
      <div className='from-[#0d113e] via-[#1b215f] to-black bg-gradient-to-bl h-[92vh] flex justify-center items-center m-auto'>

        <form className=" text-white  p-2  "
          onSubmit={(e) => userlogin(e)}
        >
          <h1 className='text-[3vw] my-1 md:text-xl lg:text-2xl'>Email</h1>
          <input type="email" name="email"
            className='h-[6vw] md:h-full outline-none border-2 border-white 
          bg-transparent shadow-md shadow-white
                text-[4vw] md:text-[25px] w-[60vw] lg:w-[40vw] rounded-lg py-1 px-1 mb-4'
            value={email} onChange={(e) => setEmail(e.target.value)} required />
          <h1 className='text-[3vw] my-1 md:text-xl lg:text-2xl'>Password</h1>
          <input type="text" name="password"
            className=' h-[6vw] md:h-full outline-none border-2 border-white bg-transparent 
          shadow-md shadow-white
                text-[4vw] md:text-[25px] w-[60vw] lg:w-[40vw] rounded-lg py-1 px-1 mb-4'
            value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button className='bg-green-400 h-[6vw] md:h-full text-[3vw] md:text-[25px]  cursor-pointer
                my-4 font-medium py-1 px-2 w-[60vw] lg:w-[40vw] rounded-xl items-center
                 justify-center shadow-md shadow-white  flex'>
            {loading ? 'Please wait...' : 'Login'}
          </button>
          <Link to={"/register"} className='h-[6vw] md:h-full text-[3vw] md:text-[25px]  cursor-pointer
               font-medium py-1 px-2 w-[60vw] lg:w-[40vw] rounded-xl items-center
               justify-center shadow-md shadow-white  flex my-8'>Don't have an Account, Register </Link>
        </form>

      </div>
    </div>

  )
}

export default Login