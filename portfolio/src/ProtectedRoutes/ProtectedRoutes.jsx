import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
       const navigate = useNavigate()
       const {status} = useSelector(st => st.auth)
       useEffect(()=>{
              if(!status){
                     navigate("/login")
              }
       },[])
  return (
    <div>
      {children}
    </div>
  )
}

export default ProtectedRoutes
