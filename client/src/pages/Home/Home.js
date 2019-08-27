import React from 'react';
import "./index.css";
// import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import Gallery from "../Gallery/Gallery"



function Home() {
  return (
    <>
      <div class="hero">
        <div class="hero-text">
          <h1>Getting Creative with Mental Health</h1>
          <NavLink to="/gallery">
            <button className="btn bg-white" >Browse Art</button>
          </NavLink>
        </div>
      </div>
      <div id="callToAction" className="container">
        <div className="row text-center">
          <h2 className="col-md-12">Buy art or sell art that supports mental health nonprofits.</h2>

        </div>
        <div className="row text-center m-4">

          <NavLink to="/gallery" className="col-md-4 actionBtn">
            <button className="btn bg-white actionBtn" >Browse Art</button>
          </NavLink>
          <NavLink to="/gallery" className="col-md-4 actionBtn">
            <button className="btn bg-white actionBtn" >Sell Art</button>
          </NavLink>
          <NavLink to="/gallery" className="col-md-4 actionBtn">
            <button className="btn bg-white actionBtn" >Partner</button>
          </NavLink>
        </div>
      </div>


    </>
  );
}

export default Home;
