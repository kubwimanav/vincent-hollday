import React, { useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPlaneAlt , BiBarChart ,BiCalendar, BiSignal5 } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import { FaCampground } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";
import {PiAirplaneTiltBold} from 'react-icons/pi'
import { MdExpandMore,MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineLogout ,AiOutlineUserAdd} from "react-icons/ai";
import {ImUsers} from "react-icons/im";
import hero from '../../images/hero-imag.jpg'
import './Sidebar.css'
import { Link } from "react-router-dom";
import Camps from "./Camps";
import User from "./User";
import Places from "./Places";
import Esearch from "./Esearch";
function Sidebar() {


 

const handleLogout=()=>{
  localStorage.removeItem('loggedUser')
  window.location.href = '/'
}

const[modal, setModal] =useState(false);

  console.log(JSON.parse(localStorage.getItem("loggedUser")));
  return (
    <div className="dashhold">

{modal && <Esearch/>}

      <div className="dushboard_header1">
        <div className="image_sidebar">
          <div className="image_sidebar">
            <img src={hero} className="photodash" />
          </div>
          <div className="nameelisa">
            <b>{
               JSON.parse(localStorage.getItem("loggedUser"))?.email.split("@")[0]
              } </b>
            <p>
              {
                 JSON.parse(localStorage.getItem("loggedUser"))?.role
              }
            </p>
          </div>
        </div>
        <div className="sidebar_subholder">
          
            <li className="list_dash">
              <BiSignal5 />
              < Link to='c' className="list_dash">
                Dashboard
              </Link>
            </li>
            <li>
              <AiOutlineUserAdd /> <Link to="place" className="list_dash">Users</Link>
            </li>
            {/* <li>
              <MdOutlineLocationOn /> <Link to="book" className="list_dash">Place </Link>
            </li> */}
            <li>
              <PiAirplaneTiltBold /> <Link to="toure" className="list_dash">Tour</Link>
            </li>
            {/* <li>
              <CiCalendarDate  /> <a href="/" className="list_dash">Upcoming</a>
            </li> */}
            <li>
              <FaCampground  />
              <Link to="book" className="list_dash">Booking</Link>
            </li>
            {/* <li> */}
              {/* <BiCalendar  />
              <p className="list_dash" onClick={() => {
              setModal(!modal);
             }} > search</p>
            </li> */}
            <li>
              <BiBarChart /> <Link to="contact" className="list_dash">Contact Us</Link>
            </li>

            <li className="logout" onClick={handleLogout}>
              <AiOutlineLogout/> <p className="list_dash">Logout</p>

             

            </li>
      
          
        </div>
      </div>
    </div>
  );
}
export default Sidebar;