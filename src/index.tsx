import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import { DataProvider } from "./Utils/DataContext.js";



ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
    <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
