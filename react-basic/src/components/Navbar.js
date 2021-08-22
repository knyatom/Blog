// eslint-disable-next-line
import React from 'react';
// import {Link, NavLink   } from "react-router-dom";
import {NavLink   } from "react-router-dom";
const Navbar = () => {
  return (    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <span className="navbar-brand">Navbar</span>
            <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink 
                    className="nav-link"  
                    exact to="/"
                    activeClassName="active"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                      }}
                    >Home</NavLink>
                    </li>
                    <li className="nav-item"> 
                     <NavLink className="nav-link" 
                     exact to="/movies"
                     activeClassName="active"
                     activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                      }}
                     >Movies</NavLink>   
                    </li>
                    <li className="nav-item dropdown">
                    <NavLink className="nav-link" 
                    exact to="/users" 
                    activeClassName="active"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                      }}
                    > Users </NavLink>                   
                    </li>                    
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
    </div>
    </nav>    
  );
};

export default Navbar;