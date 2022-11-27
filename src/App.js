import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/molecules/Header.js";
import Home from "./pages/Home.js";
import Footer from "./components/molecules/footer/Footer";
import BackToTopButton from "./components/atoms/backToTopButton/BackToTopButton.js";
import BlogPage from "./pages/BlogPage.js";
import ScrollToTop from "./components/molecules/helperFunctions/ScrollToTop.js";
import About from "./pages/About.js";
import Signup from "./pages/Auth/Signup";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Jobs from "./pages/Jobs.js";
import Signin from "./pages/Auth/Signin.jsx";
import { ProtectedRoute } from "./pages/ProtectedRoute.jsx";

export default function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Nav />
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/login" element={<Signin />} />
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
