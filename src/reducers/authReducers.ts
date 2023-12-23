import { User } from "./../types/User";

type AuthState = {
  isAuthenticated: boolean;
  token: string | null;
  user: User;
  error: string | null;
};

type AuthAction =
  | { type: "LOGIN_SUCCESS"; payload: { token: string; user: User } }
  | { type: "LOGIN_FAILURE"; payload: string }
  | { type: "LOGOUT_SUCCESS" };

export default function authReducers(authState: AuthState, action: AuthAction) {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      console.log("login success");
      return {
        isAuthenticated: true,
        token: action.payload.token,
        user: action.payload.user,
        error: null,
      };
    }
    case "LOGIN_FAILURE": {
      console.log("login failure");
      return {
        isAuthenticated: false,
        token: null,
        user: null,
        error: action.payload,
      };
    }
    case "LOGOUT_SUCCESS": {
      console.log("logout success");
      return {
        isAuthenticated: false,
        user: null,
        token: null,
        error: null,
      };
    }
    default: {
      return authState;
      // throw Error("Unknown action: " + action);
    }
  }
}
