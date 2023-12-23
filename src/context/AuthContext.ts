import { createContext } from "react";
import { initialState, AuthContextType } from "../types/Auth";

export const AuthContext = createContext<AuthContextType>({
  state: initialState,
  dispatch: () => {},
});
