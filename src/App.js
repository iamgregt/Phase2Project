import React from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import Home from './components/pages/Home.js'


function App() {
  return (
  <>
  <Router>
  <Navbar />
  <Switch>
    <Route path="/" exact element={<Home />} />
  </Switch>
  </Router>
  </>  
  );
}

export default App;
