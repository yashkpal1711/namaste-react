import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Coming from React");
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(heading);
