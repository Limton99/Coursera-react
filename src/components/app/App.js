import React, {useState} from 'react';
import './App.css';
import Header from "../header";
import Main from "../main";
import Footer from "../footer";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from '../../redux/store';

const store = ConfigureStore();

function App() {


  return (
      <Provider store={store}>
          <Router>
            <div className="App">

                  <Header />
                  <Main />
                  <Footer />

            </div>
          </Router>
      </Provider>
  );
}

export default App;
