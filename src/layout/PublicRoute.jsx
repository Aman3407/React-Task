import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const PublicRouter = () => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRouter;
