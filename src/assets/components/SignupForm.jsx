import React, { useState } from 'react';
import './SignupForm.css'
import log from '../images/LoginPage.jpg'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
function SignupForm () {
  const [formData, setFormData] = useState({
    email: '',  
    fullName: '',  
    password: '', 
    role: '',
    phone : '',
    location: '',  
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // const navigate= setNavigate[];
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{ console.log(formData)
      await axios.post ('https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup',formData);
      window.location.href="/login"
    } 
  // Navigate('/login')

  
 catch (error){
console.log(error.response)
alert(error.response.data.message)
 }
 

  };


  return (
    <div className='signup'>
      <div className='signupform'>
      <h2 className='signuph2'>Sign Up</h2>
      <form  action='post' onSubmit={handleSubmit}>
        <div>
          <label className='signuplabel'>fullName:</label>
          <input className='signupinput'
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className='signuplabel'>Email:</label>
          <input className='signupinput'
            placeholder="example@gmail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className='signuplabel'>Password:</label>
          <input className='signupinput'
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className='signuplabel'>phone:</label>
          <input className='signupinput'
            type="phone"
            // value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className='signuplabel'>role:</label>
          <input className='signupinput'
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          />
        </div>


        <div>
          <label className='signuplabel'>location:</label>
          <input className='signupinput'
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>



        <button className='signupbutton'  type="submit">Sign Up</button>
      </form>
      </div>
      <div className='loginimage'>
        <img src={log}/>
    </div>
    </div>
   
  );
}

export default SignupForm;