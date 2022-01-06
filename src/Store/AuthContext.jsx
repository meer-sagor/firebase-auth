import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

const AuthContext = createContext({
  loading: false,
  setLoading: () => {},
  error: null,
  setError: () => {},
  user: null,
  register: (email, password) => {},
  signIn: (email, password) => {},
  logOut: () => {},
});
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = async () => await signOut(auth);

  const authContextValue = {
    loading,
    setLoading,
    error,
    setError,
    user,
    register,
    signIn,
    logOut,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
