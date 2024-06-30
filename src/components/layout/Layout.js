import React from "react";
import { useUser } from "../../contexts/UserContext";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";

export default function Layout({ children }) {
  const { logOut, user } = useUser();

  const handleSignOut = async () => {
    await logOut();
  };

  return (
    <>
      <Header user={user} logOut={handleSignOut} />
      {children}
      <Footer />
    </>
  );
}
