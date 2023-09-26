import React from "react";
import ReactDOM from "react-dom/client";

const Logo = () => (
  <a href="/">
    <img
      src="https://cdn0.iconfinder.com/data/icons/food-beverage-color/25/Foood_Color_Ramen-512.png"
      alt="logo"
      className="Logo"
    />
  </a>
);
const SearchBar = () => (
  <>
    <input
      type="text"
      className="searchinput"
      placeholder="dont search"
    ></input>
    <button
      type="submit"
      className="searchButton"
      onClick={() => {
        window.location.reload();
      }}
    >
      submit
    </button>
  </>
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

const RestaurantCard = ({name,image,stars}) => (
  <div className="restaurantCard">
    <img
      alt="food picture"
      src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ image}
    />
        <h2>{name}</h2>
    <h3>{stars}</h3>
  </div>
);
const RestaurantCardContainer = () => (
  <div className="restaurantCardContainer">
    {data.map((cardData) => {
      return <RestaurantCard {...cardData} />;
    })}
  </div>
);
const data = [
  {
    name: "Om Sweets & Snacks",
    image:
      "l7llnbfv3rhnp8cgsepo",
    stars: 4.4,
  },
  {
    name: "Mac D",
    image:
      "85ccae4e3576f9330af102c46ca85395",
    stars: 1.4,
  },
  {
    name: "KFC",
    image:
      "56c9ab92bd79745fd152a30fa2525426",
    stars: 3.4,
  },
  {
    name: "burger King",
    image:
      "85ccae4e3576f9330af102c46ca85395",
    stars: 2.4,
  },
  {
    name: "biryani blues",
    image:
      "85ccae4e3576f9330af102c46ca85395",
    stars: 4.1,
  },
  {
    name: "kullad Pizza",
    image:
      "l7llnbfv3rhnp8cgsepo",
    stars: 5,
  },
];

const Header = () => {
  return (
    <div className="headerContainer">
      <Logo className="left" />
      <div>
        <SearchBar className="middle" />
      </div>

      <UserIcon className="right" />
    </div>
  );
};
const App = () => (
  <>
    <Header />
    <RestaurantCardContainer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
