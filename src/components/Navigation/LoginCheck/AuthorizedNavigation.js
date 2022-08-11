import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { usersOperations } from "../../../redux/users";

const AuthorizedNavigation = () => {
  const dispatch = useDispatch();
  const activeFn = ({ isActive }) => (isActive ? "active-link" : "link");

  return (
    <>
      <NavLink to="/contacts" className={activeFn}>
        contacts
      </NavLink>
      <br />
      <NavLink to="/info" className={activeFn}>
        info
      </NavLink>
      <br />

      <button onClick={() => dispatch(usersOperations.logoutUser())}>
        Log out
      </button>
    </>
  );
};

export default AuthorizedNavigation;
