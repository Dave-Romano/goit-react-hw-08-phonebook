import { NavLink, Outlet } from "react-router-dom";
import { NavigationStyled } from "./NavigationStyled";

const Navigation = () => {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "link");

  return (
    <>
      <NavigationStyled>
        <nav>
          <div>
            <NavLink to="/contacts" className={setActive}>
              contacts
            </NavLink>
          </div>
          <div>
            <NavLink to="/register" className={setActive}>
              registration
            </NavLink>
            <NavLink to="/login" className={setActive}>
              login
            </NavLink>
          </div>
        </nav>
        <Outlet />
      </NavigationStyled>
    </>
  );
};

export default Navigation;
