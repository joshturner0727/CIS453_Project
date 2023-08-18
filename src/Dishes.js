import React, { Component } from "react";
import "./dishes.css";
import bacon from "./bacon.jpg";
import padthai from "./padthai.jpg";
 
class Dishes extends Component {
  render() {
    return (
      <div>
        <h2>Top Dishes</h2>
        <div class="container">
        <div class="dish-card">
        <img class= "dish-picture" src={padthai} alt="Pad Thai" />
          <div class="dish-details">
            <div class="dish-name">Pad Thai</div>
            <div class="dish-description">The Pad Thai from Dok Khao was voted the best dish in town by locals</div>
          </div>
        </div>
        <div class="dish-card">
        <img class="dish-picture" src={bacon} alt="Bacon Cheeseburger" />
          <div class="dish-details">
            <div class="dish-name">Bacon Cheeseburger</div>
            <div class="dish-description">Not Your Average Joe's Bacon Cheeseburger is juicy, tender, and full of flavor!</div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
 
export default Dishes;