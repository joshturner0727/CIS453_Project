import React, { Component } from "react";
import "./restaurants.css";
import NYAJ from "./NYAJ.jpg";
import DokKhao from "./DokKhao.jpg";
import ALF from "./ALF.jpg";
 
class Restaurants extends Component {
  render() {
    return (
    <div>
    <h2>Restaurants</h2>
    <div class="container">
    <div class="restaurant-card">
    <img class="restaurant-logo" src={DokKhao} alt="Dok Khao" />
      <div class="restaurant-details">
        <div class="restaurant-name">Dok Khao</div>
        <div class="restaurant-description">A local Thai restaurant serving the best Pad Thai in town</div>
      </div>
    </div>
    <div class="restaurant-card">
    <img class="restaurant-logo" src={ALF} alt="Aroma Latin Fusion" />
      <div class="restaurant-details">
        <div class="restaurant-name">Aroma Latin Fusion</div>
        <div class="restaurant-description">A quaint restaurant offering a delicious fusion of Latin and American cuisines</div>
      </div>
    </div>
    <div class="restaurant-card">
    <img class="restaurant-logo" src={NYAJ} alt="Not Your Average Joe's" />
      <div class="restaurant-details">
        <div class="restaurant-name">Not Your Average Joe's</div>
        <div class="restaurant-description">Not Your Average Joe's serves up classic American fare at an affordable price</div>
      </div>
    </div>
    </div>
    </div>
    );
  }
}
 
export default Restaurants;