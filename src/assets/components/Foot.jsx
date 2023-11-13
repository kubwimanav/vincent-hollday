import logo from '../images/white.png'
import log from '../images/logo.png'
import './Footer.css'
function Foot () {
    return(
        <div className='feet'>
        <div class="footer">
        <div className="footer-section">
         <img src={logo}  className='footerimage' />
         <p><b>Holiday Planners </b>sit amet consectetur adipisicing elit.<br/>
        Perferendis sapiente tenetur officiis explicabo fugit,<br/>
        sit mollitia eum atque excepturi quaerat autem.</p>
        <div className='email1'>
        <input type="email" className='mail' placeholder="Enter your email" />
        <button className='sub'>Subscribe</button>     
        </div>
        <div>

        </div>
     <img src={log} className='classn'  />
         </div>

       <div className='section1'>
        <p className='login '>
        Navigation
        </p>
        <div className='sect'>
        <ul className='section1ul'>
        <li><a href="#">  Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Destination</a></li>
        <li><a href="#">Tour</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#"> Contact us</a></li>

      </ul>
      </div>
      </div>

    <div className='section'>
    <p className='login'> Need Help ?</p>

    <div className='section-12'>
    <div className='section-13'>
          <p>Call Us</p>
          <p>+250789466837</p>
        </div>
      <div  className='section-13'>
        <p>Email for Us</p>
        <p>holidayplanners@gmail.com</p>
      </div>
      <div  className='section-13'>
        <p>Location</p>
        <p>Main Street, Victoria 8007.</p>
      </div>
         <div  className='section-13'>
        <p>Follow us</p>
        <div/>

    </div>
    </div>
        
        </div>
      </div>
      <div className='copy'>
            <p>Copyright © 2021 Geek Code Lab. All Rights Reserved.</p>
            <div className='copy1' >
            <h>Privacy Policy</h>
            <p>Terms of Use</p>
            <p> Cookie Policy</p>    
            </div>
            
        </div>
      

   </div>
    
    
    )
}

export default Foot