import React, { Component } from 'react';

const NavBar = ({totalCounters}) => { 
    return ( <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
    Total Number:  <span className="badge badge-pill badge-secondary">
      {totalCounters}
      </span>
      </a>
    </nav>
  </div> 
  );
  };
 
export default NavBar;