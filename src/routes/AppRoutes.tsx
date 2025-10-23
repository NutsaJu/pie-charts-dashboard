import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./routes";
import Layout from "../components/layout/Layout";
import Loader from "../components/Loader";

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} element={<Layout />}>
            <Route path={path} element={<Component />} />
          </Route>
        ))}

        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
