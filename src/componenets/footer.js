import React from 'react'
import "./footer.css"
import SONA from "../assets/sona.png"
import { Link } from 'react-router-dom'
import LINKLO from "../assets/Frame 8.png"
 function footer() {
  return (
    <div className='nul'>
    <div className="gpt3__footer section__padding" id="contact">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text"></h1>
    </div>

  

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={SONA} alt="gpt3_logo" />
        <img src={LINKLO} className="ooo" alt="gpt3_logo" />
      </div>
      
      <div className="gpt3__footer-links_div">
      <h3> STUDENT COORDINATORS</h3>
        <h4>Haripriya Veluchamy</h4>
        <p>6380122394</p>
        <h4>M Kavipriya</h4>
        <p>9025870042</p>
        <h4>S Karthi Balaji</h4>
        <p>9025870042</p>
        <h4>V Gokula Krishnan</h4>
        <p>7708202836</p>
        
      </div>
      <div className="gpt3__footer-links_div">
        <h3>STAFF COORDINATORS</h3>
        <h4>Dr.J Jeyanthi</h4>
        <p>Professer CSE</p>
        <p>9894897069</p>
        <h4>S K Fathima </h4>
        <p> Assistent Professer CSE</p>
        <p>9629512991</p>
        <h4>K S Jayareka</h4>
        <p> Assistent Professer CSE</p>
        <p>99486309599</p>
     
      </div>
      <div className="gpt3__footer-links_div">
      <h3>CONTACT US</h3>
        
        <h4>LOCATION</h4>
        <p>sona college of technology <br/>TPT main road<br/>suramangalam salem</p>
      
        <h4>MAIL</h4>
        <p>innovatio.23threads@gmail.com</p>
      </div>
    </div>
  
    <div className="gpt3__footer-copyright">
      <p>designed by team "INNOVATIO!"❤️</p>
    </div>
  </div>
  </div>
 
  )
}
export default footer
