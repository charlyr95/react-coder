import React, { useState } from "react";
import { useContext } from "react";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(value || {});

  const login = (userData) => {
    setAuth(userData);
  };

  const logout = () => {
    setAuth({});
  };

  const isAuthenticated = () => {
    return Object.keys(auth).length > 0;
  };

  const getUser = () => {
    return auth;
  };

  const getRole = () => {
    return auth.role || "guest";
  };

  const getPermissions = () => {
    return auth.permissions || [];
  };

  const hasPermission = (permission) => {
    return getPermissions().includes(permission);
  };

  const value = {
    auth,
    login,
    logout,
    isAuthenticated,
    getUser,
    getRole,
    getPermissions,
    hasPermission
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
