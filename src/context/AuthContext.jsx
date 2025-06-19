/**
 * AuthContext.jsx
 *
 * Proporciona un contexto de autenticación y utilidades relacionadas para gestionar el estado de autenticación del usuario.
 */

import { createContext, useState, useContext } from "react";

// Crea un contexto de React para la autenticación
const AuthContext = createContext();

/**
 * Componente AuthProvider.
 *
 * Proporciona estado y funciones relacionadas con la autenticación a sus componentes hijos.
 *
 * @param {Object} props - El objeto de propiedades.
 * @param {React.ReactNode} props.children - Los componentes hijos que tendrán acceso al contexto de autenticación.
 * @returns {JSX.Element} El proveedor de AuthContext envolviendo los componentes hijos.
 */
export const AuthProvider = ({ children }) => {
  // Estado de autenticación
  const [auth, setAuth] = useState(value || {});

  // Función para iniciar sesión estableciendo el estado de autenticación
  const login = (userData) => {
    setAuth(userData);
  };

  // Función para cerrar sesión limpiando el estado de autenticación
  const logout = () => {
    setAuth({});
  };

  // Verifica si el usuario está autenticado
  const isAuthenticated = () => {
    return Object.keys(auth).length > 0;
  };

  // Obtiene los datos del usuario actual
  const getUser = () => {
    return auth;
  };

  // Obtiene el rol del usuario actual
  const getRole = () => {
    return auth.role || "guest";
  };

  // Obtiene los permisos del usuario actual
  const getPermissions = () => {
    return auth.permissions || [];
  };

  // Verifica si el usuario tiene un permiso específico
  const hasPermission = (permission) => {
    return getPermissions().includes(permission);
  };

  // Valor proporcionado por el AuthContext
  const value = {
    auth, // Estado de autenticación
    login, // Función para iniciar sesión
    logout, // Función para cerrar sesión
    isAuthenticated, // Verifica si está autenticado
    getUser, // Obtiene los datos del usuario
    getRole, // Obtiene el rol del usuario
    getPermissions, // Obtiene los permisos del usuario
    hasPermission, // Verifica permisos específicos
  };

  // Retorna el proveedor del contexto envolviendo los hijos
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * Hook personalizado para acceder al AuthContext.
 *
 * @throws {Error} Si falta el AuthProvider en el árbol de componentes.
 * @returns {Object} El valor del contexto de autenticación.
 */
export const useAuth = () => {
  const context = useContext(AuthContext); // Obtiene el contexto
  if (!context) {
    throw new Error("AuthProvider missing in the component tree"); // Lanza error si no hay proveedor
  }
  return context; // Retorna el contexto
};
