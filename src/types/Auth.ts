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

const pocketbase_auth = localStorage.getItem("pocketbase_auth");

const pocketbase_data = pocketbase_auth
  ? JSON.parse(pocketbase_auth)
  : { token: null, user: null };

const rentcar_token = pocketbase_data.token;
const rentcar_user = {
  id: pocketbase_data.model.id,
  email: pocketbase_data.model.email,
  name: pocketbase_data.model.name,
  phone_number: pocketbase_data.model.phone_number,
  avatar: pocketbase_data.model.avatar,
};
let isAuthenticated = false;
if (rentcar_token) {
  isAuthenticated = true;
}
// if (token && expiryTime && new Date().getTime() < parseInt(expiryTime)) {
//   isAuthenticated = true;
// }

export const initialState: AuthState = {
  isAuthenticated: isAuthenticated,
  token: rentcar_token,
  user: rentcar_user,
  error: null,
};
