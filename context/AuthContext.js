import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUser } from "../api/restApi";
import api from "../api/restApi";

const AuthContext = createContext(); //untuk membuat konteks yang memungkinkan data tertentu tersedia untuk seluruh komponen yang ada dalam hierarki

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const login = async (token) => {
    console.log("ini di auth provider", token);
    setUser(token);
    setIsLoggedIn(true);
    await AsyncStorage.setItem("userToken", token);
  };
  const logout = async () => {
    setUser(null);
    setIsLoggedIn(false);
    await AsyncStorage.removeItem("userToken");
  };

  const refreshToken = async () => {
    console.log("ini di refresh token", user);
    api.defaults.headers.common["Authorization"] = `Bearer ${user}`;
  };

  const fetchUser = async () => {
    const response = await getUser();
    console.log("ini response dari fetchUser: ", response);
    setUserData(response);
  };

  useEffect( () => {
    refreshToken()
    if (user) {
        fetchUser()
    }
  }, [user])

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn, userData }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
