import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import RefactoredApp from "./RefactoredApp";

// Routing

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routs

import Root from "./routes/Root";
import Contact from "./routes/contact";
import Home from "./routes/home";
import About from "./routes/about";
import Index from "./routes/index";
import Login from "./routes/Login";
import Register from "./routes/Register";




const router = createBrowserRouter([
  {
    basename: "",
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      }
      
    ],
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <React.StrictMode>
      
      <RouterProvider router={router} />
      
    </React.StrictMode>
 
);