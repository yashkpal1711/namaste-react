import React from "react";
import {data} from "../Config";
import RestaurantCard from "./RestaurantCard";

const RestaurantCardContainer = () => (
  <div className="restaurantCardContainer">
    {data.map((cardData) => {
      return <RestaurantCard {...cardData} key={cardData.stars} />;
    })}
  </div>
);
const Body = () => {
  return (
    <div>
      <RestaurantCardContainer />
    </div>
  );
};

export default Body;
