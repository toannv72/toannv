import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import Page2 from "./page/Page2";
import Page3 from "./page/Page3";

export const routers = createBrowserRouter([ 
  { 
    path: "*", 
    element: <div>404</div>, 
  }, 
  { 
    path: "/", 
    element:  <div>404</div>, 
  }, 
  { 
    path: "/page2", 
    element:  <div>404</div>, 
  },
  { 
    path: "/page3", 
    element:  <div>404</div>, 
  },
]); 
