import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
export const AuthContext = React.createContext();

function AuthWrapper({ children }) {
  console.log("Authorising");
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const store = {
    login,
  };

  return (
    <AuthContext.Provider value = {store}>
      <div>{children}</div>;
    </AuthContext.Provider>
  );
}

export default AuthWrapper;
