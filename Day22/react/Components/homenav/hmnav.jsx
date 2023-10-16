import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Github } from 'lucide-react'
import "./hmnav.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleClick1=()=>{
    localStorage.clear();
  }
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
         <div className="img">
            <img src="https://assets1.cleartax-cdn.com/cleartax-brand/logos/2018/01/pinchy_yellow_black.png"></img>
            </div>
            
            <i className="fas fa-code"></i>
          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
            
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/privacypolicy"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Privacy&Policy
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/AboutUs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                AboutUs
              </NavLink>
            </li>
           
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <div className="social-container">
                <NavLink to='https://www.facebook.com'>
                    <Facebook color="#004cff" />
                </NavLink>
                <NavLink to='https://www.instagram.com'>
                    <Instagram color="#ff0059" />
                </NavLink>
                <NavLink to='https://www.github.com'>
                    <Github color="#000000" />
                </NavLink>
            </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;