import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthContextProvider from "./contexts/AuthContext";
import CatContextProvider from "./contexts/CatContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CatContextProvider>
        <App />
      </CatContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
