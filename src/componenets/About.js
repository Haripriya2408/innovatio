import React from 'react'
import { Link } from 'react-router-dom';
import "./About.css"
import Navbar from './Navbar';

 function About() {
  return (
    
    <div  className='asd' id='About'>
       
        <div className='ttt'>
        <span>ABOUT THE EVENT</span></div> 
        
   
    
     
     <div className='para'>
      
        <p>
        A <span>30 HOURS OF HACKATHON</span> competition for engineering students called Innovatio, which aims to find original, cutting-edge, and useful solutions to problems that actually exist in the real world. Teams of participants have a relatively short time to come up with an idea, design, build, and test a prototype. A solution to a problem, either for the general public or for a particular organisation, is what is intended to be produced. New technology learning, teamwork improvement, and networking with other participants could all be additional goals.
       
        <br/>
        <br/>
        
       
     </p>
     <div>
     <ul>
    <li>
    <h3>📅11-12 APRIL</h3>
  
    <h3>🖥️  SONA COLLEGE OF TECHNOLOGY</h3>
  </li>

</ul>
</div>
    
   
       
       <ul>
        <div className='nav-links-mob'>
        <Link to="https://docs.google.com/document/d/1GYEHmzbcLJZ9VNlPm82WYqOc4rf4zgXb_OI5DhliRkY/edit?usp=sharing">
          <div className='tt'>
     STATEMENTS
          </div></Link>
        </div>
       </ul>
        </div>
        </div>
       

  )
}
export default About;
