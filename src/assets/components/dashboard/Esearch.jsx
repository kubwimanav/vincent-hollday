import React, { useState } from 'react'
import { MdCancel } from 'react-icons/md'
import { Link } from 'react-router-dom';
import './Esearch.css'

function Esearch({openModal}) {
    const [modal, setModal] =useState();
  return (
       <div className="esearch">
    {/* <div className="top">
       
       
        <MdCancel className="BOTH" onClick={()=> setModal(false)}/> 
       </div>   * */}
   

   
   <div class="esearh" onClick={openModal}>
       <Link to="C" className='topo'>Dashboard</Link>
       <Link to="place" className='topo'>Users</Link>
       <Link to="toure" className='topo'>Tour</Link>
       <Link to="book" className='topo'>Booking</Link>
       <Link to="contact" className='topo'>Contact Us</Link>
       
   </div>
       </div>
  )
}

export default Esearch