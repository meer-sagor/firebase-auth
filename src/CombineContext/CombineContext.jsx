import React from "react";
import AuthProvider from "../Store/AuthContext";
import BlogProvider from "../Store/BlogContext";

const CombineContext = ({ children }) => {
  return (
    <AuthProvider>
      <BlogProvider>{children}</BlogProvider>
    </AuthProvider>
  );
};

export default CombineContext;
