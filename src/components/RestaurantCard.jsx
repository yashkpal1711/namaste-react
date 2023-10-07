import React from 'react'

const RestaurantCard = ({ name, image, stars }) => {
  return (
    <div className="restaurantCard">
    <img
      alt="food picture"
      src={
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
        image
      }
    />
    <h2>{name}</h2>
    <h3>{stars}</h3>
  </div>
  )
}

export default RestaurantCard
