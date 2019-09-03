import React from "react";
import { NavLink } from "react-router-dom";
import './index.css'

export default function Footer() {
    return (
        <>
            <div className="container">
            <hr></hr>
                <div className="row">
                    <div className="col-sm">
                        <h5 className="footerHeader">
                            About Us
                        </h5>
                        <ul>
                            <li>
                                <NavLink className="navlink text-decoration-none" to="/about">
                                    <i class="fas fa-caret-right"></i> About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <h5 className="footerHeader">
                            Non-Profits
                        </h5>
                        <ul>
                            <li>
                                <NavLink className="navlink text-decoration-none" to="/partners/nonprofits">
                                    <i class="fas fa-caret-right"></i> Non-Profits
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <h5 className="footerHeader">
                            Artists
                        </h5>
                        <ul>
                            <li>
                                <NavLink className="navlink text-decoration-none" to="/partners/artists">
                                    <i class="fas fa-caret-right"></i> Artists
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="navlink text-decoration-none" to="/gallery">
                                    <i class="fas fa-caret-right"></i> Gallery
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <h5 className="footerHeader">
                            Resources
                        </h5>
                        <ul>
                            <li>
                                <NavLink className="navlink text-decoration-none" to="/">
                                    <i class="fas fa-caret-right"></i> How-To Sell Art
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="navlink text-decoration-none" to="/">
                                    <i class="fas fa-caret-right"></i> Artist Tools
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="navlink text-decoration-none" to="/">
                                    <i class="fas fa-caret-right"></i> Artist Terms of Service
                                </NavLink>
                            </li>  <li>
                                <NavLink className="navlink text-decoration-none" to="/">
                                    <i class="fas fa-caret-right"></i> Purchaser Terms of Service
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <h5 className="footerHeader">
                            Follow Us!
                         </h5>
                        <a href="https://www.facebook.com/thegivinggallery/" target="_blank" rel="noopener noreferrer">
                            <i class="footerFab fab fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/thegivinggallery/" target="_blank" rel="noopener noreferrer">
                            <i class="footerFab fab fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com/givinggallery" target="_blank" rel="noopener noreferrer">
                            <i class="footerFab fab fa-twitter"></i>
                        </a>
                        <div>
                            <label id="joinHeader" for="join">Join Our Newsletter</label>
                            <input id="join"></input>
                            <button class="btn m-2" type="submit" value="Submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}