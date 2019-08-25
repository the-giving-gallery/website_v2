import React from 'react';
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Gallery from "../Gallery/Gallery"



function Home() {
  return (
    <>

      <h3>This is home</h3>
      <div class="hero-image">
        <div class="hero-text">
          <h1>Getting Creative with Mental Health</h1>
          <Router>
            <Link to="/gallery">

              <button>Browse Art</button>
            </Link>
            <Route path="/gallery" component={Gallery} />
          </Router>
        </div>
      </div>
    </>
  );
}

export default Home;
