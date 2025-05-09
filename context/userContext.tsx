import { createContext, use, useState } from "react";

export type User = {
  name: string;
  email: string;
};

type UserContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login?: (email: string, password: string) => void;
  logout?: () => void;
  register?: (email: string, password: string) => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  isAuthenticated: false,
});

export const UserProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {};
  const register = async (email: string, password: string) => {};
  const logout = () => {};

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = use(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
