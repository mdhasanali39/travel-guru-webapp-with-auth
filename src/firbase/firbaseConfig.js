import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDG-atKtAqKiJVBbK5do-3uNg9VpJr9c90",
  authDomain: "travel-guru-webapp-with-auth.firebaseapp.com",
  projectId: "travel-guru-webapp-with-auth",
  storageBucket: "travel-guru-webapp-with-auth.appspot.com",
  messagingSenderId: "384780252094",
  appId: "1:384780252094:web:d0e8196597f728be4f3fef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;