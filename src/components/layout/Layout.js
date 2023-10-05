import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";

export default function Layout({ children }) {
  const { logOut, user } = useAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header user={user} logout={handleSignOut} />
      {children}
      <Footer />
    </>
  );
}
