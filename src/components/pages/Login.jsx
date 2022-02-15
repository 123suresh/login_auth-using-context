import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth-context/Auth";

function Login() {
  const { isAuthenticated, auth } = useContext(AuthContext);

  const handleLogin = () => {
    isAuthenticated(true);
  };
  if (auth) return <Navigate to="/home" />;
  return (
    <div>
      <button onClick={handleLogin}>login</button>
    </div>
  );
}

export default Login;
