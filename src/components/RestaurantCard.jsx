import React from "react";

const RestaurantCard = ({ info }) => {
  return (
    <div className="restaurantCard">
      <img
        alt="food picture"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          info.cloudinaryImageId
        }
      />
      <h2>{info.name}</h2>
      <h3>{info.avgRatingString}</h3>
    </div>
  );
};

export default RestaurantCard;
