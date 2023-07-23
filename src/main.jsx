import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MyContextProvider from "./context/AppContext";

ReactDOM.render(
  <MyContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MyContextProvider>,
  document.getElementById("root")
);
