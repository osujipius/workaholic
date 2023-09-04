import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/homePage";
import Footer from "./components/molecules/Footer";
import BackToTopButton from "./components/atoms/backToTopButton/BackToTopButton.js";
import BlogPage from "./pages/blogPage";
import ScrollToTop from "./components/molecules/helperFunctions/ScrollToTop.js";
import About from "./pages/aboutPage";
import Signup from "./pages/Auth/Signup";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Jobs from "./pages/JobsPage";
import Signin from "./pages/Auth/Signin.jsx";
import { ProtectedRoute } from "./pages/ProtectedRoute.js";
import Header from "./components/molecules/Header";
import Login from "./pages/Auth/login";
import NotFound from "./pages/notFoundPage";

export default function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Landing />} />
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ScrollToTop>
          <BackToTopButton />
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
