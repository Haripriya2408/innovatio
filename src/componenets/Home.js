import React from 'react'
import Heron from './Heron'
import Navbar from './Navbar'
import ABOUT from "./About"
import TIME from "./timetable"
import PRICES from "./Prices"
import FLOW from "./flow"
import FOOTER from "./footer"
import "./home.css" 
const Home = () => {
  return (
    <div className='malar'>
     
     <Navbar/>
    <Heron/> 
   
   
    <ABOUT/>
    <TIME/>
    <h2>REWARDS</h2> 
    <PRICES/> 
    <FLOW/>
    <FOOTER/> 
    {/* <ABOUT/> 

     
    
    <THEMES/>
  
    
    <SCHEDULE/>
    <FOOTER/>  */}
    </div>
  )
}

export default Home