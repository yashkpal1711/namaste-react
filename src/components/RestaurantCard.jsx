import React from "react";
import { IMG_CDN_URL } from "../Config";

const RestaurantCard = ({ info }) => {
  return (
    <div className="restaurantCard">
      <img
        alt="food picture"
        src={
          IMG_CDN_URL +
          info.cloudinaryImageId
        }
      />
      <h2>{info.name}</h2>
      <h3>{info.avgRatingString}</h3>
    </div>
  );
};

export default RestaurantCard;
