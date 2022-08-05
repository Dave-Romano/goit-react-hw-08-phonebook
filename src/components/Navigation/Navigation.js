import { Link, Outlet } from "react-router-dom";
import { NavigationStyled } from "./NavigationStyled";

import { useDispatch } from "react-redux";
import { usersOperations } from "../../redux/users";

const Navigation = () => {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "link");

  const dispatch = useDispatch();

  dispatch(usersOperations.logoutUser);

  return (
    <>
      <NavigationStyled>
        <nav>
          <Link to="/contacts" className={setActive}>
            contacts
          </Link>
          <Link to="/register" className={setActive}>
            registration
          </Link>
          <Link to="/login" className={setActive}>
            login
          </Link>
          <Link to="/info" className={setActive}>
            info
          </Link>

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
