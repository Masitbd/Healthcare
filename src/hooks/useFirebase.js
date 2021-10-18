import { useEffect, useState } from "react";
import initializationAuthentication from "../Pages/Login/Firebas/firebase.initialize";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

initializationAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const singnInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const logout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Inside state change", user);
        setUser(user);
      }
    });
  }, []);
  return {
    user,
    error,
    logout,
    singnInUsingGoogle,
  };
};
export default useFirebase;
