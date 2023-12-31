import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Config";
import ShimmerCards from "./ShimmerCards";
import "../App.css";
import useGetRestaurantInfo from "../utils/useGetRestaurantInfo";

const RestaurantDetails = () => {
  const { id } = useParams();

  const restaurantInfo = useGetRestaurantInfo(id);

  return !restaurantInfo ? (
    <ShimmerCards />
  ) : (
    <div className="restaurant-detailPage-container">
      <div>
        <h1>{restaurantInfo?.cards[0]?.card?.card?.info?.name}</h1>
        <h4>{restaurantInfo?.cards[0]?.card?.card?.info?.areaName}</h4>
        <h4>{restaurantInfo?.cards[0]?.card?.card?.info?.slugs?.city}</h4>
        <h4>{restaurantInfo?.cards[0]?.card?.card?.info?.avgRating}</h4>
        <h4>{restaurantInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h4>
        <img
          src={
            IMG_CDN_URL +
            restaurantInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
      </div>
      <div>
        <h2>Menu</h2>
        <ul>
          {restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
            (menuHeading, index) => (
              <li style={{ listStyle: "none" }} key={index}>
                {menuHeading?.card?.card?.title}
                <ul>
                  {/* Add another map for the subitems */}
                  {restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
                    (menuHeading, index) => (
                      <li key={index}>{menuHeading?.card?.card?.title}</li>
                    )
                  )}
                </ul>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;
