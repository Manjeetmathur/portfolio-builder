
import './App.css'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
function App() {
  
  const [loarder,setLoader] = useState(false)

  return (
    <div className=''>
      <Toaster/>
      <main>
        <Outlet>
        </Outlet>
      </main>
    </div>
  )
}

export default App
