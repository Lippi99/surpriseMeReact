import { useContext } from "react";
import { GoogleUserContext } from "./GoogleUserContext";

export function useGoogleUser() {
  const context = useContext(GoogleUserContext);
  if (!context) {
    throw new Error("useGoogleUser must be used within a GoogleUserProvider");
  }
  return context;
}
