import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/homePage";
import BackToTopButton from "./components/atoms/backToTopButton/BackToTopButton.js";
import BlogPage from "./pages/blogPage";
import ScrollToTop from "./components/molecules/helperFunctions/ScrollToTop.js";
import About from "./pages/aboutPage";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Jobs from "./pages/JobsPage";
import { ProtectedRoute } from "./pages/ProtectedRoute.js";
import Login from "./pages/auth/login";
import NotFound from "./pages/notFoundPage";
import Register from "./pages/auth/register";
import Layout from "./components/layout/Layout";
import ForgotPassword from "./pages/auth/forgotPassword";
import PasswordReset from "./pages/auth/passwordReset";
import GetStarted from "./pages/getStarted";

export default function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Layout>
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="emulator/action" element={<PasswordReset />} />
                <Route
                  path="/jobs"
                  element={
                    <ProtectedRoute>
                      <Jobs />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/get-started"
                  element={
                    // <ProtectedRoute>
                    <GetStarted />
                    // </ProtectedRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ScrollToTop>
            <BackToTopButton />
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
