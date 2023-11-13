
import{BiCalendar} from "react-icons/bi"
import{BsFillTelephoneFill, BsFillFlagFill} from "react-icons/bs"
import{SlLocationPin} from "react-icons/sl"
import './Home.css'
import logo from '../images/logo-image.png';
import About from "./About";
import image from '../images/image-2.jpg'
import photo from '../images/images-3.jpg'
import phot from '../images/images-4.jpeg'

function Home () {

  const invoice=[
    {
      id:1,
      code:'Holiday Planners is a World Leading Online Tour Booking Platform',
      date:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...',
      name:'6 People',
      Duration: '2 days',
      amount:1200,
      country: 'ITALY',
      image:image
    },
    {
      id:2,
      code:'Holiday Planners is a World Leading Online Tour Booking Platform',
      date:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...',
      name:'15+ People',
      Duration: '6 days 3 hours',
      amount:2500,
      country: 'RWANDA',
      image: photo
    },
    {
      id:3,
      code:'Holiday Planners is a World Leading Online Tour Booking Platform',
      date:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...',
      name:'50+ People',
      Duration: '7 days 8 hours',
      amount:750,
      country: 'DRC CONGO',
      image: phot
  
      
    },]




    return(
          <div>
          <section className="home">
         <div className="paragraph">
          <p className="holiday"> Enjoy The Travel With</p>
          <p className="holida">Holiday Planners</p>
          <p className="hom">A bunch of grateful artists, entrepreneurs, non-for-profits, 
            marketers and creators from all 
            over the world use these photos to bring their storie</p>
           </div>
 
        <div className="data-filters">
        <div>
          <SlLocationPin className="icon" />
          <input type="text" placeholder="Where To?" class="filter-input" />
        </div>
        <div>
          < BiCalendar className="icon" />
          <select class="filter-select">
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
        <BsFillFlagFill class="icon" />
        <select class="filter-select">
          <option value="">Travel Type</option>
          <option value="">ADVENTURE</option>
          <option value="">HISTORICAL</option>
          <option value="">SEASIDE</option>
          <option value="">DISCOVERY</option>
        </select>
        </div>
        <button class="find-button">FIND NOW</button>
      </div>
        </section>
        <About/> 
        <section>
          <div className="homec">
      <h className="homecard">Amazing Tours</h>
      
    </div>
    <p className="homec">Trending, Best Selling Tours And Fun Destinations</p>
    <div className='Hometouristsse'>
        
        {invoice.map((invo)=>(
         <div className="card">
          <img src={invo.image}  />
           <button className='RWANDA'>{invo.country}</button>
           <div className="card-body">
             <h2>{invo.code}</h2>
             <p>{invo.date}</p>
             <div className='duration'>
             <div >
               <b>Duration</b>
               <p>{invo.Duration}</p>
             </div>
             <div>
               <b>Group Size</b>
               <p>{invo.name}</p>
             </div>
             </div>
             <div className='durationn'>
               <p>${invo.amount}</p>
               <button  class="find-buttonn">BOOK NOW</button>
             </div>
            </div>
            </div>
            ))}
     
        </div>
        </section>
    
        </div>
    )
} export default Home