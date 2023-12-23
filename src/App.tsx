import { useReducer } from "react";
import "./App.css";
import Router from "./router";
import authReducers from "./reducers/authReducers";
import { initialState } from "./types/Auth";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [state, dispatch] = useReducer(authReducers, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Router></Router>
    </AuthContext.Provider>
  );
}

export default App;
