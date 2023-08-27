import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";
import Footer from "./components/molecules/footer/Footer";
import BackToTopButton from "./components/atoms/backToTopButton/BackToTopButton.js";
import BlogPage from "./pages/blog";
import ScrollToTop from "./components/molecules/helperFunctions/ScrollToTop.js";
import About from "./pages/about";
import Signup from "./pages/Auth/Signup";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Jobs from "./pages/Jobs";
import Signin from "./pages/Auth/Signin.jsx";
import { ProtectedRoute } from "./pages/ProtectedRoute.js";
import Header from "./components/molecules/Header";
import Login from "./pages/Auth/login";

export default function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/jobs"
                element={
                  <ProtectedRoute>
                    <Jobs />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </ScrollToTop>
          <BackToTopButton />
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
