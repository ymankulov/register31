import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../fireBase";
// context
const authContext = createContext();
export const useAuth = () => useContext(authContext);
// context

// reducer
const initialState = {
  user: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
// reducer

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //goole
  const googleProvider = new GoogleAuthProvider();
  //goole

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  async function signInWithGoogle() {
    try {
      return await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error.message);
    }
  }

  function getUser() {
    return onAuthStateChanged(auth, (user) => {
      dispatch({ type: "GET_USER", payload: user });
    });
  }
  useEffect(() => {
    getUser();
  }, []);

  function logOutUser() {
    return signOut(auth);
  }

  const values = {
    register,
    user: state.user,
    signInWithGoogle,
    logOutUser,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
