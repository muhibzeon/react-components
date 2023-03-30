//This file generates the react app

import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./context/navigation";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

//Wrap the App component with the Provider function from navigation.js context
root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
