import React, { useEffect, useState } from "react";

const SearchBar = ({
  searchedText,
  setSearchedText,
  setFilteredRestaurants,
  filteredRestaurants,
  allRestaurants,
}) => {
  const filterData = (searchedText, filteredRestaurants) => {
    return filteredRestaurants.filter((filteredRestaurants) =>
      filteredRestaurants?.info?.name
        ?.toLowerCase()
        ?.includes(searchedText.toLowerCase())
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
          const data = filterData(searchedText, allRestaurants);
          setFilteredRestaurants(data);
        }}
      >
        Submit
      </button>
    </>
  );
};

export default SearchBar;
