import { Link, NavLink, Outlet } from "react-router-dom";
import { NavigationStyled } from "./NavigationStyled";

import { useDispatch } from "react-redux";
import { usersOperations } from "../../redux/users";
import { useState } from "react";

import { useSelector } from "react-redux";
import { usersSelectors } from "../../redux/users";

import AuthorizedNavigation from "./LoginCheck/AuthorizedNavigation";
import UnautorizedNavigation from "./LoginCheck/UnautorizedNavigation";

const Navigation = () => {
  const dispatch = useDispatch();

  dispatch(usersOperations.logoutUser);
  const isLoggedIn = useSelector(usersSelectors.getUserLogeedIn);

  const activeFn = ({ isActive }) => (isActive ? "active-link" : "link");

  return (
    <NavigationStyled>
      {isLoggedIn ? <AuthorizedNavigation /> : <UnautorizedNavigation />}

      {/* <NavLink to="/contacts" className={activeFn}>
            contacts
          </NavLink>
          <br />
          <NavLink to="/register" className={activeFn}>
            registration
          </NavLink>
          <br />
          <NavLink to="/" className={activeFn}>
            login
          </NavLink>
          <br />
          <NavLink to="/info" className={activeFn}>
            info
          </NavLink>
          <br />

          <button onClick={() => dispatch(usersOperations.logoutUser())}>
            Log out
          </button> */}
    </NavigationStyled>
  );
};

export default Navigation;
