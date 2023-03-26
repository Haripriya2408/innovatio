import React from 'react'
import { Link } from 'react-router-dom';
import "./About.css"

 function About() {
  return (
    <div  className='asd' id='About'>
       <div className='ttt'>
            ABOUT THE EVENT
        </div>
    
     
     <div className='para'>
      
        <p>
        Innovatio is a hackathon competition for engineering students, its objective is to develop creative,innovative and practical solutions to real-world problems.Participants work in teams to brainstorm, design, build and test a prototype, often in a very short period of time.The goal is to create something that can be used to solve a problem, either for a specific organization or for the general public.Other objectives may include learning new technologies, developing teamwork, and networking with other participants.
       
        <br/>
        <br/>
        
       
     </p>
     <div>
     <ul>
    <li>
    <h4>📅      11-12 APRIL</h4>
  
    <h4>🖥️  SONA COLLEGE OF TECHNOLOGY</h4>
  </li>

</ul>
</div>
    
   
       
       <ul>
        <div className='nav-links-mob'>
        <Link to="https://docs.google.com/document/d/1jnyF-LfYk2kL_myYiupQR15Z5ZbweSN_jxcrL-HBPQI/edit?usp=sharing">
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
