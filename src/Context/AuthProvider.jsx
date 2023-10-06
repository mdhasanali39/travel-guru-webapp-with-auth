import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firbase/firbaseConfig";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // create user with email and password
  const signUp = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

//   sign in user with email and password 
  const signIn = (email,password) =>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

//   observer 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser);
        setUser(currentUser);
        setLoader(false)
    });
    return () => {
       unsubscribe();
    };
  }, []);

//   log out 
  const logOut = () =>{
    setLoader(true)
    return signOut(auth);
  }


  const authInfo = {
    user,
    signUp,
    signIn,
    logOut,
    loader,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
