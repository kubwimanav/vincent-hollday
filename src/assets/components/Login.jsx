import {React,  useContext,  useState } from 'react';
import {FaFacebookF ,FaGoogle} from 'react-icons/fa'
import {FcGoogle } from 'react-icons/fc'
import login from '../images/carton.png'
import './Login.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';
 function Login() {
  const [formData, setFormData] = useState({
    email: '',  
    password: '', 
    
  });
  
  const [isEditModalOpen,setEditModalOpen]=useState(false);
  
  const handleEditclick= () => {
 setEditModalOpen((previsEditModal) =>!previsEditModal)
  };
  const [open, setOpen] = useState(false);
  function openForm() {
    setOpen((prevOpen) => !prevOpen);
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, });
  };
 const navigate =useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{ console.log(formData)
   const res =    await axios.post ('https://holiday-planner-4lnj.onrender.com/api/v1/auth/login',formData)
alert('login sucessfully')
localStorage.setItem("token",res.data.access_token)
localStorage.setItem("loggedUser",JSON.stringify(res.data.user) )
if(res.data.user.role =='admin'){
  navigate('/dashboard')
}
else{
  navigate('/')
}


 console.log(res.data);
    } 

 catch (error){
console.log(error.response)
alert(error.response.data.message)
 }
 

  };
  return (

<div className="logincontainer">
    
      <div className="login-form">
        <h2>Login</h2>
        <p>Does not have any account yet?   <Link to='/sign'  className='sinin' > sign up</Link>
        </p>
        <form onSubmit={handleSubmit} action="post">
        <div className="form-group">
          <label htmlFor="username"><b>Email Address</b></label>
          <input type="text" id="username" name='email' placeholder="Your@example.com" required className='logininput'
          value={formData.email}
          onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className='loginpassword'><b>Password </b> <a href='#'>Forget My Password?</a></label> 
          <input type="password" id="password" name='password' placeholder="Enter 6 chracter or more" required className='logininput'
          value={formData.password}
          onChange={handleChange}
          />
        </div>
          <div>
          <div>
              <input
                type="checkbox"
                value="Remember Me"
                name="Remember Me"
                className="contact_re"
                
              />
              Remember Me
            </div> 
          </div>
          
      
        <div>
        <button type='submit' className="login-btn">Login</button> 
        </div>
        </form>
        <div className="social-buttons">
      <button className="google-button">
        <FcGoogle /> Google
      </button>
      <button className="facebook-button">
        <FaFacebookF /> Facebook
      </button>
      </div>
      </div>
  
<div className='loginimage'>
</div>
    </div>

  
    

  )
} export default Login
