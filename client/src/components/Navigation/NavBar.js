import React from 'react';
import { NavLink } from "react-router-dom";
import "./NavBar.css";




function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light container">
                <div className="col-md-7">

                    <NavLink id="brand" to="/">The Giving Gallery</NavLink>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav" id="listMain">
                        <li className="nav-item  active">
                            <NavLink className="nav-link navList" to="/gallery">Gallery <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link navList active" to="/partners/nonprofits">Non-Profits</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link navList active" to="/partners/artists">Artists</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link navList active" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link navList active" to="/signin">Sign In</NavLink>
                        </li>
                    </ul>
                    <ul id="socialList">
                    <li>
                        <a href="https://www.facebook.com/thegivinggallery/" target="_blank" rel="noopener noreferrer">
                            <i className="navFab fab fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/thegivinggallery/" target="_blank" rel="noopener noreferrer">
                            <i className="navFab fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/givinggallery" target="_blank" rel="noopener noreferrer">
                            <i className="navFab fab fa-twitter"></i>
                        </a>
                    </li>
                </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
