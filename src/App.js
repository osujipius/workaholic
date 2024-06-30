import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/homePage";
import BackToTopButton from "./components/atoms/backToTopButton/BackToTopButton.js";
import BlogPage from "./pages/blogPage";
import ScrollToTop from "./components/molecules/helperFunctions/ScrollToTop.js";
import About from "./pages/aboutPage";
import { UserProvider } from "./contexts/UserContext.jsx";
import Jobs from "./pages/jobs";
import { ProtectedRoute } from "./pages/ProtectedRoute.js";
import Login from "./pages/auth/login";
import NotFound from "./pages/notFoundPage";
import Layout from "./components/layout/Layout";
import GetStarted from "./pages/getStarted";
import JobPage from "./pages/jobs/jobPage";
import ProfilePage from "./pages/profilePage";

export default function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Layout>
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/jobs/:slug" element={<JobPage />} />
                <Route path="/profile" element={<ProfilePage />} />
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
      </UserProvider>
    </>
  );
}
