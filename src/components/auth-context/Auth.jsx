import React, { useState, createContext, children, useEffect } from "react";

export const AuthContext = createContext();

function Auth({ children }) {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    localStorage.getItem("token") ? setAuth(true) : setAuth(false);
  }, []);

  const isAuthenticated = (state) => {
    state
      ? localStorage.setItem("token", "abcde")
      : localStorage.removeItem("token");
    setAuth(state);
  };

  return (
    <AuthContext.Provider value={{ auth, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export default Auth;
