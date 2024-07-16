import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppProvider } from "./context/context.jsx";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routes/appRouter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}/>
);
