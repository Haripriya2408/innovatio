import React from 'react'
import "./timetable.css"
import { Link } from 'react-router-dom'
const timetable = () => {
  return (
   <div className='tooo' id='schedule'>
   
    
    <div className="timeline">
      <div>
        <h1>
          
            
            TIMELINES🕐    
         
      
        </h1>
      </div>
    <ul>
      <li>
        <h4>STAGE 1</h4>
        <div className="content">
         
          <h5>
          Submitting an abstract is the first stage. Participants are asked to submit their abstract of solution to the chosen problem statements in ppt or video format in this <a href="https://forms.gle/KqdaLVFZunTnCyDLA"> link</a>. The flow diagrams are important in abstract. The abstract file's name should correspond to the team's name, and it should include the fundamental details such the problem statement's number and the names of each team member. The deadline to submit an abstract is April 5, 2023.
          </h5>
        </div>
      </li>
      <li>
      <h4>STAGE 2</h4>
        <div className="content">
        
          <h5>
          Announcement of Shortlisted teams after scrutiny will be on 6th April 2023.
          All the participants will get the certificate

          </h5>
        
        </div>
      </li>
      <li>
      <h4>STAGE 3</h4>
        <div className="content">
       
         <h5>
         The selected team will be called by our team to complete the registration. The registration fee is Rs.800/- per team. The participants will receive all the information via email.
         </h5>
        </div>
      </li>
      <li>
        <h4>STAGE 4</h4>
        <div className="content">
          
          <h5>
          Teams will come to our campus to take part in a 30-hour live hackathon in order to put their chosen solutions into a real time practise.
        </h5>
        </div>
      </li>
    </ul>
  </div>
   </div>
  )
}

export default timetable