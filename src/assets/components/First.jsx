import React, {useState} from "react";
import { FaEnvelope, FaInstagram,FaTwitter, } from "react-icons/fa";
import{BiLogoFacebook, BiSearch} from "react-icons/bi"
import{BsFillTelephoneFill} from "react-icons/bs"
import './First.css'
import logo from '../images/logo-image.png';
import Search from "./search";
import { Link } from "react-router-dom";
console.log(JSON.parse(localStorage.getItem("loggedUser")));
 function First() {


    const [modal, setModal] = useState(false);
    const token =JSON.parse(localStorage.getItem("loggedUser"))?.email.split("@")[0]


   const handlelogout= ()=>{
    localStorage.removeItem('loggedUser')
    window.location.reload()
   }


  return (

<section className="homee">
{modal && <Search />}
          <div className="page1">
            <div className="location">
             <p className="email"> <FaEnvelope className="per"/> hollidayplanners@gmail.com</p>
            <p className="email1"><BsFillTelephoneFill className="per"/> +250789466837</p>   
            </div>
            <div className="home-icons">
              <BiLogoFacebook className="FaFacebook"/>
              <FaInstagram className="FaFacebook"/>
              <FaTwitter/>  
            </div>
        </div>
        <div className="logo">
         <div className="logo-image">
         <img src={logo}  alt="logooo-image" className="logooo-image"/>
        </div>
          <div className="slider-nav">
            <button onClick={handlelogout} className="research-btn">{token?<p>logout</p>:(<Link to='login' className="logincc">login</Link>)}
            
            
            </button>
               <BiSearch className="search-image"/>
            <div className="hamburger-menu" 
             onClick={() => {
              setModal(!modal);
             }} >
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
         </div>
    
    </div>
    </section>
  )
} export default First
