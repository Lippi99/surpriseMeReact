import { useState } from "react";
import { GoogleUserContext } from "./GoogleUserContext";

interface GoogleUserProviderProps {
  children: React.ReactNode;
}

export interface IGoogleUser {
  token: string;
  user: {
    name: string;
    email: string;
    picture: string;
  };
}

export function GoogleUserProvider({ children }: GoogleUserProviderProps) {
  const [googleUser, setGoogleUser] = useState({} as IGoogleUser);
  return (
    <GoogleUserContext.Provider value={{ googleUser, setGoogleUser }}>
      {children}
    </GoogleUserContext.Provider>
  );
}
