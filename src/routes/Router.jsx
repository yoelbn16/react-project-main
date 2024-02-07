import { Routes, Route } from "react-router-dom";
import ROUTES from "./ROUTES";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import AuthGuard from "../guard/AuthGuard";
import BizGuard from "../guard/BizGuard";
import ErrorPage from "../Pages/ErrorPage";
import AboutUsPage from "./../Pages/AboutUsPage";
import EditCardPage from "../Pages/EditCardPage";
import CreateCardPage from "../Pages/CreateCardPage";
import SandboxPage from "../sandbox/AdminSandboxPage";
import MyCardsPage from "../Pages/MyCardsPage";
import FavPage from "../Pages/FavPage";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import AdminGuard from "../guard/adminGuard";
import ProfilePage from "../Pages/ProfilePage";
import EditUserPage from "../Pages/EditUserPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutUsPage />} />
      <Route path={`${ROUTES.DETAILS}/:id`} element={<DetailsPage />} />
      <Route
        path={`${ROUTES.EDITCARD}/:id`}
        element={
          <BizGuard>
            <EditCardPage />
          </BizGuard>
        }
      />
      <Route
        path={ROUTES.CREATECARD}
        element={
          <BizGuard>
            <CreateCardPage />
          </BizGuard>
        }
      />
      <Route
        path={ROUTES.FAV}
        element={
          <AuthGuard>
            <FavPage />
          </AuthGuard>
        }
      />
      <Route
        path={ROUTES.PROFILE}
        element={
          <AuthGuard>
            <ProfilePage />
          </AuthGuard>
        }
      />
      <Route
        path={`${ROUTES.EDITUSER}/:id`}
        element={
          <AuthGuard>
            <EditUserPage />
          </AuthGuard>
        }
      />
      <Route
        path={ROUTES.MYCARDS}
        element={
          <BizGuard>
            <MyCardsPage />
          </BizGuard>
        }
      />
      <Route
        path={ROUTES.SANDBOX}
        element={
          <AdminGuard>
            <SandboxPage />
          </AdminGuard>
        }
      ></Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
