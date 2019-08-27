import React from 'react';
import { NavLink } from "react-router-dom";
import "./NavBar.css";




function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light container">
                {/* src='/utils/images/TGGLogo-monogram-inline-color-maroon-1.png' for img  */}
                <NavLink className="col-md-8" id="brand" to="/">The Giving Gallery</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/gallery">Gallery <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/signin">Sign In</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle active" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Partners</NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <NavLink className="dropdown-item" to="/partners/nonprofits">Non-Profits</NavLink>
                                <NavLink className="dropdown-item" to="/partners/artists">Artists</NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
