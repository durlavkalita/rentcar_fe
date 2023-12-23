import { User } from "./User";

export type AuthState = {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
  error: string | null;
};

export type AuthAction =
  | { type: "LOGIN_SUCCESS"; payload: { token: string; user: User } }
  | { type: "LOGIN_FAILURE"; payload: string }
  | { type: "LOGOUT_SUCCESS" };

export type AuthContextType = {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
};

const token = localStorage.getItem("rentcar_token");
const expiryTime = localStorage.getItem("rentcar_token_expiryTime");
let isAuthenticated = false;
if (token && expiryTime && new Date().getTime() < parseInt(expiryTime)) {
  isAuthenticated = true;
}

export const initialState: AuthState = {
  isAuthenticated: isAuthenticated,
  token: localStorage.getItem("rentcar_token") || null,
  user: localStorage.getItem("rentcar_user")
    ? JSON.parse(localStorage.getItem("rentcar_user")!)
    : null,
  error: null,
};
