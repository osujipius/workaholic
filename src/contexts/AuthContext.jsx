import React, { useContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/config";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  // const [currentUser, setCurrentUser] = useState();
  const [user, setUser] = useState({});
  //   const [loading, setLoading] = useState(true);

  //   function signup(email, password) {
  //     return auth.createUserWithEmailAndPassword(email, password);
  //   }

  //   useEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged((user) => {
  //       setCurrentUser(user);
  //       setLoading(false);
  //     });

  //     return unsubscribe;
  //   }, []);

  //   const value = {
  //     currentUser,
  //     signup,
  //   };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
