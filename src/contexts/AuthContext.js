import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [userName, setUsername] = useState("");
  const [passWord, setPassword] = useState("");
  let isLoggedIn = userName !== "" && passWord !== "";

  const logout = () => {
    setUsername("");
    setPassword("");
  };
  // to logout einai sto auth logika den mporw na ferw to cats apo to alo context gia na kanw setCats("")
  return (
    <AuthContext.Provider
      value={{
        userName,
        passWord,
        setPassword,
        setUsername,
        logout,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
