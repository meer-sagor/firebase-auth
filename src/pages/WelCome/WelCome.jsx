import React from "react";
import { useAuth } from "../../Store/AuthContext";
import Blog from "../Blog/Blog";

const WelCome = () => {
  const { user } = useAuth();
  return (
    <>

      <h1>{user?.email}</h1>
      <Blog />
    </>
  );
};

export default WelCome;
