import { useLocation, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { usersSelectors } from "../redux/users/";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(usersSelectors.getUserLogeedIn);
  useEffect(() => {
    console.log("LOGGEN:", isLoggedIn);
  });

  if (isLoggedIn === false) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
  return;
};

export { PrivateRoute };
