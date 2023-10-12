import React, { useState, useEffect } from "react";
import { data } from "../Config";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import ShimmerCards from "./ShimmerCards";

const Body = () => {
  //  We will use allRestaurants to search restaurants from.
  const [allRestaurants, setAllRestaurants] = useState([]);
  //  We will show the searched cards in the UI
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchedText, setSearchedText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);
  // GET request to SWIGGY API to get restaurant data 
  const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5011803&lng=77.0338583&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const RestaurantCardContainer = () =>
    filteredRestaurants.length === 0 ? (
      <h1>no match found</h1>
    ) : (
      <div className="restaurantCardContainer">
        {filteredRestaurants.map((cardData) => {
          return <RestaurantCard {...cardData} key={cardData?.info?.id} />;
        })}
      </div>
    );

  return allRestaurants?.length === 0 ? (
    <ShimmerCards />
  ) : (
    <>
      <div>
        <SearchBar
          className="middle"
          searchedText={searchedText}
          setSearchedText={setSearchedText}
          filteredRestaurants={filteredRestaurants}
          setFilteredRestaurants={setFilteredRestaurants}
          allRestaurants={allRestaurants}
        />
      </div>
      <div>
        <RestaurantCardContainer />
      </div>
    </>
  );
};

export default Body;
