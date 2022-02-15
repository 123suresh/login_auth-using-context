import React, { useContext } from "react";
import { AuthContext } from "../auth-context/Auth";

function Home() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div>
      <p>are in home page</p>
      <button onClick={() => isAuthenticated(false)}>logout</button>
    </div>
  );
}

export default Home;
