import { createContext } from "react";
import { IGoogleUser } from "./GoogleUserProvider";

export interface IGoogleUserContext {
  googleUser: IGoogleUser;
  setGoogleUser: (user: IGoogleUser) => void;
}

export const GoogleUserContext = createContext({} as IGoogleUserContext);
