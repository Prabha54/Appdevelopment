import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleClick1 = () => {
    localStorage.clear();
  }
  return (
    <>
      <nav className="navbar flex w-full">
        <div className="nav-container flex justify-between">
          <div className="flex justify-start">
            <img className="h-10 w-40" src="https://assets1.cleartax-cdn.com/cleartax-brand/logos/2018/01/pinchy_yellow_black.png"></img>
          </div>
          <div>

            <i className="fas fa-code"></i>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">

              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/landing"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/feedback"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Feedback
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
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick1}
                >
                  LogOut
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;