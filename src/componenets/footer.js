import React from 'react'
import "./footer.css"
import SONA from "../assets/sona.png"
import { Link } from 'react-router-dom'
import LINKLO from "../assets/Frame 8.png"
 function footer() {
  return (
    <div className='nul'>
    <div className="gpt3__footer section__padding" id="contact">
    

  
    <div>
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={SONA} alt="gpt3_logo" />
        <img src={LINKLO} className="ooo" alt="gpt3_logo" />
      </div>
      
      <div className="gpt3__footer-links_div">
      <h3> STUDENT COORDINATORS</h3>
        <h4>Haripriya V</h4>
        <p>6380122394</p>
        <h4>Kavipriya M</h4>
        <p>6382894559</p>
        <h4>Karthi Balaji S</h4>
        <p>9025870042</p>
        <h4>Gokula Krishnan V</h4>
        <p>7708202836</p>
        
      </div>
      <div className="gpt3__footer-links_div">
        <h3>STAFF COORDINATORS</h3>
        <h4>Dr.J Jayanthi</h4>
        <p>Professor CSE</p>
        <p>9894897069</p>
        <h4>S K Fathima </h4>
        <p> Assistent Professor CSE</p>
        <p>9629512991</p>
        <h4>K S Jayareka</h4>
        <p> Assistent Professor CSE</p>
        <p>99486309599</p>
     
      </div>
      <div className="gpt3__footer-links_div">
      <h3>CONTACT US</h3>
        
        <h4>LOCATION</h4>
        <p>Sona College Of Technology <br/>TPT main road<br/>suramangalam salem<br/>636005</p>
      
        <h4>MAIL</h4>
        <p>hackinnovatio@gmail.com</p>
      </div>
    </div> 
  
     <div className="gpt3__footer-copyright">
      <p>designed by team "INNOVATIO!"❤️</p>
    </div>
  </div>
  </div>
  </div>


 
  )
}
export default footer
