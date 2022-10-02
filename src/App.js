import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/molecules/Header.js";
import Home from "./pages/Home.js";
import Footer from "./components/molecules/footer/Footer";
import BackToTopButton from "./components/atoms/backToTopButton/BackToTopButton.js";
import BlogPage from "./pages/BlogPage.js";
import ScrollToTop from "./components/helperFunctions/ScrollToTop.js";
import About from "./pages/About.js";
import Signup from "./pages/signup";
import { AuthProvider } from "./contexts/AuthContext.jsx";

export default function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Nav />
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Blog" element={<BlogPage />} />
              <Route path="/About" element={<About />} />
              <Route path="/Signin" element={<Signup />} />
            </Routes>
          </ScrollToTop>
          <BackToTopButton />
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
