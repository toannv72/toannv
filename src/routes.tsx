import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./page/Home/Index";
import User from "./page/Admin/user/User";
import TicTacToe from "./page/TicTacToe";



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
    path: "/instagram",
    element: <Home />,
  },
  {
    path: "/TicTacToe",
    element: <TicTacToe />,
  },
  {
    path: "/admin",
    element: <User />,
  },
]); 
