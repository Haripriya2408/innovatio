import React from 'react'
import "./timetable.css"
import { Link } from 'react-router-dom'
const timetable = () => {
  return (
   <div className='tooo' id='schedule'>
   
    
    <div className="timeline">
      <div>
        <h1>
            <br/>
            
            TIMELINES🕐    
         
            <br/>
            <br/>
        </h1>
      </div>
    <ul>
      <li>
        <span>STAGE 1</span>
        <div className="content">
         
          <p>
          Submitting an abstract is the first stage. Participants are asked to submit their abstract of solution to the chosen problem statements in ppt or video format in this  
         <a href="https://forms.gle/KqdaLVFZunTnCyDLA"> link</a>  The flow diagrams are important in abstract. The abstract file's name should correspond to the team's name, and it should include the fundamental details such the problem statement's number and the names of each team member. The deadline to submit an abstract is April 3, 2023.
          </p>
        </div>
      </li>
      <li>
        <span>STAGE 2</span>
        <div className="content">
        
          <p>
          Announcement of Shortlisted teams after scrutiny will be on 4th April 2023.

          </p>
        </div>
      </li>
      <li>
        <span>STAGE 3</span>
        <div className="content">
       
         <p>
         The selected team will be called by our team to complete the registration. The registration fee is Rs.800/- per team. The participants will receive all the information via email.
         </p>
        </div>
      </li>
      <li>
        <span>STAGE 4</span>
        <div className="content">
          
          <p>
          Teams will come to our campus to take part in a 30-hour live hackathon in order to put their chosen solutions into a real time practise.
          </p>
        </div>
      </li>
    </ul>
  </div>
   </div>
  )
}

export default timetable