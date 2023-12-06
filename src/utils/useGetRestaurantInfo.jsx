import React, { useState, useEffect } from "react";

const useGetRestaurantInfo = (id) => {
  const RESTAURANT_INFO_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5146969&lng=77.0348848&restaurantId=${id}&catalog_qa=undefined&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A1803%2C%22primaryRestaurantId%22%3A15662%2C%22cloudinaryId%22%3A%2289fccaa76f2f760e2742b9e53d32bb69%22%2C%22brandId%22%3A1803%2C%22dishFamilyId%22%3A%22846613%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D&submitAction=SUGGESTION`;

  const [restaurantInfo, setRestaurantInfo] = useState();
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(RESTAURANT_INFO_URL);
    const json = await data.json();
    setRestaurantInfo(json.data);
    console.log(json.data);
  };

  return restaurantInfo;
};

export default useGetRestaurantInfo;
