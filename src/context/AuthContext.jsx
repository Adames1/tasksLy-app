import { createContext, useContext } from "react";

const AuthContext = createContext(null);

function AuthProvider() {
  return <div>AuthContext</div>;
}

export default AuthProvider;
