import React from "react";
import { NavLink } from "react-router-dom";
import './index.css'

export default function Footer() {
    return (
        <>
            <div className="container">
                <hr></hr>
                <div className="row">
                    <div className="column">
                        <h5 className="footerHeader">
                            About Us
                        </h5>
                        <ul>
                            <li>
                                <NavLink to="/about">
                                    <span>About</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="column">
                        <h5 className="footerHeader">
                            Non-Profits
                        </h5>
                    </div>
                    <div className="column">
                        <h5 className="footerHeader">
                            Artists
                        </h5>
                    </div>
                    <div className="column">
                        <h5 className="footerHeader">
                            Resources
                        </h5>
                    </div>
                    <div className="column">
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
                            <button type="submit" value="Submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}