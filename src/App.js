import React from 'react';
import About from './About/About';
//import Info from './info';
import './App.css';
import Home from './Home';
//import NavBar from './navBar';
import Services from './services/services';
import MarketPlace from './marketplace.js';
import Testinomial from './testinomial';
import FAQ from './Faq';
import Contact from './contact';
import Login from "./login";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import DashBoard from './DashBoard';
// import NavRough from './navRough';
//import Pp from './pp';

function App() {
  return (
    <>
    {/* <Pp/> */}
   <Router>
<Switch>
{/* <Route exact path="/" component={Pp}/> */}
{/* <Route exact path="/" component={NavRough}/> */}
<Route exact path="/" component={Home}/>
<Route path="/About" component={About}/>
<Route path="/services" component={Services}/>
<Route path="/marketplace" component={MarketPlace}  />
<Route exact path="/testinomial" component={Testinomial}/>
<Route path="/Faq" component={FAQ}/>
<Route path="/contact" component={Contact}/>
<Route path="/login" component={Login}/>
<Route path="/DashBoard" component={DashBoard}/>
<Redirect to="/" />
</Switch>
  </Router> 
    </>
  );
}

export default App;
