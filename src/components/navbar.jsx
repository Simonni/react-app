import React, { Component } from 'react';

const NavBar = (props) => { 
    return ( <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
      Navbar <span className="badge badge-pill badge-secondary">
      {props.totalCounters}
      </span>
      </a>
    </nav>
  </div> 
  );
  };
 
export default NavBar;