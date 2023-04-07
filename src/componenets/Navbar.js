import React, { Component } from 'react';

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
          <img src={SONA} alt=""/>
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




