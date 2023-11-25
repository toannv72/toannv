import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import Page2 from "./page/Page2";

export const routers = createBrowserRouter([ 
  { 
    path: "*", 
    element: <Home/>, 
  }, 
  { 
    path: "/", 
    element: <Home/>, 
  }, 
  { 
    path: "/page2", 
    element: <Page2/>, 
  },
]); 
