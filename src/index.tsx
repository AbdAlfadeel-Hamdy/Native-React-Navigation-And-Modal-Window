import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationContextProvider } from "./context/navigationContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavigationContextProvider>
      <App />
    </NavigationContextProvider>
  </React.StrictMode>
);
