import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import App from "./components/App";
import App from "./components/AppRout";
// import App from "./testContext/App";

import reportWebVitals from "./reportWebVitals";
import Context from "./testContext/Context/Context";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

reportWebVitals();
