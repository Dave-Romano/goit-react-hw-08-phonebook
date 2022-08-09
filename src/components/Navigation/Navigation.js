import { Link, NavLink, Outlet } from "react-router-dom";
import { NavigationStyled } from "./NavigationStyled";

import { useDispatch } from "react-redux";
import { usersOperations } from "../../redux/users";
import { useState } from "react";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  const setActive = (isActive) => (isActive ? "active-link" : "link");

  const dispatch = useDispatch();

  dispatch(usersOperations.logoutUser);

  const activeFn = ({ isActive }) => (isActive ? "active-link" : "link");

  return (
    <>
      <NavigationStyled>
        <nav>
          <NavLink to="/contacts" className={activeFn}>
            contacts
          </NavLink>
          <br />
          <NavLink to="/register" className={activeFn}>
            registration
          </NavLink>
          <br />
          <NavLink to="/login" className={activeFn}>
            login
          </NavLink>
          <br />
          <NavLink to="/info" className={activeFn}>
            info
          </NavLink>
          <br />

          <button onClick={() => dispatch(usersOperations.logoutUser())}>
            Log out
          </button>
        </nav>
        <Outlet />
      </NavigationStyled>
    </>
  );
};

export default Navigation;
