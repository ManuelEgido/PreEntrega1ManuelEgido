//import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar background={'transparent'}/>
      <ItemListContainer greetings="Greetings"/>
    </div>
  );
}

export default App;