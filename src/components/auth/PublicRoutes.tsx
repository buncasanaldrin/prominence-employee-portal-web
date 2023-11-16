import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "@/hooks/auth/useAuth";

const PublicRoutes: React.FC = () => {
  const isAuthenticated = useAuth();

  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
