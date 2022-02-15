import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../auth-context/Auth";

function PrivateRoute() {
  const { auth } = useContext(AuthContext);
  console.log({ auth });

  return <div>{auth ? <Outlet /> : <Navigate to="/" />}</div>;
}

export default PrivateRoute;
