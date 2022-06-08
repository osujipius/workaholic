import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/molecules/Header.js";
import Home from "./pages/Home.js";
import Footer from "./components/molecules/footer/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
