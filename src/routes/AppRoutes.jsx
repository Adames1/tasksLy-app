import { Routes, Route } from "react-router-dom";
import StartedPage from "../pages/StartedPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

import Layout from "../components/Layout";

import ProtectedRoutes from "../components/ProtectedRoutes";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<StartedPage />} />
      <Route
        path="/home"
        element={
          <ProtectedRoutes>
            <Layout>
              <HomePage />
            </Layout>
          </ProtectedRoutes>
        }
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default AppRoutes;
