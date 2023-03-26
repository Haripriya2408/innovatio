import React from 'react'
import Back from "../assets/back.mp4"
import "./hero.css"

import { Link } from 'react-router-dom'
 function Heron() {
  return (
    <>
    <div className='hero'>
        <div>
      
    <video id='myVideo' autoPlay loop muted>
   
    <source src={Back} type='video/mp4' />
     </video>
     <div className='text-box'>
  <li><Link to="https://forms.gle/KqdaLVFZunTnCyDLA">Register Now </Link></li>
     </div>
     </div>
  
     <div className='hero-text'>

    </div>
     </div>
    </>
  )
}
export default Heron;
