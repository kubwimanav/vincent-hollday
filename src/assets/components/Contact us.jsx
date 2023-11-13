import React, { Component, useState } from 'react';
import './Contact.css'
import { FaMailBulk, FaMailchimp, FaPeopleCarry, FaPhone, FaServicestack, FaVoicemail } from 'react-icons/fa';
import { MdEmail ,MdMedicalServices } from 'react-icons/md';
import { IoMdPerson } from 'react-icons/io'
import axios from 'axios';
function Contact () {




  const [formData, setFormData] = useState({
    email: '',  
    name: '',  
    phone: '',
    message: '',  
   
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
      <div >

          <div className='contactp'>
           <p >Contact Us</p>
           </div>
           <div className='contact'>


           <form action='post' onSubmit={handleSubmit}  className='form'>
            <div className='inputtt'>
                <div className='column'>
                    <IoMdPerson className='iconss'/>
                   <input type="text" placeholder="Full Name" className='contact-input'
                      name="name"
                     value={formData.name}
                     onChange={handleChange}
                   
                   /> 
                   <MdEmail className='iconss'/>
                  <input type="email" placeholder="Email" className='contact-input' 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  
                  />  
                </div>
             <div className='column'>
                <FaPhone className='iconss'/>
              <input type="number" placeholder="Phone"  className='contact-input'
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              />
               <MdMedicalServices className='iconss'/>
              <input type="text" placeholder="Services" className='contact-input'
              
             
              />    
             </div>
            
              <textarea placeholder="Message" className='contact-text' 
              name="message"
              value={formData.message}
              onChange={handleChange}
              
              />
             <button type="submit" className='contact-submit'>SUBMIT</button>

            </div>
        </form>
        <div className='contacts'>
          <div className='contact1 '>
        <b>WHY BOOK WITH US?</b>
        <div className='contact1-2'>
        <h>Best Price Guarantee</h>
        <h>Customer care available 24/7</h>
        <h>Free Travel Insureance</h>
        <h>Hand-picked Tours & Activities</h> 
        </div>
        </div>   

        <div className='contact2'>
       <b>GET A QUESTION?</b>
       <p>Do not hesitage to give us a call.<br/>
       We are an expert team and we are happy <br/>
       to talk to you.</p>
       <div className='contact2-1'>
        <h>holidayplanners@gmail.com</h>
        <h>+123 456 7890</h>
       </div>
       </div> 
        </div>




           </div>
        
       
      
      </div>
    );
  
}

export default Contact;