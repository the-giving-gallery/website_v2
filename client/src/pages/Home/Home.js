import React from 'react';
import "./index.css";
import { NavLink } from "react-router-dom";
import SoldArt from "../../ImageArray"



function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h1>Getting Creative with Mental Health</h1>
          <NavLink to="/gallery">
            <button className="btn bg-white" >Browse Art</button>
          </NavLink>
        </div>
      </div>
      <div id="callToAction" className="container">
        <div className="row text-center">
          <h2 className="col-md-12 mt-5">Buy or sell art that supports mental health nonprofits.</h2>

        </div>
        <div className="row text-center mt-5 mb-5">

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
        <hr ></hr>
        <div className="row text-left m-5">
          <p>The Giving Gallery is a free online platform for artists to sell their artwork and share their thoughts about mental health. Art sale proceeds are split between the artist and a partnered mental health nonprofit of the buyer's choice.</p>
        </div>
        <hr></hr>
      </div>
      <div className="container" id="soldArt">
        <h1>sold art</h1>
        {SoldArt.map(image => <img src={image.url} alt="sold artwork" className="soldArt" key={image.id}></img>)}
      </div>


    </>
  );
}

export default Home;
