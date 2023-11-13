
import './About.css'
import imag from '../images/imagine.jpeg'
import image from '../images/download.jpeg'
function About () {
    return (
    <div className='about1'>
     <div className="photo-card">
      <img className="background-image" src={image}  alt="Background" />
      <img className="overlay-image" src={imag}  alt="Overlay" />
    </div>
     <div className='about-paragraph'> 
        <div className='about-paragraph1'> <p>About us</p></div>
        <div className='about-paragraph2'>
            <p>
            Plan Your Trip with Us
            </p>
            </div>
        <div className='orignal'>
            
        <p className='about-paragraph3'>
        Far far away, behind the word mountains,
         far from the countries Vokalia and Consonantia, 
         there live the blind texts. Separated they live
          in Bookmarksgrove right at the coast of the Semantics, 
          a large language ocean. A small river named Duden flows 
          by their place and supplies it with the necessary regelialia. 
          It is a paradisematic country, in which roasted parts of sentences 
          fly into your mouth. Even the all-powerful Pointing has no control
           about the blind texts it is an almost unorthographic. Italic Mountains,
            she had a last view back on the skyline
        </p>
        </div>
        <div>
            <button className='about-paragraph4'><b>READ MORE</b></button>
        </div>
     </div>
        </div>
    )
} export default About