import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/molecules/Header.js";
import Home from "./pages/Home.js";
import Footer from "./components/molecules/footer/Footer";
import Trending from "./pages/Trending.js";
import BackToTopButton from "./components/atoms/backToTopButton/BackToTopButton.js";
import BlogPage from "./pages/BlogPage.js";
import ScrollToTop from "./components/helperFunctions/ScrollToTop.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Trending" element={<Trending />} />
            <Route path="/Blog" element={<BlogPage />} />
          </Routes>
        </ScrollToTop>
        <BackToTopButton />
        <Footer />
      </BrowserRouter>
    </>
  );
}
