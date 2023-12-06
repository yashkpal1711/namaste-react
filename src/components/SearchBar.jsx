import React, { useEffect, useState } from "react";
import { filterData } from "../utils/helper";

const SearchBar = ({
  searchedText,
  setSearchedText,
  setFilteredRestaurants,
  filteredRestaurants,
  allRestaurants,
}) => {
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
