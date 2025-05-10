import { createContext, use, useState } from "react";
import { account } from "../lib/appwrite";
import { AppwriteException, ID } from "appwrite";

export type User = {
  name: string;
  email: string;
};

export type ErrorType = {
  type: string;
  message: string;
  code: number;
};

type UserContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout?: () => void;
  register: (email: string, password: string) => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => {},
  register: async () => {},
});

export const UserProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      setUser(user);
    } catch (error: unknown) {
      if (error instanceof AppwriteException) {
        throw {
          type: error.type || "AppwriteException",
          message: error.message,
          code: error.code,
        } as ErrorType;
      }
    }
  };
  const register = async (email: string, password: string) => {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password);
    } catch (error: unknown) {
      if (error instanceof AppwriteException) {
        throw {
          type: error.type || "AppwriteException",
          message: error.message,
          code: error.code,
        } as ErrorType;
      }
    }
  };
  const logout = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

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
