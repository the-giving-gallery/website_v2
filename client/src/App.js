import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// =====================================================
//  Components
// =====================================================
import NavBar from "./components/Navigation/NavBar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery"
import NonProfits from './pages/Partners/NonProfits';
import Artists from "./pages/Partners/Artists";


function App() {
  return (

    <Router>
      <div>
        <NavBar></NavBar>
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery}/>
          <Route path="/partners/nonprofits" component={NonProfits}/>
          <Route path="/partners/artists" component={Artists}/>

        </Switch>

      </div>
      <Footer></Footer>
    </Router>


  );
}

export default App;
