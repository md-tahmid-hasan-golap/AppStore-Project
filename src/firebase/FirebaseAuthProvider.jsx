import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase.config";
const goggleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();
const auth = getAuth(app);

const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  //   creatUser
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   signIn user
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const googleLogin = () => {
    return signInWithPopup(auth, goggleProvider);
  };

  //    log out
  const lognOut = () => {
    return signOut(auth);
  };

  //   useEffect
  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (crueentUser) => {
      //   console.log(crueentUser);
      setUser(crueentUser);
    });

    return () => {
      unSuscribe();
    };
  }, []);
  const userData = {
    user,
    setUser,
    creatUser,
    signIn,
    googleLogin,
    lognOut,
  };
  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
