import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  //check for token on every re-render
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      setUser({ token, ...JSON.parse(userData) });
    }
  }, []);

  // Function to handle login
  const login = (userData) => {
    localStorage.setItem("token", userData.token);
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: userData.email,
        password: userData.password,
      })
    );

    setUser(userData);
  };

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
