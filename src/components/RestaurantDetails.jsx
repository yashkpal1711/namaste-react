import React from "react";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
    const { id } = useParams();
    const s ="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5146969&lng=77.0348848&restaurantId=15661&catalog_qa=undefined&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A1803%2C%22primaryRestaurantId%22%3A15662%2C%22cloudinaryId%22%3A%2289fccaa76f2f760e2742b9e53d32bb69%22%2C%22brandId%22%3A1803%2C%22dishFamilyId%22%3A%22846613%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D&submitAction=SUGGESTION"
  return (
    <>
      <h1>Restaurant Id is: {id}</h1>
    </>
  );
};

export default RestaurantDetails;
