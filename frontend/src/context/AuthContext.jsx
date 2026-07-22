import { createContext, useCallback } from "react";
import { useEffect, useState } from "react";
import { apiRequest } from "../services/api";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  //to get the current user from local storage
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );

  // to update the user
  const updateUser = (data) => {
    setCurrentUser(data);
  };

  // logout function
  const logout = useCallback(async () => {
    try {
      await apiRequest.post("/auth/logout");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setCurrentUser(null);
      localStorage.removeItem("user");
      sessionStorage.clear();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
