import React, { Children } from 'react'
import {Navigate} from 'react-router-dom'
function Protectedraute({children,user}) {
    let userpage= JSON.parse(localStorage.getItem('loggedUser'));
    let log= userpage?.role;
    user= log;
    // console.log('wertgythytgrvfcedxwserftgytgrfd',userpage)
    if (user=='admin'){
        return children;
    }
    else{
 return <Navigate to='/login'/>
    }

 
}

export default Protectedraute