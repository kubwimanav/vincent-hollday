import{BsFacebook} from "react-icons/bs"
import{AiFillTwitterCircle, AiFillInstagram} from "react-icons/ai"
import {MdCancel} from "react-icons/md"

import './Search.css'
import white from '../images/white.png'
import { Link } from "react-router-dom"
function Search ({setModal}) {
    return(
        <div className="search">
     <div className="top">
        
        <img src={white} alt="Top Image" /> 
         <MdCancel className="BOTH" onClick={()=> setModal(false)}/> 
        </div>  
    

    
    <div class="navigation">
        <a href="/homepage">Home</a>
        <a href="/tour">Tour</a>
        <Link to="login">Login</Link>
        <a href="/contact_page">Contact Us</a>
    </div>


    <div class="social-media">
          <BsFacebook/>
           <AiFillInstagram />
           <AiFillTwitterCircle  />
    </div>
        </div>
    )
} export default Search