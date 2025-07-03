import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const user = true;

  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoutes;
