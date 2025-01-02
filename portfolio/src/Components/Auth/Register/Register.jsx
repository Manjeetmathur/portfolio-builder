import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../../../backendUrl/Backendurl";
import toast from 'react-hot-toast'
import Header from "../../Header/Header";
const Register = () => {
  const ref = useRef();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate()

  const register = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const data = await axios.post(
        `${url}/user/register`,
        { name, email, password, confirmPassword },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const res = data.data;
      console.log(res);
      if(res.success){
        toast.success(res.message);
        navigate("/login")
      }else{
        toast.error(res.message)
      }
    } catch (error) {
      toast.error(error.message)
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="">
      <Header/>
      <div className=" from-gray-800  via-[#1a237e] to-black h-[100vh] bg-gradient-to-b flex justify-center items-center m-auto">
      <form
        className=" text-white "
        onSubmit={(e) => register(e)}
      >
        <h1 className="text-[3vw] my-1 md:text-xl lg:text-2xl">Name</h1>
        <input
          type="text"
          name=""
          id=""
          className="h-[6vw] md:h-full outline-none border-2 border-white 
        bg-transparent shadow-md shadow-white
              text-[4vw] md:text-[25px] w-[60vw] lg:w-[40vw] rounded-lg py-1 px-1 mb-4"
          onChange={(e) => setName(e.target.value)}
          required
          value={name}
        />
        <h1 className="text-[3vw] my-1 md:text-xl lg:text-2xl">Email</h1>
        <input
          type="email"
          name=""
          id=""
          className="h-[6vw] md:h-full outline-none border-2 border-white 
        bg-transparent shadow-md shadow-white
              text-[4vw] md:text-[25px] w-[60vw] lg:w-[40vw] rounded-lg py-1 px-1 mb-4"
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email}
        />
        <h1 className="text-[3vw] my-1 md:text-xl lg:text-2xl">Password</h1>
        <input
          type="text"
          name=""
          id=""
          className=" h-[6vw] md:h-full outline-none border-2 border-white bg-transparent 
        shadow-md shadow-white
              text-[4vw] md:text-[25px] w-[60vw] lg:w-[40vw] rounded-lg py-1 px-1 mb-4"
          onChange={(e) => setPassword(e.target.value)}
          required
          value={password}
        />
        <h1 className="text-[3vw] my-1 md:text-xl lg:text-2xl">
          Confirm Password
        </h1>
        <input
          type="text"
          name=""
          id=""
          className=" h-[6vw] md:h-full outline-none border-2 border-white bg-transparent 
        shadow-md shadow-white
              text-[4vw] md:text-[25px] w-[60vw] lg:w-[40vw] rounded-lg py-1 px-1 mb-4"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          value={confirmPassword}
        />

        <button
          className="bg-green-400 h-[6vw] md:h-full text-[3vw] md:text-[25px]  cursor-pointer
              my-4 font-medium py-1 px-2 w-[60vw] lg:w-[40vw] rounded-xl items-center
               justify-center shadow-md shadow-white  flex"
        >
         {loading ? 'Plaese wait . . . ' :  'Register'}
        </button>
        <Link
          to={"/login"}
          className="h-[6vw] md:h-full text-[3vw] md:text-[25px]  cursor-pointer
              font-medium py-1 px-2 w-[60vw] lg:w-[40vw] rounded-xl items-center
               justify-center shadow-md shadow-white my-8 flex"
        >
          Don't have an Account, Login{" "}
        </Link>
      </form>

    </div>
    </div>
  );
};

export default Register;
