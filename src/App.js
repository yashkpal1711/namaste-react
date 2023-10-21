import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import AboutUs from "./components/AboutUs";
import Contact from './components/Contact';
import RestaurantDetails from "./components/RestaurantDetails";

const App = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },{
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<RouterProvider router={appRouter} />);
