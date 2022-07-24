import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ({ login }) => {
  let auth = { token: login };
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
