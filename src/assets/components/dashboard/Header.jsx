import React, { useState } from 'react'
import {CiDark} from 'react-icons/ci'
import {LuSettings } from 'react-icons/lu'
import {FiSun} from 'react-icons/fi'
import hero from '../../images/hero-imag.jpg'
import './Header.css'
import { Link } from 'react-router-dom'
import Edit from './Edit'
import User from './User'

import { BiCalendar } from 'react-icons/bi'
import Esearch from './Esearch'
function Header() {




    const [isEditModalOpen,setEditModalOpen]=useState(false);



    const handleEditclick= () => {
        setEditModalOpen((previsEditModal) =>!previsEditModal)
         };

    const [open, setOpen] = useState(false);
    function openForm() {
     
      setOpen((prevOpen) => !prevOpen);
    }




    console.log(JSON.parse(localStorage.getItem("loggedUser")));


  const [modal, setModal] =useState (false)
  function openModal(){
    setModal(!modal)
  }

  return (
    
        <div className='sidebar'>
           <div className="image_sidebara">
            <img src={hero} className="photodasha" />
            <b>{
               JSON.parse(localStorage.getItem("loggedUser"))?.email.split("@")[0]
              } </b>
          </div>
          {modal && <Esearch openModal={openModal} />}
            <p className='hello' >
                hello, {
               JSON.parse(localStorage.getItem("loggedUser"))?.email
              }
            </p>
            <div className=' sidebar-icon'>
                <LuSettings className='sidebar-icons1'/>
                <div className=' sidebar-icon1'>
                <FiSun className='sidebar-icons'/> 
                    <p>Dark Mode</p>
                    <CiDark className='sidebar-icons1'/>


                    <div className="hamburger-menu" 
             onClick={openModal
             } > 
            <div class="ba"></div>
            <div class="ba"></div>
            <div class="ba"></div>
            </div>

                </div>
               
                


           


            </div>
            

      


               
            
        </div>

    
  )
}

export default Header