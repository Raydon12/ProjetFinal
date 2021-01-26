import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import AuthService from "./AuthService";
import AuthContext from "./context";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const user = authToken;
    setUser(user);
    AuthService.storeToken(authToken);
  };

  const updateUser = (authToken) => {
    console.log(authToken, "update user");
    const user = authToken;
    setUser(user);
    AuthService.storeToken(authToken);
  };
  const logOut = () => {
    const user = null;
    setUser(user);

    AuthService.removeToken();
  };
  return { user, logIn, logOut, setUser, updateUser };
};
