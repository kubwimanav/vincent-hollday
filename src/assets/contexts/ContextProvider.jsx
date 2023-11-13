import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../axiosClient";
const stateContext = createContext()

export const AppContext =({children})=>{
    const [tour, setTour] = useState([]);
    const [users, setUsers] = useState([]);
    const [contact, setContact] =useState([]);
    const [booking, setBooking] =useState([]);
    
  useEffect(() => {
    const  fetchtours = async () => {
      try{
        const response =  await axiosClient.get ('https://holiday-planner-4lnj.onrender.com/api/v1/tour/');
        console.log(response.data)
        setTour(response.data );

      } catch (err){
        if (err.response){
          console.log;(err.response.data);
          console.log;(err.response.status);
          console.log;(err.response.headers);
                } else{
                  console.log('error: ${err.message}');
                }


        }
      }
      fetchtours()

    
},[])

let tokenn = localStorage.getItem("token");
console.log(tokenn)
    useEffect(() => {
        const  fetchposts = async () => {
          try{
          const response =    await axiosClient.get ('https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/',{
              headers:{
                Authorization:"Bearer " + tokenn
              }
             });
            console.log(response.data)

            setUsers(response.data );
  
          } catch (err){
            if (err.response){
              console.log;(err.response.data);
              console.log;(err.response.status);
              console.log;(err.response.headers);
                    }
                     else{
                      console.log('error: ${err.message}');
                    }
  
  
            }
          }
          fetchposts()
  
        
    },[])




    useEffect(() => {
      const  fetchcontact = async () => {
        try{
        const response =    await axiosClient.get ('https://holiday-planner-4lnj.onrender.com/api/v1/contact',{
            headers:{
              Authorization:"Bearer " + tokenn
            }
           });
          console.log(response.data)

          setContact(response.data );

        } catch (err){
          if (err.response){
            console.log;(err.response.data);
            console.log;(err.response.status);
            console.log;(err.response.headers);
                  }
                   else{
                    console.log('error: ${err.message}');
                  }


          }
        }
        fetchcontact()

      
  },[])

  useEffect(() => {
    const  fetchbook = async () => {
      try{
      const response =    await axiosClient.get (`https://holiday-planner-4lnj.onrender.com/api/v1/booking/view`,{
          headers:{
            Authorization:"Bearer " + tokenn
          }
         });
        console.log(response.data)

        setBooking(response.data );

      } catch (err){
        if (err.response){
          console.log;(err.response.data);
          console.log;(err.response.status);
          console.log;(err.response.headers);
                }
                 else{
                  console.log('error: ${err.message}');
                }


        }
      }
      fetchbook()

    
},[])

    return(
        <stateContext.Provider value={{users,setUsers,tour,setTour,contact,setContact,booking,setBooking}}>
            {children}
        </stateContext.Provider>
    )
}


export const mycontext=()=>useContext(stateContext)