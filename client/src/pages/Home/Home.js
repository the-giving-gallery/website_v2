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
          <h3 className="col-md-12 mt-5">Buy or sell art that supports mental health nonprofits.</h3>

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
        <h3>Recently Sold Artwork</h3>
        <div className="row">

          {SoldArt.map(
            image =>
              <div className="card border-0">
                <img src={image.url} alt="sold artwork" className="soldArt" key={image.id}></img>
                <p className="soldArtName">{image.name}</p>
                <span>
                  <p className="soldArtArtist">{image.artist}</p>
                  <p className="soldArtPrice">{image.price}</p>
                </span>

              </div>
          )}
        </div>
      </div>
      <div className="container">
        <hr></hr>
        <div className="row text-center">
          <h3 className="col-md-12">
            Hear from our artist advocates
          </h3>
        </div>
        <div className="row">
          <div className="col-md-6">
            <iframe title="youtube" width="560" height="315" src="https://www.youtube.com/embed/UHjyN5fhN0M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="col-md-6">
            <iframe title="youtube2" width="560" height="315" src="https://www.youtube.com/embed/nAUFzWNS7Zs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

        </div>
      </div>


    </>
  );
}

export default Home;
