import React from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import Home from './components/pages/Home.js'
import Services from './components/pages/Services';
import GetAQuote from './components/pages/GetAQuote';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import MapPage from './components/pages/MapPage';


function App() {
  return (
  <>
  <Router>
  <Navbar />

  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/services" exact component={Services} />
    <Route path="/products" exact component={GetAQuote} />
    <Route path="/sign-up" exact component={SignUp} />
    <Route path="/map-page" exact component={MapPage}/>
  </Switch>
    <Footer />
  </Router>
  </>  
  );
}

export default App;
