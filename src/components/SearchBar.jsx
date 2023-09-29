import React from "react";

const SearchBar = () => {
  return (
    <>
      <input
        type="text"
        className="searchinput"
        placeholder="dont search"
      ></input>
      <button
        type="submit"
        className="searchButton"
        onClick={() => {
          window.location.reload();
        }}
      >
        Submit
      </button>
    </>
  );
};

export default SearchBar;
