import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios';
import { url } from '../../../backendUrl/Backendurl';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/authSlice';
import Header from '../../Header/Header';
import p16 from '../../../image/p16.png'
import Footer from '../../Footer/Footer';

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
          headers: { "Content-Type": "application/json" }, withCredentials: true
        }
      );
      const res = data.data;
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
    <div className="min-h-screen flex flex-col bg-black relative overflow-hidden">
      {/* Animated Gradient Background */}
  

      <style>{`
        @keyframes gradient-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-bg {
          background-size: 200% 200%;
          animation: gradient-bg 15s ease infinite;
        }
      `}</style>
      
      <Header />
      <main className="flex-grow flex items-center justify-center relative z-10 my-10">
        <form 
          onSubmit={(e) => userlogin(e)}
          className="bg-gray-900 bg-opacity-80 backdrop-blur-xl p-10 rounded-3xl border border-indigo-500/50 shadow-2xl shadow-indigo-500/20 w-full max-w-md mx-4 transform transition-all "
        >
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-600 text-center mb-10 tracking-wide">
            Sign In
          </h1>
          
          <div className="mb-8 relative">
            <label className="block text-lg font-semibold text-gray-200 mb-3">Email</label>
            <div className="relative group">
              <input 
                type="email" 
                name="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
                className="w-full px-5 py-4 bg-gray-800/50 text-white rounded-xl border border-indigo-500/30 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/50 focus:outline-none transition-all duration-300 placeholder-gray-400 group-hover:shadow-lg group-hover:shadow-indigo-500/30"
                placeholder="Enter your email"
              />
          
            </div>
          </div>

          <div className="mb-10 relative">
            <label className="block text-lg font-semibold text-gray-200 mb-3">Password</label>
            <div className="relative group">
              <input 
                type="password" 
                name="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
                className="w-full px-5 py-4 bg-gray-800/50 text-white rounded-xl border border-indigo-500/30 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/50 focus:outline-none transition-all duration-300 placeholder-gray-400 group-hover:shadow-lg group-hover:shadow-indigo-500/30"
                placeholder="Enter your password"
              />
              
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-bold py-4 rounded-xl hover:from-indigo-700 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-6 w-6 mr-3 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </span>
            ) : (
              'Login'
            )}
          </button>

          <div className="mt-8 text-center">
            <Link 
              to="/register"
              className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors duration-300 hover:underline"
            >
              Don't have an account? Register
            </Link>
          </div>
        </form>
      </main>
      <Footer/>
    </div>
  )
}

export default Login