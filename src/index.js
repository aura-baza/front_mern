import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./components/List_Products/products.css";
import "./components/Create_Products/create.css";
import "./components/Update_Products/update.css";
import "./components/Not Found/notFound.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
