import React, { Component } from "react";
import plaza from "./plaza.jpg";
 
class Home extends Component {
  render() {
    return (
      <div>
        <img class ="plaza" src={plaza} alt="Plaza" />
        <h2>Welcome to Explore Manassas!</h2>
        <p>At Explore Manassas, we are not just a website; we are your culinary compass, 
          guiding you through the rich dining landscape of our community.</p>
 
        <h3>Unveiling Culinary Gems:</h3>
        <p>Step into a world of delectable possibilities as we unveil a curated selection of local restaurants that are 
          redefining the art of dining. From charming cafes tucked away in cobblestone alleys 
          to elegant eateries with breathtaking cityscape views, we bring you the finest dining 
          establishments that our town has to offer.</p>

        <h3>Top Dishes that Captivate:</h3>  
        <p>Discover the pulse of each restaurant as we present their top dishes that have captured
           the hearts of locals and visitors alike. Our spotlight on these culinary creations 
           not only showcases the mastery of the chefs but also provides a sensory experience 
           that transcends the screen, igniting your cravings and inspiring your next culinary
            escapade.</p>
      </div>
    );
  }
}
 
export default Home;