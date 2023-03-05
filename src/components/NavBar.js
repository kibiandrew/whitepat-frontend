import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {


  return (
    <header className="navcontainer">
  <div className="my-app">
  <h2><span className="title">SHARE THE HAPPINESS</span> Application</h2>
  </div>
  <div className="links">
  <NavLink
  to="/:id/:username/:role"
  exact="true"
  >
    <li>Home</li>
  </NavLink>

  <NavLink
  to="/about"
  exact="true"
  >
    <li>About</li>
  </NavLink>

  <NavLink
  to="/"
  exact="true"
  >
   <li>Logout</li> 
  </NavLink>
  </div>

</header>

  );
};

export default NavBar;
