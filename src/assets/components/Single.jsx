import { useParams } from "react-router-dom";
import './Single.css'
import { invoice } from "./data";
import { mycontext } from "../contexts/ContextProvider";
import { useState } from "react";
import axios from "axios";
const Single = () => {
  const { _id } = useParams();
  const {tour}=mycontext()
  const tourList = tour?.find((invo) => invo._id === _id);
  console.log(tour);

  const { Price } = tourList;



  const [formData, setFormData] = useState({
    email: '',  
    fullname: '',  
    numberOfTickets: '',
    phone: '',
    paymentMethod: '',  
    tourID:_id,
    date:'',
    status:'',
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // const navigate= setNavigate[];
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{ console.log(formData)
      await axios.post ('https://holiday-planner-4lnj.onrender.com/api/v1/booking/create',
      formData,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      },
      
    });
      alert('booking succesfully')
    } 
 

  
 catch (error){
console.error('Booking error', error);
alert('Booking Failed')
 }
 

  };




  return (
    
      <section className="section-tourdetails">
        <div className="background-imag">
          <h1 className="name-indian" 
           
          
          > {Price}</h1>
        </div>


      <div className="tours-areas">
      <div className="detail-informationss">
        <div className="detail-information">
          <div class="info-button">Tour Plan</div>
          <div class="vertical-line"></div>
          <div class="info-button">Location</div>
          <div class="vertical-line"></div>
          <div class="info-button">Gallery</div>
          <div class="vertical-line"></div>
          <div class="info-button">Review</div>
        </div>

         <div className="tour-detailed">
            <div className="para23">
              <h1>
                {" "}
                A wonderful serenity has taken possession of my entire soul
              </h1>

              <div className="circle">
                <p>$12000</p>
                <p>Per person</p>
              </div>
            </div>
            <div className="planned-trip">
              <p class="trip-duration">2 days</p>
              <p class="trip-duration">6 People</p>
              <p class="trip-participants">18 </p>
              <p class="trip-destination">Greece</p>
              <p class="trip-destination"> Discovery</p>
            </div>
            <div className="trip-description">
              <p>
                {" "}
                I should be incapable of drawing a single stroke at the present
                moment; and yet I feel that I never was a greater artist than
                now. When, while the lovely valley teems with vapour around me,
                and the meridian sun strikes the upper surface of the
                impenetrable foliage of my trees, and but a few stray gleams.{" "}
              </p>
            </div>

            <table className="tablee">  
              <thead className="tablehead">
                <tr>
                  <th>Greece</th>
                  <th>LoremIpsum</th>
                </tr>
              </thead>
              <tbody className="tablebody">
                <tr>
                  <td>Destination</td>
                  <td>Greece</td>
                </tr>
                <tr>
                  <td>Departure</td>
                  <td>LoremIpsum</td>
                </tr>
                <tr>
                  <td>Departure Time</td>
                  <td>9:00am</td>
                </tr>
                <tr>
                  <td>Return Time</td>
                  <td>10:12pm</td>
                </tr>
                <tr>
                  <td>Dress Code</td>
                  <td>Light Jacket</td>
                </tr>
                <tr>
                  <td>Price Included</td>
                  <td>Well-styled columns</td>
                </tr>
              </tbody>
            </table>
          </div>
       </div>

       <div  className="side-forms">
          <form className="side-form1" onSubmit={handleSubmit}>
            <h6 className="titlees">BOOK THIS TOUR</h6>
            <div class="search-tour1">
              
              <input type="text" placeholder="tourid" required  name="tourID"
              
                value={formData.tourID}
            onChange={handleChange}
              />
            </div>
            <div class="search-tour1">
              
              <input type="text" placeholder="Full Name" required  name="fullname"
              
                value={formData.fullname}
            onChange={handleChange}
              />
            </div>
            <div class="search-tour1">
              <input type="email" placeholder="Email" name="email"
              
                   value={formData.email}
            onChange={handleChange}
              />
            </div>
            <div class="search-tour1">
              <input type="email" placeholder="Confirm Email" name="confirmEmail" 
                  value={formData.confirmEmail}
                  onChange={handleChange}/>
            </div>

            <div class="search-tour1">
              <input type="number" placeholder="phone" name="phone"
              
                   value={formData.phone}
            onChange={handleChange}
              />
            </div>

           

            <div class="search-tour1">
              <input type="number" placeholder="Number Of Tickets" name="numberOfTickets"
              
                   value={formData.numberOfTickets}
            onChange={handleChange}
               />
            </div>
            <div class="search-tour1">
              <input type="date" name="date"
              
                   value={formData.date}
            onChange={handleChange}
               />
            </div>
            <div class="search-tour1">
              <textarea type="text" placeholder="Message" name="paymentMethod"
                   value={formData.paymentMethod}
            onChange={handleChange}
              
              />
            </div>
            <div class="search-tour1">
              <input type="text" placeholder="status" name="status"
                     value={formData.status}
                     onChange={handleChange}
                 
              />
              
            </div>
            <button className="booksingle">BOOK NOW</button>
          </form>
          <div className="tour-mission2">
            <div className="mission-details">
              <h1>Why Book with us ?</h1>
              <p>Customer care available 24/7</p>
              <p>Free Travel Insurance </p>
              <p>Hand-picked Tours & Activitie</p>
            </div>
          </div>

          <div className="tour-mission3">
            <div className="">
              <h1>Get A Question ?</h1>
              <p>
                Do not hesitage to give us a call. We are an expert team and we
                are happy to talk to you
              </p>
              <p>holidayplanners@gmail.com </p>
              <p>+123 456 7890</p>
            </div>
          </div>
        </div>
      </div>

      


        
        
      </section>
    
  );
};

export default Single;