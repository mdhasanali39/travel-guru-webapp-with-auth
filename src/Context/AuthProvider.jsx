import { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firbase/firbaseConfig";

export const AuthContext = createContext(null);

const fbProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);


  // login with google 
  const googleLogin = () =>{
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
  }

  // login with facebook 
  const facebookLogin = () =>{
    setLoader(true)
    return signInWithPopup(auth, fbProvider)
  }

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
    facebookLogin,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
