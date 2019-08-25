import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// =====================================================
//  Components
// =====================================================
import NavBar from "./components/Navigation/NavBar"
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery"


function App() {
  return (

    <Router>
      <div>
        <NavBar></NavBar>
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route patt="/gallery" component={Gallery}/>
        </Switch>

      </div>
    </Router>


  );
}

export default App;
