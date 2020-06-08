import React, {useState} from 'react';
import './App.css';
import Header from "../header";
import Menu from "../menu";
import {DISHES} from "../../shared/dishes";

function App() {
    const [dishes, setState] = useState(DISHES);


  return (
    <div className="App">
      <Header />
      <Menu dishes={dishes}/>
    </div>
  );
}

export default App;
