import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import AboutUs from "./components/AboutUs";

const App = () => (
  <>
    <Header />
    <Body />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<RouterProvider router={appRouter} />);
