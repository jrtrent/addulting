import React from "react";
import "./Nav.css";


const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="/about">About</a>
            </li>
        </ul>
        
    </nav>
);




export default Nav;
