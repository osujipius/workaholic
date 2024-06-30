import React, { useContext, useState, useEffect } from "react";
import supabase from "../config/supabaseClient";

const UserContext = React.createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function logOut() {
    const { error } = await supabase.auth.signOut();
    console.log(error);
  }

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          console.log(value.data?.user);
          setUser(value.data?.user);
        }
      });
    }
    getUserData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        logOut,
        user,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
