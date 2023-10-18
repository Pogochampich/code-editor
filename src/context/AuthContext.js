import { createContext } from "react";

function noop() {}

export const AuthContext = createContext({
  token: null,
  id: null,
  isAuthenticated: false,
  login: noop,
  logout: noop
});
