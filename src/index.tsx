import React              from "react";
import ReactDOM           from "react-dom/client";
import App                from "./App";
import { BrowserRouter }  from "react-router-dom";



import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import "./App.css";



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
