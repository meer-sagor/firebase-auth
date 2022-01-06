import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import CombineContext from "./CombineContext/CombineContext";

import App from "./App";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <CombineContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CombineContext>
  </React.StrictMode>,
  document.querySelector("#root")
);
