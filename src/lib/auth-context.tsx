// src/lib/auth-context.tsx
import { createContext, useContext, useState } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Lista de usuarios válidos
const validUsers: { username: string; password: string }[] = [
  { username: "admin", password: "aeiou.1234" },
  { username: "usuario", password: "clave@444" },
  { username: "user", password: "user00.00" },
  { username: "viacol", password: "viacoL@8888" },
  { username: "superviacol", password: "sup3rs3GUro.4321@." },
];

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username: string, password: string): boolean => {
    const userMatch = validUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (userMatch) {
      setIsAuthenticated(true);
      return true;
    }

    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
