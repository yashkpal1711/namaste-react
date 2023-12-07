import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Contact from "./Contact";

const Logo = () => (
  <a href="/">
    <img
      className=""
      src="https://cdn0.iconfinder.com/data/icons/food-beverage-color/25/Foood_Color_Ramen-512.png"
      alt="logo"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <div className="flex">
        <Logo className="left" />

        <div>
          <ul className="nav-menu-container">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        {isLoggedIn ? (
          <button
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
