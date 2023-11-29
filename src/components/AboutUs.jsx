import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const AboutUs = () => {
  return (
    <div>
      <h1>This is the About Us Page</h1>
      <Profile name={"Function"}/>
      <ProfileClass name={"Class"}/>
    </div>
  );
};

export default AboutUs;
