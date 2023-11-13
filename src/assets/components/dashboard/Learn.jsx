import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Learn() {

const [run,setRun]= useState({
  email: '',  
  name: '',  
  phone: '',
  message: '', 
})
const handlechange= (e)=>{
  const{name,value}=e.target;
  setRun({...run,[name]:value});
}
const postcontuct= async(e)=>{
  try{
     await axios.post('https://holiday-planner-4lnj.onrender.com/api/v1/contact/submit',run)
      alert('sent sucessfully')
    }
   
  
    catch (error){
      console.log(error.response)
      alert(error.message)
       }
}


  return (
    <div>
      <form action="post" onSubmit={postcontuct} >
        <div>
           <input type="email" name=' email' Value={run. email}
        onChange={handlechange} 
        /> 
        </div>
      <div>  <input type="text" name=' name' Value={run. name}
        onChange={handlechange} 
        /></div>
       <div>
         <input type="number" name=' phone' Value={run. phone}
        onChange={handlechange} 
        />
       </div>
        <div>
           <textarea type="text" name=' message' Value={run. message}
        onChange={handlechange} 
        /> 
        </div>
       <div>
        <button type='button'> submit</button>
         
       </div>
      </form>
    </div>
  )
}

export default Learn