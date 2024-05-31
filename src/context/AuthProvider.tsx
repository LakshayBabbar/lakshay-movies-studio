"use client";
import { createContext, ReactNode, useEffect, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch("/api");
      const res = await req.json();
      if (res.success) {
        setIsAdmin(res.isAdmin);
        setUsername(res.username);
      }
      console.log(res.isAdmin);
      console.log(res.username);
    };
    fetchData();
  }, [isAdmin, username]);
  return (
    <AuthContext.Provider
      value={{ isAdmin, username, setIsAdmin, setUsername }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
