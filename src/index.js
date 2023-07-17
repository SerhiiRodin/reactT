import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import App from "./components/App";
import App from "./components/AppRout";
// import App from "./testContext/App";

import reportWebVitals from "./reportWebVitals";
import Context from "./testContext/Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Context>
      <App />
    </Context>
  </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
