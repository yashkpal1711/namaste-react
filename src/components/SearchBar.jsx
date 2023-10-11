import React, { useState } from "react";

const SearchBar = ({
  searchedText,
  setSearchedText,
  setRestaurants,
  restaurants,
}) => {
  const filterData = (searchedText, restaurants) => {
    return restaurants.filter((restaurant) =>
      restaurant.name.includes(searchedText)
    );
  };
  return (
    <>
      <input
        type="text"
        className="searchinput"
        placeholder="dont search"
        value={searchedText}
        onChange={(e) => {
          setSearchedText(e.target.value);
        }}
      ></input>
      <button
        type="submit"
        className="searchButton"
        onClick={() => {
          const data = filterData(searchedText, restaurants);
          setRestaurants(data);
          console.log(data);
        }}
      >
        Submit
      </button>
    </>
  );
};

export default SearchBar;
