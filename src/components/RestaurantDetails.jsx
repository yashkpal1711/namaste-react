import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Config";
import ShimmerCards from "./ShimmerCards";
import "../App.css";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const s = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5146969&lng=77.0348848&restaurantId=${id}&catalog_qa=undefined&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A1803%2C%22primaryRestaurantId%22%3A15662%2C%22cloudinaryId%22%3A%2289fccaa76f2f760e2742b9e53d32bb69%22%2C%22brandId%22%3A1803%2C%22dishFamilyId%22%3A%22846613%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D&submitAction=SUGGESTION`;

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(s);
    const json = await data.json();
    setRestaurantInfo(json.data);
    console.log(json.data);
  };
  return Object.keys(restaurantInfo).length < 1 ? (
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
            (menuHeading,index) => (
              <li style={{ listStyle:'none' }} key={index}>
                {menuHeading?.card?.card?.title}
                
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;
