import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "@/hooks/auth/useAuth";

const PrivateRoutes: React.FC = () => {
  const isAuthenticated = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoutes;
