import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import PrivateRoutes from "@/components/auth/PrivateRoutes";
import PublicRoutes from "@/components/auth/PublicRoutes";
import DashboardLayout from "@/components/shared/DashboardLayout";
import Loader from "@/components/shared/Loader";
import LoginLayout from "@/components/shared/LoginLayout";

const LoginPage = lazy(() => import("./pages/login"));
const DashboardPage = lazy(() => import("./pages/dashboard"));

const MembersList = lazy(() => import("./pages/members/List"));
const MembersFormPage = lazy(() => import("./pages/members/Form"));

const CategoriesPage = lazy(() => import("./pages/categories/List"));
const CategoriesFormPage = lazy(() => import("./pages/categories/Form"));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/auth" element={<LoginLayout />}>
              <Route path="login" element={<LoginPage />} />
            </Route>
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<DashboardLayout />}>
              <Route index element={<DashboardPage />} />
              <Route path="members" element={<MembersList />} />
              <Route path="members/create" element={<MembersFormPage />} />
              <Route path="members/:id" element={<MembersFormPage />} />

              <Route path="categories" element={<CategoriesPage />} />
              <Route
                path="categories/create"
                element={<CategoriesFormPage />}
              />
              <Route path="categories/:id" element={<CategoriesFormPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
