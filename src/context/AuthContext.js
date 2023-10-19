import { createContext } from "react";

function noop() {}

export const AuthContext = createContext({
  token: null,
  isAuthenticated: false,
  login: noop,
  logout: noop,
});
