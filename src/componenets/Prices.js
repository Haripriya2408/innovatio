import React from 'react'
import "./prices.css"
import TOP from "../assets/bg-pattern-card.svg"
import CERTIFICATE from "../assets/certi.jpg"
import  GUEST from "../assets/guest.jpg"
import TROPHY from "../assets/win.jpg"
import BAG from "../assets/bagprice.jpeg"

function Prices() {
  return (
   
       <div className='man' id='prices'>
   
        <div>
       
<div class="box">
      <div className="card">
        <div className="imgBx">
            <img src={TROPHY} alt="images"/>
        </div>
        <div className="details">
            <h3>#PRICES<br/><span>30000 WORTH</span></h3>
        </div>
      </div>
    
       <div className="card">
         <div className="imgBx">
         <img src={CERTIFICATE} alt="images"/>
         </div>
         <div className="details">
            <h3>#CERTIFICATE<br/><span>FOR PARTICIPANTS</span></h3>
          </div>
       </div>

       <div className="card">
         <div className="imgBx">
         <img src={GUEST} alt="images"/>
         </div>
         <div className="details">
            <h3>#EXPLORE<br/><span>INTERACT WITH INDUSTRY PEOPLE</span></h3>
          </div>
       </div>
 
  </div>
       </div>
       </div>

    
  )
}

export default Prices