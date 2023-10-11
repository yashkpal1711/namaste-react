import React, { useState } from "react";
import { data } from "../Config";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";


const Body = () => {
  const [restaurants, setRestaurants] = useState(data);
  const [searchedText, setSearchedText] = useState("");
  const RestaurantCardContainer = () => (
    <div className="restaurantCardContainer">
      {restaurants.map((cardData) => {
        return <RestaurantCard {...cardData} key={cardData.stars} />;
      })}
    </div>
  );
  return (
    <>
      <div>
        <SearchBar
          className="middle"
          searchedText={searchedText}
          setSearchedText={setSearchedText}
          restaurants={restaurants}
          setRestaurants={setRestaurants}
        />
      </div>
      <div>
        <RestaurantCardContainer />
      </div>
    </>
  );
};

export default Body;
