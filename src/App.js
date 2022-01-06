import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./Store/AuthContext";

import Layout from "./Components/Layout/Layout";
import WelCome from "./pages/WelCome/WelCome";
const Profile = lazy(() => import("./pages/Profile/Profile"));
const NewBlog = lazy(() => import("./pages/Blog/AddBlog"));
const SignIn = lazy(() => import("./pages/Auth/SignIn"));
const SignUp = lazy(() => import("./pages/Auth/SignUp"));

const App = () => {
  const { user } = useAuth();
  return (
    <>
      <Layout>
        <Suspense fallback>
          <Routes>
            <Route path="/" element={<WelCome />} />

            {user && <Route path="/profile" element={<Profile />} />}
            <Route path="/new-blog" element={<NewBlog />} />

            {!user && <Route path="/auth/signin" element={<SignIn />} />}

            {!user && <Route path="/auth/signup" element={<SignUp />} />}

            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
