import { NavLink } from "react-router-dom";

const UnautorizedNavigation = () => {
  const activeFn = ({ isActive }) => (isActive ? "active-link" : "link");
  return (
    <>
      <br />
      <NavLink to="/register" className={activeFn}>
        registration
      </NavLink>
      <br />
      <NavLink to="/login" className={activeFn}>
        login
      </NavLink>
      <br />
    </>
  );
};

export default UnautorizedNavigation;
