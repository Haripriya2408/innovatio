import React from 'react'
import Heron from './Heron'
// import Navbar from './Navbar'
import ABOUT from "./About"
import TIME from "./timetable"
import PRICES from "./Prices"
import FLOW from "./flow"
import FOOTER from "./footer"
import "./home.css" 
const Home = () => {
  return (
    <div className='malar'>
     
     
    <Heron/> 
    <ABOUT/>
    <TIME/>
    <span>REWARDS</span>
    <PRICES/> 
    <FLOW/>
    <FOOTER/> 
{/*    
    
    
     

    <FLOW/>
     */}
    {/* <ABOUT/> 

     
    
    <THEMES/>
  
    
    <SCHEDULE/>
    <FOOTER/>  */}
    </div>
  )
}

export default Home