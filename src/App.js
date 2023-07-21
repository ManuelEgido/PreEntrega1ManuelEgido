//import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar background={'transparent'} />
      <div>
      
        <Routes>
          <Route exact path="/" element = {<ItemListContainer/>} ></Route>
          <Route path="/productos" element = {<h1>aca estan los productos</h1>}></Route>
        </Routes>
        </div>
      
    </div>
    </Router>
  );
}

export default App;