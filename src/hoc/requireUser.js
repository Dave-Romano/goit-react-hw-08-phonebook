import { useLocation, Navigate } from "react-router-dom";

const RequireUser = ({ children }) => {
  const location = useLocation();
  const auth = false;

  if (auth === false) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export { RequireUser };
