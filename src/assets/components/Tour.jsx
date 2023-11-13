import React, { useState } from 'react'
import './Tour.css'

import { Link } from 'react-router-dom'
import { invoice } from './data'
import { mycontext } from '../contexts/ContextProvider'
import axios from 'axios'
 function Tour() {
const {tour}=mycontext()


const [formData, setFormData] = useState({
  email: '',  
  name: '',  
  phone: '',
  message: '', 
  Title:'', 
 
});
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try{ console.log(formData)
    await axios.post ('https://holiday-planner-4lnj.onrender.com/api/v1/contact/submit',formData);
    alert('sent sucessfully')
  } 

  catch (error){
    console.log(error.response)
    alert(error.message)
     }
     
    
      };





  return (
    <div>
        <div className='tour'>
        <p>Tour List</p>
       </div> 


      <div className='tourists'>
        <div className='tourists55'>
          <div className='Sort1'>
            <input type='name' placeholder='Sort By:'className='Sort'/>
          <select class="SortA">
            <option value="">Release Date</option>
            <option value="January">Release Date</option>
            <option value="February">Tour Date</option>
            <option value="March">Title</option>
            <option value="April">  Price</option>
            <option value="May">Popularity</option>
            <option value="June">Rating</option>
            <option value="July">Duration</option>
            
          </select>
          <select class="SortA">
            <option value="">Descending</option>
            <option value="February">Ascending</option>
            
          </select>
          </div>
        <div className='touristsse'>
        
        {tour.map((invo)=>(
         <div className="card">
          <img src={invo.backdropImage}  />
           <button className='RWANDA'>{invo.destination}</button>
           <div className="card-body">
             <h2 >{invo.Title}</h2>
             <p className='tourdiscription'>{invo.Description}</p>
             <div className='duration'>
             <div >
               <b>Duration</b>
               <p>{invo.Duration}</p>
             </div>
             <div>
               <b>Group Size</b>
               <p>{invo.GroupSize}</p>
             </div>
             </div>
             <div className='durationn'>
               <p>${invo.Price}</p>
               <Link to={`/single/${invo._id}`} class="find-buttonnn">BOOK NOW</Link>
             </div>
            </div>
            </div>
            ))}
     
        </div>
        </div>
     


        <div className='tourists22'>
        <form action="post" onSubmit={handleSubmit}>
        <div className='card2'>
         <p>FIND YOUR TOUR</p>
         
         <div>
          <input type="text" placeholder="WHERE TO?" class="filterinput" />
        </div>
        <div>
          <input type="text" placeholder="WHERE TO?" class="filterinput" />
        </div>
        <div>
          
          <select class="filterselect">
            <option value="">When?</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div>
        <label>
         <b>Duration</b>
        </label>
        <select class="filterselect">
          <option value="">Travel Type</option>
          <option value="">ADVENTURE</option>
          <option value="">HISTORICAL</option>
          <option value="">SEASIDE</option>
          <option value="">DISCOVERY</option>
        </select>
        </div>
        <div className='number'>
          <input type="number" className='number-1' />
          <input type="number" className='number-1'/>
        </div>
        <div className='sects'>
    
          <div class="checkbox">
            <input type="checkbox" id="cultural" />
            <label for="cultural">Cultural</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="adventure" />
            <label for="adventure">Adventure</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="historical" />
            <label for="historical">Historical</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="seaside" />
            <label for="seaside">Seaside</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="discovery" />
            <label for="discovery">Discovery</label>
          </div>
      </div>

        <button class="findbutton">FIND NOW</button>
      </div>
           <div className='TOURLIST123' >

          
             <div className='TOURLIST '>
        <b>WHY BOOK WITH US?</b>
        <div className='TOURLIST1'>
        <h>Best Price Guarantee</h>
        <h>Customer care available 24/7</h>
        <h>Free Travel Insureance</h>
        <h>Hand-picked Tours & Activities</h> 
        </div>
        </div>   
    
        <div className='TOURLIST2'>
       <b>GET A QUESTION?</b>
       <p>Do not hesitage to give us a call.<br/>
       We are an expert team and we are happy 
       to talk to you.</p>
       <div className='TOURLIST2-1'>
        <h>holidayplanners@gmail.com</h>
        <h>+123 456 7890</h>
       </div>
       
              
             </div>
               
           </div>
           </form> 
           </div>
        





      </div>
   
     
         </div>

        






      





      

  
   
  )
}export default Tour
