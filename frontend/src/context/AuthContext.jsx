import { createContext } from "react";
import { useEffect, useState } from "react";

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
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
