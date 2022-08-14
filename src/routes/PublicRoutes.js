import { useLocation, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { usersSelectors } from "../redux/users/";

const PublicRoutes = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(usersSelectors.getUserLogeedIn);

  if (isLoggedIn === true) {
    // console.log("PRV ROUTE: user is loggedIn");
    return <Navigate to="/contacts" state={{ from: location }} />;
  }

  return children;
};

export { PublicRoutes };
