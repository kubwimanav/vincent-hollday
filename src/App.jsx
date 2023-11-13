import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Footer from './assets/components/Foot'
import Search from './assets/components/search'
import About from './assets/components/About'
import Foot from './assets/components/Foot'
import Contact from './assets/components/Contact us'
import First from './assets/components/First'
import Tour from './assets/components/Tour'
import Login from './assets/components/Login'
import Single from './assets/components/Single'
import Dashboard from './assets/components/dashboard/Dashboard'
import User from './assets/components/dashboard/User'
import Camps from './assets/components/dashboard/Camps'
import Toure from './assets/components/dashboard/Toure'
import Places from './assets/components/dashboard/Places'
import SignupForm from './assets/components/SignupForm'
import Edit from './assets/components/dashboard/Edit'
import Home from './assets/components/Home'
import { AppContext } from './assets/contexts/ContextProvider'
import Calendar from './assets/components/dashboard/Calendar'
import Booking from './assets/components/dashboard/Booking'
import Protectedraute from './assets/components/dashboard/Protectedraute'
import Learn from './assets/components/dashboard/Learn'
// import Vincent from './assets/components/dashboard/vincent'
const Layout = () => {
  return (
    <>
      <header>
        <First />
      </header>
       <Outlet />
      <footer>
        <Foot />
      </footer>
    </>
  );
 };
function App() {
  const [count, setCount] = useState(0);
  return (
    <AppContext>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} /> 
          <Route path="/homepage" element={<Home/>} />
          <Route path="/contact_page" element={<Contact />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/about" element={<About />} />
          <Route path="/single/:_id" element={<Single />} />
          <Route path="/edit" element={<Edit />} />
        
        </Route>
       <Route path='learn'element={<Learn/>}/>
        <Route path="/login" element={<Login />} />
       <Route path="/sign" element={<SignupForm />} /> 
          <Route path="/dashboard" element={<Protectedraute >
          <Dashboard />  
          </Protectedraute>
          }>
           <Route index element={<Camps/>}/>  
          <Route path="/dashboard/users" element={<User/>} />
          <Route path="place" element={<Places/>} />
          <Route path="c" element={<Camps/>} />
          <Route path="contact" element={<Calendar/>} />
          <Route path="book" element={<Booking/>} />
          <Route path="toure" element={<Toure/>} />
        
             </Route>
        
      </Routes>
    </BrowserRouter>
    </AppContext>
   
  );
}
export default App;