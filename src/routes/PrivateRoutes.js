import { useLocation, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { usersSelectors } from "../redux/users/";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(usersSelectors.getUserLogeedIn);

  if (isLoggedIn === false) {
    // console.log("PRV ROUTE: user is not loggedIn");
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export { PrivateRoutes };
