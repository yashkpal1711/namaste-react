import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";





const RestaurantCard = ({ name, image, stars }) => (
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
);
const RestaurantCardContainer = () => (
  <div className="restaurantCardContainer">
    {data.map((cardData) => {
      return <RestaurantCard {...cardData}  key={cardData.stars}/>;
    })}
  </div>
);
const data = [
  {
    name: "Om Sweets & Snacks",
    image: "l7llnbfv3rhnp8cgsepo",
    stars: 4.4,
  },
  {
    name: "Mac D",
    image: "85ccae4e3576f9330af102c46ca85395",
    stars: 1.4,
  },
  {
    name: "KFC",
    image: "56c9ab92bd79745fd152a30fa2525426",
    stars: 3.4,
  },
  {
    name: "burger King",
    image: "85ccae4e3576f9330af102c46ca85395",
    stars: 2.4,
  },
  {
    name: "biryani blues",
    image: "85ccae4e3576f9330af102c46ca85395",
    stars: 4.1,
  },
  {
    name: "kullad Pizza",
    image: "l7llnbfv3rhnp8cgsepo",
    stars: 5,
  }
];

const App = () => (
  <>
    <Header />
    <RestaurantCardContainer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
