import React, {useState} from 'react';
import './App.css';
import Header from "../header";
import Main from "../main";
import Footer from "../footer";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {


  return (
    <div className="App">
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
    </div>
  );
}

export default App;
