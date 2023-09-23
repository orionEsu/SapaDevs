import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage.jsx";
import Contact from "./pages/Contact";
import Register from "./pages/Register";

const routes = [
  { path: "/", element: <Homepage /> },
  { path: "/contact", element: <Contact /> },
  { path: "/register", element: <Register /> },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
