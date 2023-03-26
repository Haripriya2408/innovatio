import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
 import "./Navbar.css"
 import SONA from "../assets/sona.png"
 import { Menuitem } from './Menuitem';
 class Navbar extends Component{
  state={clicked:false};
  handleclick=()=>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
    return(
      <nav className='NavbarItems'>
        <div className='navbar-logo'>
          <img src={SONA}/>
        </div>
        <div className='menu-icons' onClick={this.handleclick}>
        {/* <i class="fa-solid fa-bars-staggered"></i>
        <i class="fas fa-times"></i> */}
        <i className={this.state.clicked ?
        "fas fa-times":"fa-solid fa-bars-staggered"}></i>
        </div>
        <ul className={this.state.clicked? "nav-menu active":"nav-menu"}>

          {Menuitem.map((item,index)=>{
            return(

            <li key={index}>
            <a className={item.cName}
            href={item.url}>
            <i className={item.icon}></i>
            {item.title}</a>
          </li>
            )
          })}
          {/* <button>
            Register Now
          </button> */}

        </ul>

      </nav>
    )
  }
 }
 export default Navbar;




// import React, { useState } from 'react';
// import "./Navbar.css"
// import Back from "../assets/back.mp4"
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// const Navbar = () => {
//     const [toggleMenu, setToggleMenu] = useState(false);

//   return (
//     <div className='Mainnav'>
//         <div className='navlinks'>
//             <div className='forlogo'>
//                 {/* <img src={}></img> */}
//             </div>
//             <div className='link-contain'>
//             <p><a href="#About">ABOUT</a></p>
//           <p><a href="#Themes">THEMES</a></p>
//           <p><a href="#prices">PRICES</a></p>
//           <p><a href="#schedule">SCHEDULE</a></p>
//           <p><a href="#sponsors">SPONSORS</a></p>
//           <p><a href="#contact">CONTACT</a></p>
//             </div>
//             </div>
//             <div className="navbar-menu">
//             {toggleMenu
//         ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
//           : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
//         {toggleMenu && (
//         <div className="gpt3__navbar-menu_container scale-up-center">
//           <div className="navbar-menu_container-links">
//           <p><a href="#About">ABOUT</a></p>
//           <p><a href="#Themes">THEMES</a></p>
//           <p><a href="#prices">PRICES</a></p>
//           <p><a href="#schedule">SCHEDULE</a></p>
//           <p><a href="#sponsors">SPONSORS</a></p>
//           <p><a href="#contact">CONTACT</a></p>
//           </div>
//         </div>
//         )}
//       </div>
        
        
   
    
//     </div>

   
//   )
// }

// export default Navbar