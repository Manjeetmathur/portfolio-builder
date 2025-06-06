import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { url } from '../backendUrl/Backendurl'
import { setStatus } from '../store/authSlice'
import toast from 'react-hot-toast'

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { status } = useSelector(st => st.auth)
  const [st, setSt] = useState(true);
  const fetch = async () => {
    const fetchStatus = await axios.get(`${url}/user/user-status-info`,{
      withCredentials:true,
      withXSRFToken:true

    })
    if (!fetchStatus.data.status) {
        toast.error("Session expired login again")
        dispatch(setStatus())
      navigate("/login")

    }
  }
  useEffect(() => {
    fetch()
    if (!status) {
      navigate("/login")
    }

  }, [])
  return (
    <div>
      {children}
    </div>
  )
}

export default ProtectedRoutes
