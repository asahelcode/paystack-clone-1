import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

AOS.init();
