import React, { Component } from "react";
import {
  Route, Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Restaurants from "./Restaurants";
import Dishes from "./Dishes";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Explore Manassas</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/restaurants">Restaurants</NavLink></li>
            <li><NavLink to="/dishes">Dishes</NavLink></li>
          </ul>
          <div className="content">
          <Routes> 
            <Route path="/" element={<Home />}/>
            <Route path="/restaurants" element={<Restaurants />}/>
            <Route path="/dishes" element={<Dishes />}/>
          </Routes>   
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;