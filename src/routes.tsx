import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./page/Home/Index";
import User from "./page/Admin/user/User";



export const routers = createBrowserRouter([
  {
    path: "*",
    element: <div>404</div>,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <User />,
  },
]); 
