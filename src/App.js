import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantDetails from "./components/RestaurantDetails";
import Footer from "./components/Footer";
import LogInForm from "./components/LogInForm";
import Profile from "./components/Profile";
import SignUpForm from "./components/SignUpForm";
import TodoList from "./components/TodoList";
import ShimmerCards from "./components/ShimmerCards";

const AboutUs = lazy(() => import("./components/AboutUs"));

const App = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
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
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<ShimmerCards />}>
            <AboutUs />
          </Suspense>
        ),
        children: [
          {
            path: "profile", // http://localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "/login",
        element: <LogInForm />,
      },
      {
        path: "/signUp",
        element: <SignUpForm />,
      },
      {
        path: "/try",
        element: <TodoList />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<RouterProvider router={appRouter} />);
