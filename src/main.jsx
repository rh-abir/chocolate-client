import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddChocolates from "./components/AddChocolates.jsx";
import UpdateChocolate from "./components/UpdateChocolate.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:'addchocolate',
    element:<AddChocolates></AddChocolates>
  },
  {
    path: 'updatechocolate/:id',
    element:<UpdateChocolate></UpdateChocolate>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

