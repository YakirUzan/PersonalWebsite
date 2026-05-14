import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

document.documentElement.style.scrollBehavior = "smooth";
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#333333";
document.body.style.color = "#ffffff";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
