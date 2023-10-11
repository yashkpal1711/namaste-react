import React from "react";
import SearchBar from "./SearchBar";

const Logo = () => (
  <a href="/">
    <img
      src="https://cdn0.iconfinder.com/data/icons/food-beverage-color/25/Foood_Color_Ramen-512.png"
      alt="logo"
      className="Logo"
    />
  </a>
);

const UserIcon = () => (
  <a href="/">
    <img
      src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0"
      alt="logo"
      className="userLogo"
    />
  </a>
);

const Header = () => {
  return (
    <div>
      <div className="headerContainer">
        <Logo className="left" />
       

        <UserIcon className="right" />
      </div>
    </div>
  );
};

export default Header;
