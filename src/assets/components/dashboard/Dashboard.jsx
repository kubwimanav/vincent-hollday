import React, { useState } from 'react'
import Toure from './Toure'
import Header from './Sidebar'
import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from './Header'

import './Upcoming.css'

function Dashboard() {


if(!localStorage.getItem('loggedUser')){
  return <Navigate to='/' />
}






  return (
    <div className='dashboard'>
       <div className='nav'>
          <Header/>  
         </div>
    
      <div>
      
      <div className='asider'>
      <Sidebar/>  
      </div>
      
       <div>
       <Outlet className="outlet"/>  
       </div>
       
      </div>
    
              
      
    </div>
  )
}

export default Dashboard