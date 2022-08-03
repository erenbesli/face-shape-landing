/** @format */

// imports
import React from "react";
import ReactDOM from "react-dom/client";

// components
import App from "./App";

// styles
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
