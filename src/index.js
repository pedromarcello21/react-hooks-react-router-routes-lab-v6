// index.js
import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import Root from "./Root"
import Error from "./Error"

// Create the router using the routes array directly
const router = createBrowserRouter([
    {path:"/",
    element:<Root/>,
    errorElement: <Error />, 
    children:routes}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



