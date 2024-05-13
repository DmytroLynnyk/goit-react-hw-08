import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "../redux/auth/operations";
import { useAuth } from "../hooks";

const HomePage = lazy(() => import("../pages/Home"));
const RegisterPage = lazy(() => import("../pages/Register"));
const LoginPage = lazy(() => import("../pages/Login"));
const ContactsList = lazy(() => import("../pages/Contacts"));
const Profile = lazy(() => import("../pages/Profile"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsList />} />
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute redirectTo="/login" component={<Profile />} />
            }
          />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};
